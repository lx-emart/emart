package com.ibm.fsd.service;

import java.util.List;

import com.ibm.fsd.entity.Cart;

/**
 * Cart Service
 */
public interface CartService {

	List<Cart> findAll();
	Cart save(Cart cart);
	void delete(String productCode);
}
