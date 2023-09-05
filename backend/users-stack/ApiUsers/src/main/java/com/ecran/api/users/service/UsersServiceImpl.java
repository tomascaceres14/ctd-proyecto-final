package com.ecran.api.users.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.ecran.api.users.data.UserEntity;
import com.ecran.api.users.data.UsersRepository;
import com.ecran.api.users.ui.model.MoviesResponseModel;
import com.ecran.api.users.ui.model.UsersMovieWLDTO;
import feign.FeignException;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecran.api.users.shared.UserDto;
import com.ecran.api.users.data.*;

@Service
public class UsersServiceImpl implements UsersService {

	UsersRepository usersRepository;
	WatchlistRepository watchlistRepository;
	BCryptPasswordEncoder bCryptPasswordEncoder;
//	RestTemplate restTemplate;
	Environment environment;
	MoviesServiceClient moviesServiceClient;
	private final ModelMapper mapper;
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	public UsersServiceImpl(UsersRepository usersRepository, BCryptPasswordEncoder bCryptPasswordEncoder, Environment environment, MoviesServiceClient moviesServiceClient, ModelMapper mapper, WatchlistRepository watchlistRepository)
	{
		this.usersRepository = usersRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//		this.restTemplate = restTemplate;
		this.moviesServiceClient=moviesServiceClient;
		this.environment= environment;
		this.mapper = mapper;
		this.watchlistRepository = watchlistRepository;
	}

	@Override
	public List<UsersMovieWatchlist> addToWatchlist(String userId, UsersMovieWLDTO movieId) {
		// Agregar condicion; Si movieId existe en la watchlist -> Quitarla
		UserEntity userEntity = usersRepository.findByUserId(userId);

		if(userEntity == null) throw new UsernameNotFoundException("User not found");

		for (UsersMovieWatchlist m :
				userEntity.getWatchlist()) {
			if (m.getMovieId() == movieId.getMovieId()) {
				watchlistRepository.deleteById(m.getId());
			}
		}

		UsersMovieWatchlist umwl = mapper.map(movieId, UsersMovieWatchlist.class);
		userEntity.getWatchlist().add(umwl);
		return usersRepository.save(userEntity).getWatchlist();

//		return userEntity.getWatchlist();
	}
	@Override
	public UserDto createUser(UserDto userDetails) {
		// TODO Auto-generated method stub
		
		userDetails.setUserId(UUID.randomUUID().toString());
		userDetails.setEncryptedPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
		
		ModelMapper modelMapper = new ModelMapper(); 
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		UserEntity userEntity = modelMapper.map(userDetails, UserEntity.class);

		usersRepository.save(userEntity);
		
		UserDto returnValue = modelMapper.map(userEntity, UserDto.class);
 
		return returnValue;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity userEntity = usersRepository.findByEmail(username);
		
		if(userEntity == null) throw new UsernameNotFoundException(username);
		
		return new User(userEntity.getEmail(),userEntity.getEncryptedPassword(),
				true, true, true, true, new ArrayList<>());
	}

	@Override
	public UserDto getUserDetailsById(String userId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException(userId);
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public UserDto getUserDetailsByEmail(String email) {
		UserEntity userEntity = usersRepository.findByEmail(email);
		
		if(userEntity == null) throw new UsernameNotFoundException(email);
		
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public List<MoviesResponseModel> getWatchlistByUserId(String userId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException("User not found");

		// TO DO: El ms Movies recibe como parametro una lista de IDs
		// Con la implementacion de <UsersMovieWatchlist> los IDs se encuentran
		// dentro del objeto watchlistIds
		List<UsersMovieWatchlist> watchlistIds = userEntity.getWatchlist();

		logger.debug("Before calling movies Microservice");
		List<String> moviesIds = new ArrayList<>();
		for (UsersMovieWatchlist m:
			 watchlistIds) {
			moviesIds.add(m.getMovieId());
		}
		System.out.println(moviesIds);
		List<MoviesResponseModel> moviesList = new ArrayList<>();

		try {
			moviesList = moviesServiceClient.watchlist(moviesIds);

		} catch (FeignException e) {
			logger.error(e.getLocalizedMessage());
		}
		logger.debug("After calling movies Microservice");
		return moviesList;
	}

}
