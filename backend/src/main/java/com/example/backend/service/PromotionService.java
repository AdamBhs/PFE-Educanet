package com.example.backend.service;

import com.example.backend.model.entity.Agence;
import com.example.backend.model.entity.Article;
import com.example.backend.model.entity.Customers;
import com.example.backend.model.entity.Promotion;
import com.example.backend.repository.PromotionRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public class PromotionService {

    @Autowired
    private PromotionRepo promotionRepo;

    public List<Promotion> getCustomersPromotions(Integer agenceNum) {
        return this.promotionRepo.getPromotionsCustomers(agenceNum);
    }

    public List<Map<String, Object>>  getPromotions(Integer agenceNum) {
        return this.promotionRepo.getPromotions(agenceNum);
    }

    public void addPromotion(Agence agenceNum, Date startDate, Date endDate, Article numArticle, Double newPrix) {

        Promotion promotion = new Promotion();

        promotion.setAgence(agenceNum);
        promotion.setStartPromotionDate(startDate);
        promotion.setEndPromotionDate(endDate);
        promotion.setArticle(numArticle);
        promotion.setNewPrix(newPrix);

        this.promotionRepo.save(promotion);
    }

    public void addPromotionForCustomer(Customers codeCustomer, Date startDate, Date endDate, Article numArticle, Double newPrix) {
        Promotion promotionCustomer = new Promotion();

        promotionCustomer.setCustomers(codeCustomer);
        promotionCustomer.setAgence(codeCustomer.getAgence());
        promotionCustomer.setStartPromotionDate(startDate);
        promotionCustomer.setEndPromotionDate(endDate);
        promotionCustomer.setArticle(numArticle);
        promotionCustomer.setNewPrix(newPrix);

        this.promotionRepo.save(promotionCustomer);
    }

    public void deletePromotion(int id) {
        this.promotionRepo.deletePromotion(id);
    }
    @Scheduled(cron = "0 0 0 * * *") // hathi function auto run every day at 12pm tfas5 il promotion ala wfi wa9tha
    public void deletePromotionAuto() {
        LocalDate localDate = LocalDate.now();
        this.promotionRepo.deletePromotionAuto(localDate);
    }

    public Promotion updateArticle(int id, double newPrix) {
        Optional<Promotion> promotionOptional = promotionRepo.findById(id);
        if(promotionOptional.isPresent()) {
            Promotion promotion = promotionOptional.get();
            promotion.setNewPrix(newPrix);
            return promotionRepo.save(promotion);
        } else {
            throw new IllegalArgumentException("Article with ID " + id + " not found.");
        }
    }

}
