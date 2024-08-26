package com.project.cuisine_compass.account;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "account")
public class Account {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(name = "name")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "pan_no")
    private String panNo;

    @Column(name = "city")
    private String city;

    @Column(name = "country")
    private String country;

    @Column(name = "state")
    private String state;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "restaurant_tag")
    @Enumerated(EnumType.STRING)
    private com.project.menu_compass.account.RestaurantTag restaurantTag;

    @Column(name = "business_plan_type")
    @Enumerated(EnumType.STRING)
    private com.project.menu_compass.account.BusinessPlan businessPlanType;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;

}






