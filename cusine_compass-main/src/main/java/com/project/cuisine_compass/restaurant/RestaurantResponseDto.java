package com.project.cuisine_compass.restaurant;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RestaurantResponseDto {
    private Long id;
    private String name;
    private String description;
    private String address;
    private String phoneNumber;
    private String email;
    private String website;
    private String image;
    private Double latitude;
    private Double longitude;
    private Double distance;
}
