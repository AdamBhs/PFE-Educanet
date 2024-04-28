package com.example.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Table(name="customers")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customers {
    @Id
    @Column(name="customerCode")
    private int codeClient;
    @Column(name="pinCode")
    private int pinCode;
    @Column(name="CustomerName")
    private String name;
    @Column(name="numeroTelp")
    private String numTelp;

    @ManyToOne(cascade = CascadeType.ALL)
    Agence agence;


}
