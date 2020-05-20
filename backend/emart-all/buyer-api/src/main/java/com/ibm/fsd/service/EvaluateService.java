package com.ibm.fsd.service;

import com.ibm.fsd.entity.Evaluate;

/**
 * Evaluate Service
 */
public interface EvaluateService {

	Evaluate findByOne(String productCode, int userId);
	Evaluate save(Evaluate purchaseHistory);
}
