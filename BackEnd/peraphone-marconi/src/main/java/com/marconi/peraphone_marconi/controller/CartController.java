package com.marconi.peraphone_marconi.controller;

import com.marconi.peraphone_marconi.dto.cart.AddToCartRequest;
import com.marconi.peraphone_marconi.dto.cart.CartResponse;
import com.marconi.peraphone_marconi.entity.User;
import com.marconi.peraphone_marconi.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<CartResponse> getCart(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        CartResponse cart = cartService.getCart(user);
        return ResponseEntity.ok(cart);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody AddToCartRequest request,
                                            Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        cartService.addToCart(user, request);
        return ResponseEntity.ok("Item added to cart");
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long productId,
                                                 Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        cartService.removeFromCart(user, productId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<String> updateCartItem(@PathVariable Long productId,
                                                 @RequestParam Integer quantity,
                                                 Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        cartService.updateCartItemQuantity(user, productId, quantity);
        return ResponseEntity.ok("Cart item updated");
    }

    @DeleteMapping("/clear")
    public ResponseEntity<String> clearCart(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        cartService.clearCart(user);
        return ResponseEntity.ok("Cart cleared");
    }
}