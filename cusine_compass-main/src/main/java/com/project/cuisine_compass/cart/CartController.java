package com.project.cuisine_compass.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carts")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/{cartId}")
    public ResponseEntity<CartResponseDto> getCart(@PathVariable Long cartId) {
        CartResponseDto cartResponseDto = cartService.getCart(cartId);
        return ResponseEntity.ok(cartResponseDto);
    }

    @PostMapping
    public ResponseEntity<CartResponseDto> createCart(@RequestBody CartRequestDto cartRequestDto) {
        CartResponseDto cartResponseDto = cartService.createCart(cartRequestDto);
        return ResponseEntity.ok(cartResponseDto);
    }

    @GetMapping
    public ResponseEntity<List<CartResponseDto>> getAllCarts() {
        List<CartResponseDto> cartResponseDtos = cartService.getAllCarts();
        return ResponseEntity.ok(cartResponseDtos);
    }

    @PostMapping("/{cartId}/items")
    public ResponseEntity<CartResponseDto> addItemToCart(@PathVariable Long cartId, @RequestBody CartItemRequestDto cartItemRequestDto) {
        CartResponseDto cartResponseDto = cartService.addItemToCart(cartId, cartItemRequestDto);
        return ResponseEntity.ok(cartResponseDto);
    }
}
