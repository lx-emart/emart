package com.ibm.fsd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ibm.fsd.entity.Cart;
import com.ibm.fsd.service.CartService;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class CartController {
    
	@Autowired
	CartService cartService;
	
	/**
	 * cart find all
	 */
	@RequestMapping(value = "/buyer/cart", method = RequestMethod.GET)
	public ResponseEntity<List<Cart>> findAll() {
		return ResponseEntity.ok(cartService.findAll());
	}
	
	/**
	 * cart add
	 */
	@RequestMapping(value = "/buyer/cartAdd", method = RequestMethod.POST)
	public ResponseEntity<Cart> cartAdd(@RequestBody Cart cart) {
		return ResponseEntity.ok(cartService.save(cart));
	}
	
	/**
	 * cart delete
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/buyer/cartDelete/{productCode}", method = RequestMethod.DELETE)
	public ResponseEntity cartDelete(@PathVariable("productCode") String productCode) {
		cartService.delete(productCode);
		return ResponseEntity.ok().build();
	}

}
