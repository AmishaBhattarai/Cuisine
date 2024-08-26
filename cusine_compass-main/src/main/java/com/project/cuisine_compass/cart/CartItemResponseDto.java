package com.project.cuisine_compass.cart;

import lombok.Data;

@Data
public class CartItemResponseDto {
    private Long id;
    private String menuName;
    private int quantity;
    private Double price;
}
