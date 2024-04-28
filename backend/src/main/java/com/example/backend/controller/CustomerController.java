package com.example.backend.controller;

import com.example.backend.model.entity.Customers;
import com.example.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getCustomerCode")
    public Customers getCustomer(@RequestParam("code") Integer code) {
        return customerService.getCustomer(code);
    }

    @GetMapping("/getCustomers")
    public List<Customers> getCustomers() {
        return customerService.getCustomers();
    }

    @GetMapping("/totalCustomersByAgenceName")
    public List<Map<String, Integer>>  totalCustomersByAgenceName() {
        return customerService.totalCustomersByAgence();
    }

    @GetMapping("/getCustomersByAgence")
    public List<Customers> getCustomersByAgence(@RequestParam("name") String name) {
        return this.customerService.getCustomersByAgence(name);
    }

    @GetMapping("/getCustomerArchive")
    public List<Map<String, Object>> getCustomerArchive(
                                             @RequestParam("code") Integer code,
                                             @RequestParam("numAgence") Integer numAgence,
                                             @RequestParam("startDate")Date startDate,
                                             @RequestParam("endDate") Date endDate) {
        return this.customerService.findOperationsByCustomerAndDateRange(code, numAgence, startDate, endDate);
    }
}
