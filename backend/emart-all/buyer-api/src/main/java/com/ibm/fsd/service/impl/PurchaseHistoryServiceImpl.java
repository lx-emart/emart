package com.ibm.fsd.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fsd.entity.PurchaseHistory;
import com.ibm.fsd.repository.PurchaseHistoryRepository;
import com.ibm.fsd.service.PurchaseHistoryService;

/**
 * 
 * Purchase History service
 *
 */
@Service
public class PurchaseHistoryServiceImpl implements PurchaseHistoryService {

	@Autowired
	PurchaseHistoryRepository purchaseHistoryRepository;

	@Override
	public PurchaseHistory save(PurchaseHistory purchaseHistory) {
		return purchaseHistoryRepository.save(purchaseHistory);
	}

	@Override
	public List<PurchaseHistory> findAll(String productCode, int userId) {
		return purchaseHistoryRepository.findByProductCodeAndUserId(productCode, userId);
	}
}
