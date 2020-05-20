package com.ibm.fsd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "com.ibm.fsd" })
public class BuyerApiApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(BuyerApiApplication.class, args);
	}

}
