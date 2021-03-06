package com.jacob.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jacob.demo.config.JwtTokenUtil;
import com.jacob.demo.model.DAOUser;
import com.jacob.demo.model.JwtRequest;
import com.jacob.demo.model.JwtResponse;
import com.jacob.demo.model.UserDTO;
import com.jacob.demo.service.JwtUserDetailsService;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
	
		if(user.getUsername() == null || user.getPassword() == null) {
			return ResponseEntity.ok("Null username or password provided");
		} else if(user.getUsername().equals("") || user.getPassword().equals("")) {
			return ResponseEntity.ok("Empty username or password provided");
		}
		
		boolean usernameAvailable = userDetailsService.checkIfUsernameTaken(user.getUsername());
		
		if(usernameAvailable) {
			return ResponseEntity.ok(userDetailsService.save(user));
		} else {
			return ResponseEntity.ok("Username already taken");
		}
	}

	private void authenticate(String username, String password) throws Exception {
		
		if(username == null || password == null) {
			System.out.println("Null username or password provided");
		}
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		} catch (Exception e) {
			System.out.println("JwtAuthenticationController authenticate exception :( " + e);
		}
		
	}
}