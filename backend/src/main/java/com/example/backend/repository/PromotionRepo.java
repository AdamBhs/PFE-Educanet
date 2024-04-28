package com.example.backend.repository;


import com.example.backend.model.entity.Promotion;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface PromotionRepo extends JpaRepository<Promotion, Integer> {
    @Query(value="SELECT id_promotion, end_promotion_date, newprix, start_promotion_date, agence_numero, id_article FROM promotion p JOIN agence a ON p.agence_numero = a.numero WHERE p.agence_numero = :agenceNum", nativeQuery = true)
    List<Map<String, Object>> getPromotions(@Param("agenceNum") int agenceNum);

    @Query(value="SELECT * from promotion where agence_numero = :numAgence",nativeQuery = true)
    List<Promotion> getPromotionsCustomers(@Param("numAgence") int numAgence);
    @Modifying
    @Transactional
    @Query(value="DELETE FROM promotion WHERE id_promotion = :idPromotion", nativeQuery = true)
    void deletePromotion(@Param("idPromotion") int idPromotion);

    @Modifying
    @Transactional
    @Query(value="DELETE FROM promotion WHERE end_promotion_date = :localDate", nativeQuery = true)
    void deletePromotionAuto(@Param("localDate") LocalDate localDate);
}
