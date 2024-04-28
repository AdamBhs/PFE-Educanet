package com.example.backend.controller;

import com.example.backend.service.OperationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class OperationsController {

    @Autowired
    private OperationsService operationsService;

    @GetMapping("/getOperations")
    public List<Map<String, Object>> getOperations(@RequestParam("numAgence") Integer code,
                                                                 @RequestParam("startDate") Date startDate,
                                                                 @RequestParam("endDate") Date endDate) {

        return operationsService.getOperations(code, startDate, endDate);
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

}
