package com.example.backend.repository;

import com.example.backend.model.entity.Article;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleRepo extends JpaRepository<Article, Integer> {
    @Query(value ="Select * from Article;", nativeQuery = true)
    List<Article> getArticles();

    @Query(value="Select * from Article where article_name = :nameArticle and categorie = :categorie",nativeQuery = true)
    Article getArticleByCategoryAndName(@Param("nameArticle") String nameArticle, @Param("categorie") String categorie);

    @Query(value="Select * from Article where categorie = :categorie", nativeQuery = true)
    List<Article> getArticleByCategory(@Param("categorie") String categorie);

    @Query(value="Select article_name from Article where article_name = :nameArticle ", nativeQuery = true)
    String getArticleByName(@Param("nameArticle") String nameArticle);
    @Modifying
    @Transactional
    @Query(value="Delete From Article where id_article = :idArticle", nativeQuery = true)
    void deleteArticleById(@Param("idArticle") int idArticle);

    @Modifying
    @Transactional
    @Query(value="Update Article set article_prix = :newPrix where article_name = :nameArticle", nativeQuery = true)
    void updateArticleByName(@Param("nameArticle") String nameArticle, @Param("newPrix") float newPrix);
}
