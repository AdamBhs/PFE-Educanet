package com.example.backend.service;

import com.example.backend.model.entity.Operations;
import com.example.backend.repository.CustomerArchiveRepo;
import com.example.backend.repository.OperationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Service
public class OperationsService {

    @Autowired
    private OperationsRepo operationsRepo;

    @Autowired
    private CustomerArchiveRepo customerArchiveRepo;

    public List<Map<String, Object>> getOperations(Integer numAgence, Date startDate, Date endDate) {
        return this.customerArchiveRepo.getOperations(numAgence, startDate, endDate);
    }

    public List<Map<String, Object>> getCaisseDataByDate(Integer numAgence, Date startDate, Date endDate) {
        return this.customerArchiveRepo.getCaisseDataByDate(numAgence, startDate, endDate);
    }

    public List<Map<String, Object>> getCaisseData(Integer numAgence) {
        return this.customerArchiveRepo.getCaisseData(numAgence);
    }

}
