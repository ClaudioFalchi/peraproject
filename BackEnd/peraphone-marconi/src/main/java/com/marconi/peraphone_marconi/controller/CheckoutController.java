package com.marconi.peraphone_marconi.controller;

import com.marconi.peraphone_marconi.dto.checkout.CheckoutResponse;
import com.marconi.peraphone_marconi.entity.User;
import com.marconi.peraphone_marconi.service.CheckoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/checkout")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CheckoutController {

    private final CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<CheckoutResponse> checkout(Authentication authentication) {
        try {
            User user = (User) authentication.getPrincipal();
            CheckoutResponse response = checkoutService.checkout(user);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}