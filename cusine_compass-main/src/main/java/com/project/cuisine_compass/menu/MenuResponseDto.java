package com.project.cuisine_compass.menu;

import lombok.Data;

@Data
public class MenuResponseDto {

    private Long id;
    private String name;
    private Double price;
    private String imageUrl;
    private String model3dUrl;
    private String description;

}
