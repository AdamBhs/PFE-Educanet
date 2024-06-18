package com.example.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Table(name="customer_Archive")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerArchive {
    @EmbeddedId
    private IdCustomerArchive idCustomerArchive;

    @Column(name="quantity")
    private int quantity;

    @ManyToOne
    @JoinColumn(name="idArticle")
    private Article article;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="customerId")
    private Customers customers;
    @Embeddable
    public static class IdCustomerArchive implements Serializable {

        @ManyToOne(cascade = CascadeType.ALL)
        @JoinColumn(name="operationNumber")
        private Operations operations;

    }
}
