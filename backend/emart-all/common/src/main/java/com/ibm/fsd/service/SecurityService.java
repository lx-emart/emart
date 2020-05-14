package com.ibm.fsd.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ibm.fsd.repository.JwtRepository;

/**
 * SecurityService
 */
@Service
public class SecurityService implements UserDetailsService {
	
	@Autowired
    JwtRepository jwtRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		// get email
		com.ibm.fsd.entity.User user = jwtRepository.findByEmail(username);
		
		// null
		if(user == null){
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		
		// set username and password
		return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

}
