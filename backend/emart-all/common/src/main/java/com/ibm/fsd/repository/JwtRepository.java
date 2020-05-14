package com.ibm.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fsd.entity.User;


@Repository
public interface JwtRepository extends JpaRepository<User, String> {
	
	/** get email */
	User findByEmail(String email);
}
