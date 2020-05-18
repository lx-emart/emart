package com.ibm.fsd.controller;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.ibm.fsd.UserApiApplication;
import com.ibm.fsd.form.LoginForm;
import com.ibm.fsd.service.JwtService;
import com.ibm.fsd.service.SecurityService;
import com.ibm.fsd.service.UserService;

//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import static org.hamcrest.Matchers.equalTo;

/**
 *  user test
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserApiApplication.class)
public class UserControllerTest {
	
	private MockMvc mvc;
	
	@Autowired
    private WebApplicationContext wac;
	
	@Autowired
	UserService userService;

	@Autowired
	JwtService jwtService;

	@Autowired
	SecurityService securityService;
	
	@Before 
	public void setUp() throws Exception { 
		mvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	
	@Test
    public void test_hello() throws Exception {
		 mvc.perform(MockMvcRequestBuilders.get("/api/hello")
			.accept(MediaType.APPLICATION_JSON))
		 	.andExpect(status().isOk())
		 	.andExpect(content().string(equalTo("hello world")));
	}

	@Test
    public void test_login() throws Exception {
		
		LoginForm form = new LoginForm();
		form.setUsername("123@ibm.com");
		form.setPassword("123456");
		ObjectMapper mapper = new ObjectMapper();
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(form);

		MvcResult mvcResult = mvc.perform(
				 MockMvcRequestBuilders.post("/api/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestJson))
                .andReturn();
		
		int status = mvcResult.getResponse().getStatus();

		// Result
		Assert.assertEquals("OK", 200, status);
	}
	
	@Test
    public void test_login_error() throws Exception {
		
		LoginForm form = new LoginForm();
		form.setUsername("123@ibm.com");
		form.setPassword("123");
		ObjectMapper mapper = new ObjectMapper();
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(form);

		MvcResult mvcResult = mvc.perform(
				 MockMvcRequestBuilders.post("/api/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestJson))
                .andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		
		// Result
		Assert.assertEquals("OK", 401, status);
	}
	
	@Test
    public void test_login_error1() throws Exception {
		
		LoginForm form = new LoginForm();
		form.setUsername("123@ibm");
		form.setPassword("123456");
		ObjectMapper mapper = new ObjectMapper();
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(form);

		MvcResult mvcResult = mvc.perform(
				 MockMvcRequestBuilders.post("/api/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestJson))
                .andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		
		// Result
		Assert.assertEquals("OK", 401, status);
	}
	
}