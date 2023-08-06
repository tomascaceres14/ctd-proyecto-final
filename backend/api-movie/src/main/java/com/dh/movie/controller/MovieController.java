package com.dh.movie.controller;

import com.dh.movie.model.dto.movie.MovieRequestDTO;
import com.dh.movie.model.dto.movie.PlatformResponseDTO;
import com.dh.movie.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @PostMapping("")
    ResponseEntity<PlatformResponseDTO> save(@Valid @RequestBody MovieRequestDTO movie) {
        return ResponseEntity.ok().body(movieService.save(movie));
    }

    @GetMapping("")
    ResponseEntity<List<PlatformResponseDTO>> findAll() {
        return ResponseEntity.ok().body(movieService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<PlatformResponseDTO> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(movieService.findById(id));
    }

    @PutMapping("/{id}")
    ResponseEntity<PlatformResponseDTO> updateById(@PathVariable("id") String id, @Valid @RequestBody MovieRequestDTO movie) {
        return ResponseEntity.ok().body(movieService.updateById(id, movie));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteById(@PathVariable("id") String id) {
        movieService.deleteById(id);
        return ResponseEntity.ok().body("Movie " + id + " deleted");
    }

    @GetMapping("/genre/{genre}")
    ResponseEntity<List<PlatformResponseDTO>> getMovieByGenre(@PathVariable String genre) {
        return ResponseEntity.ok().body(movieService.findByGenre(genre));
    }
}
