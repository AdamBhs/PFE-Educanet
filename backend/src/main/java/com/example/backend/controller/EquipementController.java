package com.example.backend.controller;


import com.example.backend.model.entity.Equipement;
import com.example.backend.service.EquipementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class EquipementController {
    @Autowired
    private EquipementService equipementService;

    @GetMapping("/getEquipement")
    public Equipement getEquipement(@RequestParam("numAgence") int numAgence,
                                    @RequestParam("nome") String nome) {
        return this.equipementService.getEquipement(nome, numAgence);
    }
}
