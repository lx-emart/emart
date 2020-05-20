package com.ibm.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fsd.entity.ProductEntity;


/**
 * user Info
 */
@Repository
public interface BuyerProductRepository extends JpaRepository<ProductEntity, Long> {
	
	/** findByCode */
	ProductEntity findByCode(String code);
	
}
