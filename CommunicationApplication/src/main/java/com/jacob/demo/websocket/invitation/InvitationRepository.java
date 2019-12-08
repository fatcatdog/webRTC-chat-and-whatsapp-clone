package com.jacob.demo.websocket.invitation;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InvitationRepository extends CrudRepository<Invitation, Long> {
 
	  List<Invitation> findByFromAndTo(String from, String to);

}
