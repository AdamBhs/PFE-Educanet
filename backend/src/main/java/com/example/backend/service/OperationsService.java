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

    public List<Map<String, Object>> getOperationsByDate(Integer numAgence, Date startDate, Date endDate) {
        return this.customerArchiveRepo.getOperationsByDate(numAgence, startDate, endDate);
    }
    public List<Map<String, Object>> getOperations(Integer numAgence ) {
        return this.customerArchiveRepo.getOperations(numAgence);
    }

    public List<Map<String, Object>> getCaisseDataByDate(Integer numAgence, Date startDate, Date endDate) {
        return this.customerArchiveRepo.getCaisseDataByDate(numAgence, startDate, endDate);
    }

    public List<Map<String, Object>> getCaisseData(Integer numAgence) {
        return this.customerArchiveRepo.getCaisseData(numAgence);
    }

    public List<Map<String, Object>> getPricePerAgence() {

        return this.customerArchiveRepo.getPricePerAgence();
    }

    public float getTotalProfit() {
        if(this.customerArchiveRepo.getTotalProfit() == null)
            return 0;
        return this.customerArchiveRepo.getTotalProfit();
    }

    public int getTotalQuantityToday() {
        if(this.customerArchiveRepo.getTotalQuantityToday() == null)
            return 0;
        return this.customerArchiveRepo.getTotalQuantityToday();
    }

    public int getOperationsOfToDay() {
        if(this.operationsRepo.getTotalOperationsToDay() == null)
            return 0;
        return this.operationsRepo.getTotalOperationsToDay();
    }

    public List<Map<String, Object>> getTotalOperationsByAgence() {
        return this.customerArchiveRepo.getTotalOperationsByAgence();

    }

    public List<Map<String, Object>> getQuantityByAgence() {
        return this.customerArchiveRepo.getQuantityByAgence();
    }

    public List<Map<String, Object>> quantityPerCategory() {
        return this.customerArchiveRepo.quantityPerCategory();
    }
}
