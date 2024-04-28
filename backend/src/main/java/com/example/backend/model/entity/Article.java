package com.example.backend.model.entity;

import com.example.backend.enumerations.Categorie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Table(name="article")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idArticle")
    private int idArticle;
    @Enumerated(EnumType.STRING)
    private Categorie categorie;
    @Column(name="ArticleName", unique = true)
    private String articleName;
    @Column(name="ArticlePrix")
    private float articlePrix;

}
