package com.example.backend.controller;

import com.example.backend.model.entity.Agence;
import com.example.backend.model.entity.Notifications;
import com.example.backend.service.NotificationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class NotificationsController {
    @Autowired
    private NotificationsService notificationsService;

    @GetMapping("/getNotifications")
    public List<Notifications> getNotifications(@RequestParam("numAgence") int numAgence) {
        return this.notificationsService.getNotifications(numAgence);
    }

    @PostMapping("/postNotification")
    public Notifications postNotification(@RequestParam("numAgence") Agence numAgence,
                                          @RequestParam("desc") String description,
                                          @RequestParam("title") String title) {
        return this.notificationsService.postNotification(description,title,numAgence);
    }

    @DeleteMapping("/deleteNotification")
    public void deleteNotification(@RequestParam("idNotification") Integer idNotification) {
         this.notificationsService.deleteNotification(idNotification);
    }
}
