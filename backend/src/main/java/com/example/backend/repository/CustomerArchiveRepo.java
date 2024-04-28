package com.example.backend.repository;


import com.example.backend.model.entity.CustomerArchive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;
import java.util.Map;

public interface CustomerArchiveRepo extends JpaRepository<CustomerArchive, Integer> {

    @Query(value = "SELECT o.date_operation, c.customer_name, o.pay_type, ROUND(SUM(ca.quantity * a.article_prix), 2) AS prix_total, c.pin_code, o.operation_number, o.payement_date, o.delivered_date FROM customer_archive ca JOIN article a ON ca.id_article = a.id_article JOIN customers c ON ca.customer_id = c.customer_code JOIN operations o ON ca.operation_number = o.operation_number WHERE c.customer_code = :customerCode AND c.agence_numero = :agenceNum AND o.date_operation BETWEEN :startDate AND :endDate GROUP BY ca.customer_id, ca.operation_number", nativeQuery = true)
    List<Map<String, Object>> findCustomerArchive(@Param("customerCode") int customerCode,
                                                                   @Param("agenceNum") int agenceNum,
                                                                   @Param("startDate") Date startDate,
                                                                   @Param("endDate") Date endDate);

    @Query(value="SELECT o.date_operation, c.customer_name, o.pay_type, SUM(ca.quantity) AS quantity, o.operation_number, o.payement_date, o.delivered_date FROM customer_archive ca JOIN article a ON ca.id_article = a.id_article JOIN customers c ON ca.customer_id = c.customer_code JOIN operations o ON ca.operation_number = o.operation_number Where c.agence_numero =:agenceNum AND o.date_operation BETWEEN :startDate AND :endDate GROUP BY ca.customer_id, ca.operation_number", nativeQuery = true)
    List<Map<String, Object>> getOperations(@Param("agenceNum") int agenceNum,
                                            @Param("startDate") Date startDate,
                                            @Param("endDate") Date endDate);

    @Query(value="SELECT a.article_name as ArticleName, a.article_prix as Price, sum(ca.quantity) as TotalQuantity, ROUND(SUM(ca.quantity * a.article_prix), 2) as TotalAmount, ROUND(SUM(ca.quantity * a.article_prix) * 0.2, 2) as TVA, ROUND(SUM(ca.quantity * a.article_prix) / 1.20, 2) as HT, o.date_operation as Date, o.pay_type as PaymentType FROM customer_archive ca JOIN article a ON ca.id_article = a.id_article JOIN customers c ON ca.customer_id = c.customer_code JOIN operations o ON ca.operation_number = o.operation_number Where c.agence_numero =:agenceNum AND o.date_operation BETWEEN :startDate AND :endDate GROUP BY a.article_name, o.date_operation, o.pay_type", nativeQuery = true)
    List<Map<String, Object>> getCaisseDataByDate(@Param("agenceNum") int agenceNum,
                                            @Param("startDate") Date startDate,
                                            @Param("endDate") Date endDate);

    @Query(value="SELECT a.article_name as ArticleName, a.article_prix as Price, sum(ca.quantity) as TotalQuantity, ROUND(SUM(ca.quantity * a.article_prix), 2) as TotalAmount, ROUND(SUM(ca.quantity * a.article_prix) * 0.2, 2) as TVA, ROUND(SUM(ca.quantity * a.article_prix) / 1.20, 2) as HT, o.date_operation as Date, o.pay_type as PaymentType FROM customer_archive ca JOIN article a ON ca.id_article = a.id_article JOIN customers c ON ca.customer_id = c.customer_code JOIN operations o ON ca.operation_number = o.operation_number Where c.agence_numero =:agenceNum  GROUP BY a.article_name, o.date_operation, o.pay_type", nativeQuery = true)
    List<Map<String, Object>> getCaisseData(@Param("agenceNum") int agenceNum);
}
