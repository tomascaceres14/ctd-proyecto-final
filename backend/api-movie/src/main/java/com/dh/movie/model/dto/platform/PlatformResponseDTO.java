package com.dh.movie.model.dto.platform;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlatformResponseDTO {

    private String platformId;
    private String name;
    private String logo_url;
}
