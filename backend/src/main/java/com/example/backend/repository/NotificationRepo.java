package com.example.backend.repository;



import com.example.backend.model.entity.Notifications;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotificationRepo extends JpaRepository<Notifications, Integer> {

    @Query(value="Select * from notifications where agence_numero = :numAgence", nativeQuery = true)
    List<Notifications> getNotifications(@Param("numAgence") Integer numAgence);
    @Modifying
    @Transactional
    @Query(value="Delete from notifications where id_notification = :id", nativeQuery = true)
    void deleteNotification(@Param("id") Integer id);
}
