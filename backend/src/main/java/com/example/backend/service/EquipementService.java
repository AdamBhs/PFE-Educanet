package com.example.backend.service;

import com.example.backend.enumerations.Nome;
import com.example.backend.model.entity.Equipement;
import com.example.backend.repository.EquipementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipementService {

    @Autowired
    private EquipementRepo equipementRepo;

    public Equipement getEquipement(String nome, Integer numAgence) {
        return this.equipementRepo.getEquipement(nome, numAgence);

    }
}
