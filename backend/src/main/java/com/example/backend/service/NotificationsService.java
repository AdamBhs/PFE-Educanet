package com.example.backend.service;

import com.example.backend.enumerations.Categorie;
import com.example.backend.model.entity.Agence;
import com.example.backend.model.entity.Article;
import com.example.backend.model.entity.Notifications;
import com.example.backend.repository.NotificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationsService {

    @Autowired
    private NotificationRepo notificationRepo;

    public List<Notifications> getNotifications(Integer numAgence) {
        return this.notificationRepo.getNotifications(numAgence);
    }

    public Notifications postNotification(String description, String title, Agence agence_numero) {
        Notifications notification = new Notifications();
        notification.setDescription(description);
        notification.setDate(Date.valueOf(LocalDate.now()));
        notification.setTitle(title);
        notification.setAgence(agence_numero);
        notificationRepo.save(notification);
        return notification;
    }

    public void deleteNotification(int idNotification) {
        Optional<Notifications> notification = notificationRepo.findById(idNotification);
        if (notification.isPresent()) {
            notificationRepo.deleteNotification(idNotification);
        } else {
            throw new IllegalArgumentException("notification with ID " + idNotification + " not found.");
        }
    }


}
