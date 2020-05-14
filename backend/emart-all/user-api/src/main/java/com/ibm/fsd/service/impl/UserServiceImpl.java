package com.ibm.fsd.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fsd.dto.UserDto;
import com.ibm.fsd.entity.User;
import com.ibm.fsd.repository.UserRepository;
import com.ibm.fsd.service.UserService;

/**
 * user Info
 */
@Service
class UserServiceImpl implements UserService {
	
	@Autowired
    UserRepository userRepository;

	/**
	 * get login user 
	 * 
	 * @param email
	 * @param password
	 * 
	 * @return user info
	 */
	@Override
	public UserDto login(String email, String password) {
		 
		UserDto dto = new UserDto();
		
		// get login info
		User user = userRepository.findByEmail(email);
		
		// result copy
		BeanUtils.copyProperties(user, dto);
		
		return dto;
	}

}
