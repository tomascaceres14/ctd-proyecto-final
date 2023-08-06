package com.dh.movie.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(collection = "Movies")
public class Movie implements Serializable {

    @Serial
    private static final int serialVersionUID = 1;

    @Id
    private String movieId;
    @NotBlank
    private String title;
    @NotBlank
    private String actors;
    @NotBlank
    private String director;
    @NotBlank
    private String composer;
    @NotBlank
    private String review;
    @NotBlank
    private String image_url;
    @NotBlank
    private String trailer_url;
    @NotBlank
    private String release_date;
    @NotBlank
    private String genre;
    @NotBlank
    private String rt_score;
    @NotBlank
    private String imdb_score;
    @NotBlank
    private String mc_score;
    @NotBlank
    private List<String> platforms = new ArrayList<>();
    @NotBlank
    private List<String> comments = new ArrayList<>();
    @NotBlank
    private List<String> scores = new ArrayList<>();

}
