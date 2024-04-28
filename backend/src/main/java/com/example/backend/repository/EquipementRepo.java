package com.example.backend.repository;


import com.example.backend.enumerations.Nome;
import com.example.backend.model.entity.Equipement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EquipementRepo extends JpaRepository<Equipement, Integer> {

    @Query(value ="SELECT * from equipement where nome = :nome and agence_numero = :numAgence", nativeQuery = true)
    Equipement getEquipement(@Param("nome") String nome, @Param("numAgence") Integer numAgence);
}
