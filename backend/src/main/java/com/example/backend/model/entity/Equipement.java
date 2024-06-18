package com.example.backend.model.entity;


import com.example.backend.enumerations.Nome;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Table(name="Equipement")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idEquipement")
    private int idEquipement;

    @Column(name="numberOfCycles")
    private int numOfCycles;

    @Column(name="date")
    private Date date;

    @Column(name="workStartTime")
    private Time workStartTime;

    @Column(name="workEndTime")
    private Time workEndTime;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private Nome nome;

    @ManyToOne(cascade = CascadeType.ALL)
    Agence agence;

    public enum Status {
        ON,
        OFF
    }
}
