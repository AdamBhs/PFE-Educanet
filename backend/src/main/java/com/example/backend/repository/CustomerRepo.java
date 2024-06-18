package com.example.backend.repository;

import com.example.backend.model.entity.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface CustomerRepo extends JpaRepository<Customers, Integer> {

    @Query(value = "SELECT a.agence_name AS agence_name, " +
            "COUNT(c.customer_code) AS num " +
            "FROM customers c " +
            "JOIN agence a ON c.agence_numero = a.numero " +
            "GROUP BY a.agence_name",
            nativeQuery = true)
    List<Map<String, Integer>> countCustomersByAgenceName();

    @Query(value="SELECT * FROM customers c " +
            "JOIN agence a ON c.agence_numero = a.numero " +
            "WHERE a.agence_name = :agenceName",
            nativeQuery = true)
    List<Customers> getCustomersByAgence(@Param("agenceName") String agenceName);
}
