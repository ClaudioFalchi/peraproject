package com.marconi.peraphone_marconi.service;

import com.marconi.peraphone_marconi.dto.checkout.CheckoutResponse;
import com.marconi.peraphone_marconi.entity.*;
import com.marconi.peraphone_marconi.repository.CartItemRepository;
import com.marconi.peraphone_marconi.repository.OrderItemRepository;
import com.marconi.peraphone_marconi.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CheckoutService {

    private final CartItemRepository cartItemRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    @Transactional
    public CheckoutResponse checkout(User user) {
        List<CartItem> cartItems = cartItemRepository.findByUserId(user.getId());

        if (cartItems.isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        // Calculate total
        BigDecimal total = cartItems.stream()
                .map(item -> item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Create order
        Order order = new Order();
        order.setUserId(user.getId());
        order.setDate(LocalDateTime.now());
        order.setTotal(total);
        Order savedOrder = orderRepository.save(order);

        // Create order items
        for (CartItem cartItem : cartItems) {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrderId(savedOrder.getId());
            orderItem.setProductId(cartItem.getProductId());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(cartItem.getProduct().getPrice());
            orderItemRepository.save(orderItem);
        }

        // Clear cart
        cartItemRepository.deleteByUserId(user.getId());

        CheckoutResponse response = new CheckoutResponse();
        response.setOrderId(savedOrder.getId());
        response.setOrderDate(savedOrder.getDate());
        response.setTotal(savedOrder.getTotal());
        response.setMessage("Order placed successfully");

        return response;
    }
}