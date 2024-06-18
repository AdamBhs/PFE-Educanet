package com.example.backend.repository;

import com.example.backend.model.entity.Promotion;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface PromotionRepo extends JpaRepository<Promotion, Integer> {
    @Query(value="SELECT p.id_promotion AS id, " +
            "p.end_promotion_date AS endDate, " +
            "p.newprix, " +
            "p.start_promotion_date AS startDate, " +
            "p.agence_numero AS numAgence, " +
            "p.id_article AS idArticle, " +
            "ar.categorie AS category, " +
            "ar.article_name AS nameArticle " +
            "FROM promotion p " +
            "JOIN article ar ON p.id_article = ar.id_article " +
            "JOIN agence a ON a.numero = p.agence_numero " +
            "WHERE p.id_customer IS NULL " +
            "AND p.agence_numero = :numAgence",
            nativeQuery = true)
    List<Map<String, Object>> getPromotions(@Param("numAgence") int numAgence);


    @Query(value="SELECT p.id_customer AS id_customer, " +
            "p.id_promotion AS id, " +
            "p.end_promotion_date AS endDate, " +
            "p.newprix, " +
            "p.start_promotion_date AS startDate, " +
            "p.agence_numero AS numAgence, " +
            "p.id_article AS idArticle, " +
            "ar.categorie AS category, " +
            "ar.article_name AS nameArticle " +
            "FROM promotion p " +
            "JOIN article ar ON p.id_article = ar.id_article " +
            "JOIN agence a ON a.numero = p.agence_numero " +
            "WHERE p.id_customer IS NOT NULL " +
            "AND p.agence_numero = :numAgence",
            nativeQuery = true)
    List<Map<String, Object>> getCustomersPromotions(@Param("numAgence") int numAgence);


    @Modifying
    @Transactional
    @Query(value="DELETE FROM promotion WHERE id_promotion = :idPromotion", nativeQuery = true)
    void deletePromotion(@Param("idPromotion") int idPromotion);

    @Modifying
    @Transactional
    @Query(value="DELETE FROM promotion WHERE end_promotion_date = :localDate", nativeQuery = true)
    void deletePromotionAuto(@Param("localDate") LocalDate localDate);
}
