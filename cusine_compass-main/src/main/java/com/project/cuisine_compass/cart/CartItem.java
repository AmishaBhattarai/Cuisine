package com.project.cuisine_compass.cart;

import com.project.cuisine_compass.menu.Menu;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;

    private int quantity;

    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
}
