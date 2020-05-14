package com.ibm.fsd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.ibm.fsd.dto.UserDto;
import com.ibm.fsd.form.LoginForm;
import com.ibm.fsd.jwt.JwtResponse;
import com.ibm.fsd.service.JwtService;
import com.ibm.fsd.service.SecurityService;
import com.ibm.fsd.service.UserService;

/**
 * user controller
 */
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	JwtService jwtService;

	@Autowired
	SecurityService securityService;

	@RequestMapping("/hello")
	public String hello() {
		return "hello world";
	};

	/**
	 * login
	 * 
	 * @param form
	 * @return token
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<JwtResponse> login(@RequestBody LoginForm form) {

		// JWT Authentication
		UserDetails userDetails = null;
		try {
			userDetails = jwtService.authenticate(form.getEmail(), form.getPassword());
		} catch (AuthenticationException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		// set token
		final String token = jwtService.generateToken(userDetails);

		// get user info
		UserDto userDto = userService.login(form.getEmail(), form.getPassword());

		// result return
		return ResponseEntity.ok(
				new JwtResponse(token, 
						userDto.getId(), 
						userDto.getEmail(), 
						userDto.getUsername(), 
						userDto.getRoles()
				)
		);
	}
}
