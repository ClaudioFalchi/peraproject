package com.marconi.peraphone_marconi.repository;

import com.marconi.peraphone_marconi.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserIdOrderByDateDesc(Long userId);
}