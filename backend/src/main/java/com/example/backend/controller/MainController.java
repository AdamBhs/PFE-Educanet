package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class MainController {

    @GetMapping("/getCustomerCode/{code}")
    public Message getCode(@PathVariable("code") String code) {
        Message m = new Message();

        m.setMessage("I got " + code);
        return m;
    }
}
