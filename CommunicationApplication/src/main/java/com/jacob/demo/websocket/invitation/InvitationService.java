package com.jacob.demo.websocket.invitation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvitationService {
	
	@Autowired 
	InvitationRepository invitationRepository;
	
	public void sendInvitationLogic(String from, String to, List<Invitation> possibleInvites) {
				
		try {
		
			if(possibleInvites.size() < 1) {
				Invitation invite = new Invitation(from, to);
				invitationRepository.save(invite);	
			} else {
				for(int i = 0; i < possibleInvites.size(); i++) {
					Invitation temp = possibleInvites.get(i);
					
					if(from.equals(temp.getFrom())) {
						if(temp.isBlocked()) {
							return;
						}
					}
				}
				
				Invitation invite = new Invitation(from, to);
				invitationRepository.save(invite);	
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("InvitationService sendInvitationLogic failed");
		}
	}
	
	public int sendInvitation(String from, String to) {
		try {
			List<Invitation> possibleInvitations = invitationRepository.findByFromAndTo(from, to); 
			sendInvitationLogic(from, to, possibleInvitations);
			return 1;
		} catch(Exception e) {
			System.out.println(e);
			System.out.println("InvitationService sendInvitation failed");
			return -1;
		}
	}
	
	public int blockInvitation(Invitation invitation) {
		try {
			invitation.setBlocked(true);
			invitationRepository.save(invitation);	
			return 1; 
		} catch(Exception e) {
			System.out.println(e);
			System.out.println("InvitationService blockInvitation failed");
			return -1;
		}
		
	}
	
	public int deleteInvitation(String name, Invitation invitation) {
		try {
			
			if(name.equals(invitation.getTo())) {
				invitationRepository.delete(invitation);	
			}
			return 1;
		} catch(Exception e) {
			System.out.println(e);
			System.out.println("InvitationService blockInvitation failed");
			return -1;
		}
	}
	
	public int acceptInvitation(String name, Invitation invitation) {
		try {
			
			if(name.equals(invitation.getTo())) {
				invitation.setStatus(true);
				invitationRepository.save(invitation);	
				triggerRoomCreation();
				return 1;

			} else {
				return -1;
			}
		} catch(Exception e) {
			System.out.println(e);
			System.out.println("InvitationService blockInvitation failed");
			return -1;
		}
	}
	
	public void triggerRoomCreation() {
		System.out.println("InvitationService triggerRoomCreation Functionality not built out");
	}

}
