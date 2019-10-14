package com.jacob.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@Autowired
	ActiveUsersController activeUsersController;

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String firstPage() {
		
		activeUsersController.listLoggedInUsers();
		
		return "Hello World";
	}

}