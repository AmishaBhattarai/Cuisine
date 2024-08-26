package com.project.cuisine_compass.account;

import lombok.Data;

@Data
public class AccountDto {

    private String fullName;
    private String email;
    private String businessName;
    private String panNo;
    private String city;
    private String country;
    private String state;
    private String zipCode;
    private String mobileNumber;
    private com.project.menu_compass.account.RestaurantTag restaurantTag;
    private com.project.menu_compass.account.BusinessPlan businessPlanType;

}
