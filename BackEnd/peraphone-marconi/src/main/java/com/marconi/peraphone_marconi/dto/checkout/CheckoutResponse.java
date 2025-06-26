package com.marconi.peraphone_marconi.dto.checkout;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class CheckoutResponse {
    private Long orderId;
    private LocalDateTime orderDate;
    private BigDecimal total;
    private String message;
}