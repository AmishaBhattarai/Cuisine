package com.project.cuisine_compass.cart;

import lombok.Data;

@Data
public class CartItemRequestDto {
    private Long menuId;
    private int quantity;
}
