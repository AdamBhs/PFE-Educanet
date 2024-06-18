package com.example.backend.repository;


import com.example.backend.model.entity.CustomerArchive;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;
import java.util.Map;

public interface CustomerArchiveRepo extends JpaRepository<CustomerArchive, Integer> {

    @Query(value = "SELECT o.date_operation, " +
            "c.customer_name, " +
            "o.pay_type, " +
            "ROUND(SUM(ca.quantity * a.article_prix), 2) AS prix_total, " +
            "c.pin_code, " +
            "o.operation_number, " +
            "o.payement_date, " +
            "o.delivered_date " +
            "FROM customer_archive ca " +
            "JOIN article a ON ca.id_article = a.id_article " +
            "JOIN customers c ON ca.customer_id = c.customer_code " +
            "JOIN operations o ON ca.operation_number = o.operation_number " +
            "WHERE c.customer_code = :customerCode " +
            "AND c.agence_numero = :agenceNum " +
            "AND o.date_operation BETWEEN :startDate AND :endDate " +
            "GROUP BY ca.customer_id, ca.operation_number",
            nativeQuery = true)
    List<Map<String, Object>> findCustomerArchive(@Param("customerCode") int customerCode,
                                                  @Param("agenceNum") int agenceNum,
                                                  @Param("startDate") Date startDate,
                                                  @Param("endDate") Date endDate);


    @Query(value="SELECT o.date_operation AS date, " +
            "c.customer_name AS customer_name, " +
            "o.pay_type AS pay_type, " +
            "SUM(ca.quantity) AS quantity, " +
            "o.operation_number AS operation_number, " +
            "o.payement_date AS payement_date, " +
            "o.delivered_date AS delivered_date " +
            "FROM customer_archive ca " +
            "JOIN article a ON ca.id_article = a.id_article " +
            "JOIN customers c ON ca.customer_id = c.customer_code " +
            "JOIN operations o ON ca.operation_number = o.operation_number " +
            "WHERE c.agence_numero = :agenceNum " +
            "AND o.date_operation BETWEEN :startDate AND :endDate " +
            "GROUP BY ca.customer_id, ca.operation_number",
            nativeQuery = true)
    List<Map<String, Object>> getOperationsByDate(@Param("agenceNum") int agenceNum,
                                                  @Param("startDate") Date startDate,
                                                  @Param("endDate") Date endDate);

    @Query(value="SELECT o.date_operation AS date, " +
            "c.customer_name AS customer_name, " +
            "o.pay_type AS pay_type, " +
            "SUM(ca.quantity) AS quantity, " +
            "o.operation_number AS operation_number, " +
            "o.payement_date AS payement_date, " +
            "o.delivered_date AS delivered_date " +
            "FROM customer_archive ca " +
            "JOIN article a ON ca.id_article = a.id_article " +
            "JOIN customers c ON ca.customer_id = c.customer_code " +
            "JOIN operations o ON ca.operation_number = o.operation_number " +
            "WHERE c.agence_numero = :agenceNum " +
            "GROUP BY ca.customer_id, ca.operation_number",
            nativeQuery = true)
    List<Map<String, Object>> getOperations(@Param("agenceNum") int agenceNum);


    @Query(value="SELECT a.article_name AS ArticleName, " +
            "a.article_prix AS Price, " +
            "SUM(ca.quantity) AS TotalQuantity, " +
            "ROUND(SUM(ca.quantity * a.article_prix), 2) AS TotalAmount, " +
            "ROUND(SUM(ca.quantity * a.article_prix) * 0.2, 2) AS TVA, " +
            "ROUND(SUM(ca.quantity * a.article_prix) / 1.20, 2) AS HT, " +
            "o.date_operation AS Date, " +
            "o.pay_type AS PaymentType " +
            "FROM customer_archive ca " +
            "JOIN article a ON ca.id_article = a.id_article " +
            "JOIN customers c ON ca.customer_id = c.customer_code " +
            "JOIN operations o ON ca.operation_number = o.operation_number " +
            "WHERE c.agence_numero = :agenceNum " +
            "AND o.date_operation BETWEEN :startDate AND :endDate " +
            "GROUP BY a.article_name, o.date_operation, o.pay_type",
            nativeQuery = true)
    List<Map<String, Object>> getCaisseDataByDate(@Param("agenceNum") int agenceNum,
                                                  @Param("startDate") Date startDate,
                                                  @Param("endDate") Date endDate);


    @Query(value="SELECT a.article_name AS ArticleName, " +
            "a.article_prix AS Price, " +
            "SUM(ca.quantity) AS TotalQuantity, " +
            "ROUND(SUM(ca.quantity * a.article_prix), 2) AS TotalAmount, " +
            "ROUND(SUM(ca.quantity * a.article_prix) * 0.2, 2) AS TVA, " +
            "ROUND(SUM(ca.quantity * a.article_prix) / 1.20, 2) AS HT, " +
            "o.date_operation AS Date, " +
            "o.pay_type AS PaymentType " +
            "FROM customer_archive ca " +
            "JOIN article a ON ca.id_article = a.id_article " +
            "JOIN customers c ON ca.customer_id = c.customer_code " +
            "JOIN operations o ON ca.operation_number = o.operation_number " +
            "WHERE c.agence_numero = :agenceNum " +
            "GROUP BY a.article_name, o.date_operation, o.pay_type",
            nativeQuery = true)
    List<Map<String, Object>> getCaisseData(@Param("agenceNum") int agenceNum);


    @Query(
            value = "SELECT c.agence_numero, ROUND(SUM(ca.quantity * a.article_prix), 2) AS price_total " +
                    "FROM customer_archive ca " +
                    "JOIN article a ON ca.id_article = a.id_article " +
                    "JOIN customers c ON ca.customer_id = c.customer_code " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE MONTH(o.date_operation) = MONTH(CURRENT_DATE()) " +
                    "AND YEAR(o.date_operation) = YEAR(CURRENT_DATE()) " +
                    "GROUP BY c.agence_numero",
            nativeQuery = true
    )
    List<Map<String, Object>> getPricePerAgence();

    @Query(
            value = "SELECT ROUND(SUM(ca.quantity * a.article_prix), 2) AS price_total " +
                    "FROM customer_archive ca " +
                    "JOIN article a ON ca.id_article = a.id_article " +
                    "JOIN customers c ON ca.customer_id = c.customer_code " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE DATE(date_operation) = CURRENT_DATE ",
            nativeQuery = true
    )
    Float getTotalProfit();

    @Query(
            value = "SELECT c.agence_numero, " +
                    "SUM(quantity) AS quantity " +
                    "FROM customer_archive ca " +
                    "JOIN customers c ON ca.customer_id = c.customer_code " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE MONTH(o.date_operation) = MONTH(CURRENT_DATE()) " +
                    "AND YEAR(o.date_operation) = YEAR(CURRENT_DATE()) " +
                    "GROUP BY c.agence_numero",
            nativeQuery = true
    )
    List<Map<String, Object>> getQuantityByAgence();

    @Query(
            value = "SELECT SUM(quantity) AS quantity " +
                    "FROM customer_archive ca " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE DATE(date_operation) = CURRENT_DATE",
            nativeQuery = true
    )
    Integer getTotalQuantityToday();

    @Query(
            value = "SELECT c.agence_numero, COUNT(ca.operation_number) AS total_operations " +
                    "FROM customer_archive ca " +
                    "JOIN customers c ON ca.customer_id = c.customer_code " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE MONTH(o.date_operation) = MONTH(CURRENT_DATE) " +
                    "AND YEAR(o.date_operation) = YEAR(CURRENT_DATE) " +
                    "GROUP BY c.agence_numero",
            nativeQuery = true
    )
    List<Map<String, Object>> getTotalOperationsByAgence();

    @Query(
            value = "SELECT c.agence_numero as numero_agence, a.categorie as categorie, " +
                    "SUM(ca.quantity) AS total_quantity " +
                    "FROM customer_archive ca " +
                    "JOIN customers c ON ca.customer_id = c.customer_code " +
                    "JOIN article a ON ca.id_article = a.id_article " +
                    "JOIN operations o ON o.operation_number = ca.operation_number " +
                    "WHERE MONTH(o.date_operation) = MONTH(CURRENT_DATE) " +
                    "AND YEAR(o.date_operation) = YEAR(CURRENT_DATE) " +
                    "GROUP BY c.agence_numero, a.categorie",
            nativeQuery = true
    )
    List<Map<String, Object>> quantityPerCategory();


}
