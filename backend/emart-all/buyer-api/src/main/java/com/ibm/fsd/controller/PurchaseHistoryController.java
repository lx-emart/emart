package com.ibm.fsd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ibm.fsd.entity.PurchaseHistory;
import com.ibm.fsd.service.PurchaseHistoryService;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class PurchaseHistoryController {
    
	@Autowired
	PurchaseHistoryService purchaseHistoryService;
	
	/**
	 * purchase history find all
	 */
	@RequestMapping(value = "/buyer/purchaseHistory", method = RequestMethod.GET)
	public ResponseEntity<List<PurchaseHistory>> findAll(
			@RequestParam(value = "productCode") String productCode,
            @RequestParam(value = "userId") Integer userId) {
		return ResponseEntity.ok(purchaseHistoryService.findAll(productCode, userId));
	}
	
	/**
	 * purchase history add
	 */
	@RequestMapping(value = "/buyer/purchaseHistoryAdd", method = RequestMethod.POST)
	public ResponseEntity<PurchaseHistory> purchaseHistoryAdd(@RequestBody PurchaseHistory purchaseHistory) {
		return ResponseEntity.ok(purchaseHistoryService.save(purchaseHistory));
	}
}
