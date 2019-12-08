package com.jacob.demo.websocket.invitation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class InvitationController {
	
	@Autowired 
	InvitationService invitationService;
	
	
	public ResponseEntity<?> sendInvitation(String from, String to) {
		
		try {
			
			int status = invitationService.sendInvitation(from, to);
			if(status == 1) {
				return new ResponseEntity<>(HttpStatus.OK);

			} else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			
		}catch(Exception e) {
			
			System.out.println(e);
			System.out.println("InvitationController sendInvitation failed");	
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		

	}
	
	public ResponseEntity<?> blockInvitation(Invitation invitation) {
		
	try {
			
			int status = invitationService.blockInvitation(invitation);
			if(status == 1) {
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			
		}catch(Exception e) {
			
			System.out.println(e);
			System.out.println("InvitationController blockInvitation failed");	
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		

	}
	
	public ResponseEntity<?> deleteInvitation(String name, Invitation invitation){
		
		try {
			
			int status = invitationService.deleteInvitation(name, invitation);
			if(status == 1) {
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			
		}catch(Exception e) {
			
			System.out.println(e);
			System.out.println("InvitationController deleteInvitation failed");	
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}
	
	public ResponseEntity<?> acceptInvitation(String name, Invitation invitation){
		

		try {
			
			int status = invitationService.acceptInvitation(name, invitation);
			if(status == 1) {
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			
		}catch(Exception e) {
			
			System.out.println(e);
			System.out.println("InvitationController acceptInvitation failed");	
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

}
