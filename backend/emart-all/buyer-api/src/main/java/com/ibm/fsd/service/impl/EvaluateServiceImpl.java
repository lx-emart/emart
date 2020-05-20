package com.ibm.fsd.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fsd.entity.Evaluate;
import com.ibm.fsd.repository.EvaluateRepository;
import com.ibm.fsd.service.EvaluateService;

/**
 * 
 * Purchase History service
 *
 */
@Service
public class EvaluateServiceImpl implements EvaluateService {

	@Autowired
	EvaluateRepository evaluateRepository;

	@Override
	public Evaluate save(Evaluate evaluate) {
		return evaluateRepository.save(evaluate);
	}

	@Override
	public Evaluate findByOne(String productCode, int userId) {
		return evaluateRepository.findByProductCodeAndUserId(productCode, userId);
	}
}
