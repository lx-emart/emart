package com.ibm.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fsd.entity.Cart;


/**
 * cart Info
 */
@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
	
	Cart findByProductCode(String productCode);
}
