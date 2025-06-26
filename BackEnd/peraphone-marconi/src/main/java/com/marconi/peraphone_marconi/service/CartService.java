package com.marconi.peraphone_marconi.service;

import com.marconi.peraphone_marconi.dto.cart.AddToCartRequest;
import com.marconi.peraphone_marconi.dto.cart.CartItemResponse;
import com.marconi.peraphone_marconi.dto.cart.CartResponse;
import com.marconi.peraphone_marconi.entity.CartItem;
import com.marconi.peraphone_marconi.entity.Product;
import com.marconi.peraphone_marconi.entity.User;
import com.marconi.peraphone_marconi.repository.CartItemRepository;
import com.marconi.peraphone_marconi.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;

    public CartResponse getCart(User user) {
        List<CartItem> cartItems = cartItemRepository.findByUserId(user.getId());

        List<CartItemResponse> itemResponses = cartItems.stream()
                .map(this::mapToCartItemResponse)
                .toList();

        CartResponse response = new CartResponse();
        response.setItems(itemResponses);
        response.setTotal(calculateTotal(itemResponses));
        response.setTotalItems(itemResponses.stream().mapToInt(CartItemResponse::getQuantity).sum());

        return response;
    }

    @Transactional
    public void addToCart(User user, AddToCartRequest request) {
        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Optional<CartItem> existingItem = cartItemRepository.findByUserIdAndProductId(
                user.getId(), request.getProductId());

        if (existingItem.isPresent()) {
            CartItem cartItem = existingItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + request.getQuantity());
            cartItemRepository.save(cartItem);
        } else {
            CartItem cartItem = new CartItem();
            cartItem.setUserId(user.getId());
            cartItem.setProductId(request.getProductId());
            cartItem.setQuantity(request.getQuantity());
            cartItemRepository.save(cartItem);
        }
    }

    @Transactional
    public void removeFromCart(User user, Long productId) {
        cartItemRepository.findByUserIdAndProductId(user.getId(), productId)
                .ifPresent(cartItemRepository::delete);
    }

    @Transactional
    public void updateCartItemQuantity(User user, Long productId, Integer quantity) {
        CartItem cartItem = cartItemRepository.findByUserIdAndProductId(user.getId(), productId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (quantity <= 0) {
            cartItemRepository.delete(cartItem);
        } else {
            cartItem.setQuantity(quantity);
            cartItemRepository.save(cartItem);
        }
    }

    @Transactional
    public void clearCart(User user) {
        cartItemRepository.deleteByUserId(user.getId());
    }

    private CartItemResponse mapToCartItemResponse(CartItem cartItem) {
        CartItemResponse response = new CartItemResponse();
        response.setId(cartItem.getId());
        response.setProductId(cartItem.getProductId());
        response.setProductName(cartItem.getProduct().getName());
        response.setProductPrice(cartItem.getProduct().getPrice());
        response.setProductImageUrl(cartItem.getProduct().getImageUrl());
        response.setQuantity(cartItem.getQuantity());
        response.setSubtotal(cartItem.getProduct().getPrice().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        return response;
    }

    private BigDecimal calculateTotal(List<CartItemResponse> items) {
        return items.stream()
                .map(CartItemResponse::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}