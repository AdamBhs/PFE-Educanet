package com.example.backend.service;

import com.example.backend.enumerations.Etat;
import com.example.backend.model.entity.Agence;
import com.example.backend.repository.AgenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AgenceService {
    @Autowired
    private AgenceRepo agenceRepo;

    public List<Agence> getAgences() {
        return this.agenceRepo.findAll();
    }
    public Agence updateEtatAgence(int numAgence, Etat etat) {
        Optional<Agence> agenceOptional = agenceRepo.findById(numAgence);
        if(agenceOptional.isPresent()) {
            Agence agence = agenceOptional.get();
            agence.setEtat(etat);
            return agenceRepo.save(agence);
        }else {
            throw new IllegalArgumentException("Agence with numero " + numAgence + " not found.");
        }
    }

    public List<Map<String, Object>> getTableAgences() {
        return this.agenceRepo.getTableAgence();
    }
}
