package com.jacob.demo.websocket.room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {
	long min = 1L;
	long max = 1000000L;
	
	@Autowired 
	RoomRepository roomRepository;
	
	
	public Room getRoomByUrlId(long urlId) {
		return roomRepository.findByUrlId(urlId);
	}
	

	public long getRandomDoubleBetweenRange(){
	    double x = (Math.random()*((max-min)+1))+min;
	    return (long)x;
	}
	
	public int createRoom() {
		
		try {
			long publicUrl = getRandomDoubleBetweenRange();
			
			Room newRoom = new Room();
			newRoom.setUrlId(publicUrl);
			roomRepository.save(newRoom);
			return 1;
		} catch(Exception e) {
			System.out.println("RoomService createRoom error");
			return -1;
		}
		
	}
	
	
	public int deleteRoom(long urlId) {
		try {
			Room roomToDelete = roomRepository.findByUrlId(urlId);
			roomRepository.delete(roomToDelete);
		    System.out.println("Question deleteRoom: " + urlId);
		    return 1;
		} catch(Exception e) {
			System.out.println("RoomService deleteRoom: " + urlId);
			return -1;
		}
	}
	

}
