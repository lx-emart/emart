package com.ibm.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ibm.fsd.entity.Cart;


/**
 * cart Info
 */
@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
	
	Cart findByProductCode(String productCode);
	
	@Modifying
	@Query(value = "update cart set quantity = :#{#cart.quantity}, sub_total = :#{#cart.subTotal} where product_code=:#{#cart.productCode}", nativeQuery = true)
	int update(@Param("cart") Cart cart);
}
