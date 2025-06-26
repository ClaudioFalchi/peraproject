package com.marconi.peraphone_marconi.service;

import com.marconi.peraphone_marconi.dto.auth.AuthResponse;
import com.marconi.peraphone_marconi.dto.auth.LoginRequest;
import com.marconi.peraphone_marconi.dto.auth.RegisterRequest;
import com.marconi.peraphone_marconi.entity.User;
import com.marconi.peraphone_marconi.repository.UserRepository;
import com.marconi.peraphone_marconi.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        User savedUser = userRepository.save(user);
        String jwtToken = jwtUtil.generateToken(savedUser);

        return new AuthResponse(jwtToken, savedUser.getId(), savedUser.getName(), savedUser.getEmail());
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String jwtToken = jwtUtil.generateToken(user);

        return new AuthResponse(jwtToken, user.getId(), user.getName(), user.getEmail());
    }
}