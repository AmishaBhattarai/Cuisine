package com.project.cuisine_compass.menu;

import com.project.cuisine_compass.cart.CartItem;
import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.restaurant.Restaurant;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Double price;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "model_url")
    private String model3dUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "menu_type")
    @Enumerated(EnumType.STRING)
    private MenuType menuType;

    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL)
    private List<CartItem> cartItems = new ArrayList<>();

    @ManyToOne
    private Cuisine cuisine;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

}
