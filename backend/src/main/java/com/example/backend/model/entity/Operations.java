package com.example.backend.model.entity;

import com.example.backend.enumerations.PayementType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Table(name="Operations")
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Operations {
    @Id
    @Column(name="operationNumber")
    private int operationNum;
    @Column(name="dateOperation")
    private Date date;
    @Column(name="payementDate")
    private Date payementDate;
    @Column(name="deliveredDate")
    private Date deliveredDate;

    @Enumerated(EnumType.STRING)
    private PayementType payType;


}
