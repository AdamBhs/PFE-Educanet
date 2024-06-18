package com.example.backend.repository;

import com.example.backend.model.entity.Operations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface OperationsRepo extends JpaRepository<Operations, Integer> {
   @Query(value = "SELECT * FROM operations WHERE code_customer = :codeCustomer AND date_operation BETWEEN :startDate AND :endDate", nativeQuery = true)
   List<Operations> getOperationsByCodeCustomer(@Param("codeCustomer") Integer codeCustomer, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

   @Query(value = "Select count(operation_number) from operations where DATE(date_operation) = CURRENT_DATE ", nativeQuery = true)
   Integer getTotalOperationsToDay();


}
