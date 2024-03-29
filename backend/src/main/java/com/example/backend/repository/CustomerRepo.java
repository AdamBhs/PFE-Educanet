package com.example.backend.repository;

import com.example.backend.model.entity.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customers, Integer> {

}
