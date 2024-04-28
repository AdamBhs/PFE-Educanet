package com.example.backend.service;

import com.example.backend.enumerations.Categorie;
import com.example.backend.model.entity.Article;
import com.example.backend.model.entity.Customers;
import com.example.backend.repository.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepo articleRepo;

    public Article getArticleByCategoryAndName(String categorie, String articleName) {
        return this.articleRepo.getArticleByCategoryAndName(articleName, categorie);
    }

    public List<Article> getArticlesByCategorie(String categorie) {
        List<Article> articles = this.articleRepo.getArticleByCategory(categorie);
        if (!articles.isEmpty())
            return articles;
        return null;
    }

    public List<Article> getArticles() {
        List<Article> articles = this.articleRepo.getArticles();
        if (!articles.isEmpty())
            return articles;
        return null;
    }

    public void addArticle(String articleName, Float articlePrix, Categorie categorie) {
        Article article = new Article();
        article.setArticleName(articleName);
        article.setArticlePrix(articlePrix);
        article.setCategorie(categorie);
        articleRepo.save(article);
    }

    public void deleteArticleByName(String name) {
        String article = articleRepo.getArticleByName(name);
        if (!article.isEmpty()) {
            articleRepo.deleteArticleByName(name);
        } else {
            throw new IllegalArgumentException("Article with Name " + name + " not found.");
        }
    }

    public void updateArticle(String name, float newPrix) {
        String article = articleRepo.getArticleByName(name);
        if(!article.isEmpty()) {
            articleRepo.updateArticleByName(name, newPrix);
        } else {
            throw new IllegalArgumentException("Article with name " + name + " not found.");
        }
    }
}
