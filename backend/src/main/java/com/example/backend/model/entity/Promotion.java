package com.example.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Table(name="Promotion")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idPromotion")
    private int idPromotion;

    @Column(name="newprix")
    private double newPrix;

    @Column(name="startPromotionDate")
    private Date startPromotionDate;

    @Column(name="endPromotionDate")
    private Date endPromotionDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idArticle")
    private Article article;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idCustomer")
    private Customers customers;

    @ManyToOne(cascade = CascadeType.ALL)
    private Agence agence;
}
