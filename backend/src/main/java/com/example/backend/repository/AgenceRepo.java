package com.example.backend.repository;

import com.example.backend.model.entity.Agence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface AgenceRepo extends JpaRepository<Agence, Integer> {
    @Query(value ="Select agence_name as Name, etat as Etat from Agence", nativeQuery = true)
    List<Map<String, Object>> getTableAgence();
}