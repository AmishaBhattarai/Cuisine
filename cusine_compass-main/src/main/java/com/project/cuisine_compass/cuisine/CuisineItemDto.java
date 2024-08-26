package com.project.cuisine_compass.cuisine;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CuisineItemDto {
    @NotNull(message = "Cuisine name cannot be null")
    @NotEmpty(message = "Cuisine name cannot be empty")
    private String name;
    @NotNull(message = "Cuisine price cannot be null")
    @NotEmpty(message = "Cuisine price cannot be empty")
    private String description;
}
