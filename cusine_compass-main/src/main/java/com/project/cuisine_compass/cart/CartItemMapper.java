package com.project.cuisine_compass.cart;


import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)

public interface CartItemMapper {
    CartItem toCartItem(CartItemRequestDto cartItemRequestDto);

    CartItemRequestDto toCartItemRequestDto(CartItem cartItem);

    CartItemResponseDto toCartItemResponseDto(CartItem cartItem);

    List<CartItemResponseDto> toCartItemResponseDtoList(List<CartItem> cartItems);
}

