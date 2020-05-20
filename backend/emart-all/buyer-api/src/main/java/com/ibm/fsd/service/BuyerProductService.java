package com.ibm.fsd.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ibm.fsd.entity.ProductEntity;


public interface BuyerProductService {

	Page<ProductEntity> findAll(Pageable pageable);
	ProductEntity findByOne(String code);
}
