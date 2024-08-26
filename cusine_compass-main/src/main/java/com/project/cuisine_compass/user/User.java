package com.project.cuisine_compass.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.cuisine_compass.cart.Cart;
import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.restaurant.Restaurant;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @JsonIgnore
    @Column(name = "reset_token")
    private String resetToken;

    @JsonIgnore
    @Column(name = "date_of_registration")
    private LocalDateTime dateOfRegistration;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Transient
    private double latitude;

    @Transient
    private double longitude;

    @ManyToMany
    private Set<Cuisine> cuisines = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Cart cart;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Restaurant> restaurants = new ArrayList<>();

    public User(String username, String email, String encode) {
        this.username = username;
        this.email = email;
        this.password = encode;
    }

    public void setCuisines(Set<Cuisine> cuisines) {
        this.cuisines = cuisines;
    }


    public void addRestaurant(Restaurant restaurant) {
        if (this.restaurants == null) {
            this.restaurants = new ArrayList<>();
        }
        this.restaurants.add(restaurant);
        restaurant.setUser(this); // Ensure the Restaurant is aware of its User
    }

    // Assuming User has a method addRestaurant

    public void removeRestaurant(Restaurant restaurant) {
        restaurants.remove(restaurant);
        restaurant.setUser(null);
    }

    public void clearRestaurants() {
        restaurants.clear();
    }
    public Collection<? extends GrantedAuthority> getRoles() {
        return new ArrayList<>() {{
            add(new GrantedAuthority() {
                @Override
                public String getAuthority() {
                    return role.name();
                }
            });
        }};

    }
}

