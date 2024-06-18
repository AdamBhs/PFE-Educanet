package com.example.backend.controller;

import com.example.backend.model.entity.Agence;
import com.example.backend.model.entity.Article;
import com.example.backend.model.entity.Customers;
import com.example.backend.model.entity.Promotion;
import com.example.backend.service.ArticleService;
import com.example.backend.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class PromotionController {
    @Autowired
    private PromotionService promotionService;
    @Autowired
    private ArticleService articleService;

    @GetMapping("/getPromotions")
    public List<Map<String, Object>> getPromotions(@RequestParam("numAgence") Integer agenceNum) {
        return this.promotionService.getPromotions(agenceNum);
    }

    @GetMapping("/getCustomersPromotions")
    public List<Map<String, Object>> getCustomersPromotions(@RequestParam("numAgence") Integer agenceNum) {
        return this.promotionService.getCustomersPromotions(agenceNum);
    }

    @PostMapping("/addPromotion")
    public void addPromotion(@RequestParam("numAgency") Agence agenceNum,
                             @RequestParam("startDate") Date startDate,
                             @RequestParam("endDate") Date endDate,
                             @RequestParam("category") String category,
                             @RequestParam("nameArticle") String nameArticle,
                             @RequestParam("newPrix") Double newPrix) {

        Article numArticle = this.articleService.getArticleByCategoryAndName(category, nameArticle);

        this.promotionService.addPromotion(agenceNum, startDate, endDate, numArticle, newPrix);
    }

    @PostMapping("/addPromotionCustomer")
    public void addPromotionForCustomer(@RequestParam("numCustomer") Customers codeCustomer,
                                        @RequestParam("startDate") Date startDate,
                                        @RequestParam("endDate") Date endDate,
                                        @RequestParam("category") String category,
                                        @RequestParam("nameArticle") String nameArticle,
                                        @RequestParam("newPrix") Double newPrix) {

        Article numArticle = this.articleService.getArticleByCategoryAndName(category, nameArticle);

        this.promotionService.addPromotionForCustomer(codeCustomer, startDate, endDate, numArticle, newPrix);
    }

    @PutMapping("/updatePromotion")
    public Promotion updatePromotion(@RequestParam("id") Integer id, @RequestParam("newPrix") Double newprix) {
        return this.promotionService.updateArticle(id, newprix);
    }
    @DeleteMapping("/deletePromotion")
    public void deletePromotion(@RequestParam("idPromotion") Integer id) {
        this.promotionService.deletePromotion(id);
    }
}
