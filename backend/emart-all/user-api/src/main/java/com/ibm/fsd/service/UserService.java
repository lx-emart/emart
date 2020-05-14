package com.ibm.fsd.service;

import com.ibm.fsd.dto.UserDto;

/**
 * user Info
 */
public interface UserService {
	
	/** login */
	UserDto login(String emali, String password);
}
