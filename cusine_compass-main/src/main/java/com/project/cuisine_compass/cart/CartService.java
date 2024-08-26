package com.project.cuisine_compass.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final CartMapper cartMapper;

    @Autowired
    public CartService(CartRepository cartRepository, CartMapper cartMapper) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
    }

    public CartResponseDto getCart(Long cartId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
        return cartMapper.toCartResponseDto(cart);
    }

    public CartResponseDto createCart(CartRequestDto cartRequestDto) {
        Cart cart = cartMapper.toCart(cartRequestDto);
        Double total  = 0.0;
        for(var item : cart.getItems()){
          var totalItemPrice = item.getPrice() * item.getQuantity();
          total += totalItemPrice;
      }
        cart.setTotalAmountPaid(total);
        Cart savedCart = cartRepository.save(cart);
        return cartMapper.toCartResponseDto(savedCart);
    }

    public List<CartResponseDto> getAllCarts() {
        List<Cart> carts = cartRepository.findAll();
        return cartMapper.toCartResponseDtoList(carts);
    }

    public CartResponseDto addItemToCart(Long cartId, CartItemRequestDto cartItemRequestDto) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
        CartItem cartItem = cartMapper.toCartItem(cartItemRequestDto);
        cart.getItems().add(cartItem);
        Cart savedCart = cartRepository.save(cart);
        return cartMapper.toCartResponseDto(savedCart);
    }
}
