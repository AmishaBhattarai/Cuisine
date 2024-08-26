package com.project.cuisine_compass.restaurant;

import lombok.Data;

@Data
public class RestaurantRequestDto {
    private String name;
    private String description;
    private String address;
    private String phoneNumber;
    private String email;
    private String website;
    private String image;
    private Double latitude;
    private Double longitude;
}
