package com.example.backend.service;

import com.example.backend.model.entity.Customers;
import com.example.backend.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    public Customers getCustomer(Integer code) {
        Optional<Customers> customer = this.customerRepo.findById(code);
        if (customer.isPresent())
            return customer.get();
        return null;
    }

    public List<Customers> getCustomers() {
        List<Customers> customers = this.customerRepo.findAll();
        if (!customers.isEmpty())
            return customers;
        return null;
    }
}
