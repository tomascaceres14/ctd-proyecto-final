package com.ecran.api.users.ui.controllers;

import com.ecran.api.users.data.models.UsersComment;
import com.ecran.api.users.data.models.UsersRating;
import com.ecran.api.users.data.models.UsersWatchlist;
import com.ecran.api.users.event.OnRegistrationCompleteEvent;
import com.ecran.api.users.service.UsersService;
import com.ecran.api.users.shared.ChangePasswordDTO;
import com.ecran.api.users.shared.UserDto;
import com.ecran.api.users.ui.model.*;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private Environment env;

    @Autowired
    UsersService usersService;

    @Autowired
    ApplicationEventPublisher eventPublisher;

    @GetMapping("/status/check")
    public String status() {
        return "Working on port " + env.getProperty("local.server.port") +
                ", with token = " + env.getProperty("token.secret");
    }

    @PostMapping("/signup")
    public ResponseEntity<CreateUserResponseModel> createUser(@RequestBody CreateUserRequestModel userDetails, HttpServletRequest request) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        userDetails.setEnabled(false);
        UserDto userDto = modelMapper.map(userDetails, UserDto.class);

        UserDto createdUser = usersService.createUser(userDto);

        String appUrl = request.getContextPath();
        eventPublisher.publishEvent(new OnRegistrationCompleteEvent(createdUser,
                request.getLocale(), appUrl));

        CreateUserResponseModel returnValue = modelMapper.map(createdUser, CreateUserResponseModel.class);

        return ResponseEntity.status(HttpStatus.CREATED).body(returnValue);
    }

    @PutMapping(value = "/{userId}")
    public ResponseEntity<UserDto> updateUserById(@PathVariable("userId") String userId, @RequestBody UserDto userDTO) {
        UserDto userDto = usersService.updateUser(userId, userDTO);
        return ResponseEntity.status(HttpStatus.OK).body(userDto);
    }

    @GetMapping(value = "/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("userId") String userId) {
        UserDto userDto = usersService.getUserDetailsById(userId);
        return ResponseEntity.status(HttpStatus.OK).body(userDto);
    }

    @PostMapping("/image")
    public ResponseEntity<String> saveImage(@RequestParam("file") MultipartFile file) {
        return new ResponseEntity<>(usersService.saveImage(file), HttpStatus.OK);
    }

    @GetMapping(value = "/{userId}/watchlist")
    public ResponseEntity<List<MoviesResponseModel>> getWatchlistByUserId(@PathVariable("userId") String userId) {
        List<MoviesResponseModel> moviesDetails = usersService.getWatchlistByUserId(userId);
        return ResponseEntity.status(HttpStatus.OK).body(moviesDetails);
    }

    @PostMapping("/{userId}/watchlist")
    public ResponseEntity<List<UsersWatchlist>> addToWatchlist(@PathVariable String userId, @RequestBody UsersMovieWLDTO movieId) {
        return ResponseEntity.ok().body(usersService.addToWatchlist(userId, movieId));
    }

    @GetMapping(value = "/{userId}/confirm")
    public UserConfirmationResponse confirmRegistration(@PathVariable String userId) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return usersService.enableUser(userId);
    }

/*
	@GetMapping("/{userId}/watchlist/csvexport")
	public void exportCSV(HttpServletResponse response, @PathVariable("userId") String userId) throws Exception {
		//set file name and content type
		String filename = "Watchlist-data.csv";

		response.setContentType("text/csv");
		response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
				"attachment; filename=\"" + filename + "\"");
		//create a csv writer
		StatefulBeanToCsv<MoviesResponseModel> writer = new StatefulBeanToCsvBuilder<MoviesResponseModel>(response.getWriter())
				.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR).withOrderedResults(false)
				.build();
		//write all employees data to csv file
		writer.write(usersService.getWatchlistByUserId(userId));
	}
*/

    @PatchMapping("/{userId}/changepassword")
    public String changePassword(@RequestBody ChangePasswordDTO passwordDTO, @PathVariable String userId) {
        return usersService.changePassword(passwordDTO, userId);
    }

    ;

    @PostMapping("/{userId}/addrating")
    public ResponseEntity<String> addRating(@RequestBody UsersRating usersRating, @PathVariable String userId) {
        return ResponseEntity.ok().body(usersService.addRating(userId, usersRating));
    }

    @PostMapping("/{userId}/comments")
    public ResponseEntity<UsersComment> addComment(@RequestBody UserCommentDTO userComment, @PathVariable String userId) {
        return ResponseEntity.ok().body(usersService.addComment(userId, userComment));
    }

    @GetMapping("/{movieId}/comments")
    public List<UserCommentResponseDTO> getCommentsByMovieId(@PathVariable String movieId) {
        return usersService.getCommentsByMovieId(movieId);
    }

    @GetMapping("/{userId}/sendemail")
    public int sendVerificationEmail(@PathVariable String userId, HttpServletRequest request) {
        String appUrl = request.getContextPath();
        return usersService.sendVerificationEmail(userId, appUrl, request.getLocale());
    }
}
