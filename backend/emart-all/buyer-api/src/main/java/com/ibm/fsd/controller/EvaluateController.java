package com.ibm.fsd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ibm.fsd.entity.Evaluate;
import com.ibm.fsd.service.EvaluateService;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class EvaluateController {
    
	@Autowired
	EvaluateService evaluateService;
	
	/**
	 * evaluate find one
	 */
	@RequestMapping(value = "/buyer/evaluate", method = RequestMethod.GET)
	public ResponseEntity<Evaluate> findByOne(
			@RequestParam(value = "productCode") String productCode,
            @RequestParam(value = "userId") Integer userId) {
		return ResponseEntity.ok(evaluateService.findByOne(productCode, userId));
	}
	
	/**
	 * evaluate add
	 */
	@RequestMapping(value = "/buyer/evaluateAdd", method = RequestMethod.POST)
	public ResponseEntity<Evaluate> evaluateAdd(@RequestBody Evaluate evaluate) {
		return ResponseEntity.ok(evaluateService.save(evaluate));
	}
}
