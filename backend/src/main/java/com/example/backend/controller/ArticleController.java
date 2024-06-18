package com.example.backend.controller;

import com.example.backend.enumerations.Categorie;
import com.example.backend.model.entity.Article;
import com.example.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/getArticles")
    public List<Article> getArticles() {
        return articleService.getArticles();
    }

    @GetMapping("/getArticlesByCategorie")
    public List<Article> getArticlesByCategorie(@RequestParam("categorie") String categorie) {
        return this.articleService.getArticlesByCategorie(categorie);
    }

    @PostMapping("/addArticle")
    public void addArticle(@RequestParam("name") String articleName,
                             @RequestParam("prix") Float articlePrix,
                             @RequestParam("catg")Categorie categorie) {

        this.articleService.addArticle(articleName,articlePrix,categorie);
    }

    @DeleteMapping("/deleteArticle")
    public void deleteArticle(@RequestParam("id") int id) {
        this.articleService.deleteArticleById(id);
    }

    @PutMapping("/updateArticlePrix")
    public void updateArticlePrix(@RequestParam("name") String name, @RequestParam("newPrix") float newPrix) {
         this.articleService.updateArticle(name, newPrix);
    }
}
