package com.jacob.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActiveUsersController {

	@Autowired
	private SessionRegistry sessionRegistry;
	
	@RequestMapping(value = "/loggedInUsers", method = RequestMethod.GET)
	public ResponseEntity<?> listLoggedInUsers() {
	    List<String> allPrincipals = new ArrayList<String>();
	    
	    List<Object> users = sessionRegistry.getAllPrincipals();
	    
	    for(Object user : users) {
            final UserDetails tempUser = (UserDetails) user;
            allPrincipals.add(tempUser.getUsername());
	    }
	
//	    for(final Object principal : allPrincipals) {
//	        if(principal instanceof UserDetails) {
//	            final UserDetails user = (UserDetails) principal;
//	
//	            // Do something with user
//	            System.out.println(user.getUsername());
//	        }
//	    }
//	    return allPrincipals;
		return new ResponseEntity<>(allPrincipals, HttpStatus.OK); 

	}
	
}
