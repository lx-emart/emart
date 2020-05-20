package com.ibm.fsd.service;

import java.util.List;

import com.ibm.fsd.entity.PurchaseHistory;

/**
 * Purchase History Service
 */
public interface PurchaseHistoryService {

	List<PurchaseHistory> findAll(String productCode, int userId);
	PurchaseHistory save(PurchaseHistory purchaseHistory);
}
