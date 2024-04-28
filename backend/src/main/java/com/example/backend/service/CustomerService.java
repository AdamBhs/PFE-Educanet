package com.example.backend.service;

import com.example.backend.model.entity.Customers;
import com.example.backend.repository.CustomerArchiveRepo;
import com.example.backend.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private CustomerArchiveRepo customerArchiveRepo;

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

    public List<Customers> getCustomersByAgence(String agenceName) {
        return this.customerRepo.getCustomersByAgence(agenceName);
    }

    public List<Map<String, Integer>>  totalCustomersByAgence() {
        return this.customerRepo.countCustomersByAgenceName();
    }

    public List<Map<String, Object>> findOperationsByCustomerAndDateRange(Integer codeCustomer,Integer agenceNum, Date startDate, Date endDate) {
        return this.customerArchiveRepo.findCustomerArchive(codeCustomer, agenceNum, startDate, endDate);
    }
}
