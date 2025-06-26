package com.marconi.peraphone_marconi.dto.cart;

import lombok.Data;

@Data
public class AddToCartRequest {
    private Long productId;
    private Integer quantity;
}