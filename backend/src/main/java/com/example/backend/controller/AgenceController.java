package com.example.backend.controller;

import com.example.backend.enumerations.Etat;
import com.example.backend.model.entity.Agence;
import com.example.backend.service.AgenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class AgenceController {
    @Autowired
    private AgenceService agenceService;

    @PutMapping("/updateAgenceEtat")
    public Agence updateAgenceEtat(@RequestParam("numAgence") int num, @RequestParam("newEtat") Etat etat) {
        return agenceService.updateEtatAgence(num, etat);
    }

    @GetMapping("/getAgences")
    public List<Agence> getAgences() {
        return agenceService.getAgences();
    }

    @GetMapping("/getTableAgences")
    public List<Map<String, Object>> getTableAgences() {
        return agenceService.getTableAgences();
    }
}
