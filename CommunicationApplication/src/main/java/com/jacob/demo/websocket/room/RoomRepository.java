package com.jacob.demo.websocket.room;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Long> {
	Room findByUrlId(long urlId);
	
}

