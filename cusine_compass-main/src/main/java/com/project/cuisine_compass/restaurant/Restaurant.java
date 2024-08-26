package com.project.cuisine_compass.restaurant;


import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.Hibernate;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

import com.project.cuisine_compass.account.Account;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "restaurants")
public class Restaurant {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "email")
    private String email;

    @Column(name = "website")
    private String website;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id")
    @Builder.Default
    private List<Menu> menuItems = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @Transient
    private double cosineSimilarity;

    @Transient
    private double distance;

    public void addMenu(Menu menu) {
        Hibernate.initialize(menuItems);
        menuItems.add(menu);
    }

    public void removeMenu(Menu menu) {
        Hibernate.initialize(menuItems);
        menuItems.remove(menu);
    }



    public void setUser(User user) {
        this.user = user;
    }

}




