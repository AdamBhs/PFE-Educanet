package com.example.backend.controller;

import com.example.backend.model.entity.Customers;
import com.example.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCustomerCode/{code}")
    public Customers getCustomer(@PathVariable("code") Integer code) {
        return customerService.getCustomer(code);
    }

    @GetMapping("/getCustomers")
    public List<Customers> getCustomers() {
        return customerService.getCustomers();
    }

}
