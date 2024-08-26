package com.project.cuisine_compass.menu;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
public class MenuItemRequestDto {
    @NotNull(message = "Menu name cannot be null")
    @NotEmpty(message = "Menu name cannot be empty")
    private String name;
    @NotNull(message = "Menu price cannot be null")
    private Double price;
    @NotNull(message = "Menu image cannot be null")
    @NotEmpty(message = "Menu image cannot be empty")
    private String imageUrl;
    @NotNull(message = "Menu 3D model URL cannot be null")
    @NotEmpty(message = "Menu 3D model URL cannot be empty")
    private String model3dUrl;
    @NotNull(message = "Menu description cannot be null")
    @NotEmpty(message = "Menu description cannot be empty")
    private String description;
    @NotNull(message = "CuisineId cannot be null")
    private Long cuisineId;
    @NotNull(message = "Menu type cannot be null")
    private MenuType menuType;
}
