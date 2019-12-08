package com.jacob.demo.websocket.message;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jacob.demo.websocket.message.Message;

@Controller
public class MessageController {

	@MessageMapping("/send")
	@SendTo("/topic/messages")
	@CrossOrigin(origins = "http://localhost:3000")
	public Message send(Message message) {
	    LocalDateTime timestamp = LocalDateTime.now();
	    System.out.println("Message being posted...");
	    return new Message(message.getFrom(), message.getMessage(), timestamp);
	}
    
	
	  @MessageMapping("/send")
	  @SendTo("/topic/{roomId}/messages")
	  @CrossOrigin(origins = "http://localhost:3000")
	  public Message send(@DestinationVariable String roomId, Message message) {
	      LocalDateTime timestamp = LocalDateTime.now();
	      System.out.println("Message being posted...");
	      return new Message(message.getFrom(), message.getMessage(), timestamp);
	  }
  
  
  

//    @MessageMapping("/chat/{roomId}/sendMessage")
//    public void sendMessage(@DestinationVariable String roomId, @Payload Message chatMessage) {
//        logger.info(roomId+" Chat messahe recieved is "+chatMessage.getContent());
//        messagingTemplate.convertAndSend(format("/chat-room/%s", roomId), chatMessage);
//    }
//
//    @MessageMapping("/chat/{roomId}/addUser")
//    public void addUser(@DestinationVariable String roomId, @Payload Message chatMessage,
//                        SimpMessageHeaderAccessor headerAccessor) {
//        String currentRoomId = (String) headerAccessor.getSessionAttributes().put("room_id", roomId);
//        if (currentRoomId != null) {
//            Message leaveMessage = new Message();
//            leaveMessage.setType(Message.MessageType.LEAVE);
//            leaveMessage.setSender(chatMessage.getSender());
//            messagingTemplate.convertAndSend(format("/chat-room/%s", currentRoomId), leaveMessage);
//        }
//        headerAccessor.getSessionAttributes().put("name", chatMessage.getSender());
//        messagingTemplate.convertAndSend(format("/chat-room/%s", roomId), chatMessage);
//    }
}
