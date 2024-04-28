package com.example.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Table(name="Notifications")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notifications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idNotification;
    @Column(name="title")
    private String title;
    @Column(name="description")
    private String description;
    @Column(name="date")
    private Date date;

    @ManyToOne(cascade = CascadeType.ALL)
    Agence agence;
}
