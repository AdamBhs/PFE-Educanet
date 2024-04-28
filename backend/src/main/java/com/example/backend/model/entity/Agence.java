package com.example.backend.model.entity;

import com.example.backend.enumerations.Etat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Table(name="agence")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Agence {
    @Id
    @Column(name="numero")
    private int numeroAgence;
    @Column(name="agenceName")
    private String agenceName;

    @Enumerated(EnumType.STRING)
    private Etat etat;

}
