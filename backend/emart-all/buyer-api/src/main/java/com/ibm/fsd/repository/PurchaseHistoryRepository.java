package com.ibm.fsd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fsd.entity.PurchaseHistory;


/**
 * Purchase History Repository
 */
@Repository
public interface PurchaseHistoryRepository extends JpaRepository<PurchaseHistory, String> {
	
	List<PurchaseHistory> findByProductCodeAndUserId(String productCode, int userId);
}
