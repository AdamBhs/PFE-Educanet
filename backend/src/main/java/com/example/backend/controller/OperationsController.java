package com.example.backend.controller;

import com.example.backend.service.OperationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class OperationsController {

    @Autowired
    private OperationsService operationsService;

    @GetMapping("/getOperationsByDate")
    public List<Map<String, Object>> getOperationsByDate(@RequestParam("numAgence") Integer code,
                                                                 @RequestParam("startDate") Date startDate,
                                                                 @RequestParam("endDate") Date endDate) {

        return operationsService.getOperationsByDate(code, startDate, endDate);
    }

    @GetMapping("/getOperations")
    public List<Map<String, Object>> getOperations(@RequestParam("numAgence") Integer code) {

        return operationsService.getOperations(code);
    }

    @GetMapping("/getCaisseDataByDate")
    public List<Map<String, Object>> getCaisseDataByDate(@RequestParam("numAgence") Integer code,
                                                   @RequestParam("startDate") Date startDate,
                                                   @RequestParam("endDate") Date endDate) {
        return operationsService.getCaisseDataByDate(code, startDate, endDate);
    }

    @GetMapping("/getCaisseData")
    public List<Map<String, Object>> getCaisseData(@RequestParam("numAgence") Integer code) {
        return operationsService.getCaisseData(code);
    }

    @GetMapping("/getPricePerAgence")
    public List<Map<String, Object>> getPricePerAgence() {
        return operationsService.getPricePerAgence();
    }

    @GetMapping("/getTotalProfit")
    public float getTotalProfit() {
        return operationsService.getTotalProfit();
    }

    @GetMapping("/getOperationsOfToday")
    public int getOperationsOfToday() {
        return operationsService.getOperationsOfToDay();
    }

    @GetMapping("/getTotalQuantityToday")
    public int getTotalQuantityToday() {
        return operationsService.getTotalQuantityToday();
    }

    @GetMapping("/getTotalOperationsByAgence")
    public List<Map<String, Object>> getTotalOperationsByAgence() {
        return operationsService.getTotalOperationsByAgence();
    }

    @GetMapping("/getQuantityByAgence")
    public List<Map<String, Object>> getQuantityByAgence() {
        return operationsService.getQuantityByAgence();
    }

    @GetMapping("/getQuantityPerCategory")
    public List<Map<String, Object>> quantityPerCategory() {
        return operationsService.quantityPerCategory();
    }
}
