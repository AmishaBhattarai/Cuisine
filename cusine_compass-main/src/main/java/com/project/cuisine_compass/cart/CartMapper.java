package com.project.cuisine_compass.cart;


import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)

public interface CartMapper {
    Cart toCart(CartRequestDto cartRequestDto);

    CartRequestDto toCartRequestDto(Cart cart);

    CartResponseDto toCartResponseDto(Cart cart);

    List<CartResponseDto> toCartResponseDtoList(List<Cart> carts);

    CartItem toCartItem(CartItemRequestDto cartItemRequestDto);
}
