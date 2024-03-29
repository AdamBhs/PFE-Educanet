package com.example.backend.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="customers")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customers {
    @Id
    @Column(name="code_client")
    private Integer codeClient;
    @Column(name="num_agence")
    private Integer NumAgence;
    @Column(name="name")
    private String name;

}
