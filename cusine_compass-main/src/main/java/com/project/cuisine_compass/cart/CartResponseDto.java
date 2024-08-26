package com.project.cuisine_compass.cart;

import lombok.Data;

import java.util.List;

@Data
public class CartResponseDto {
    private Long id;
    private List<CartItemResponseDto> items;
    private Double totalAmountPaid;
    private String paymentMethod;
    private String paymentStatus;
}
