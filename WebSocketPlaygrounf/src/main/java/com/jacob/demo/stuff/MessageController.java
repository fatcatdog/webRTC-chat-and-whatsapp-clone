//package com.jacob.demo.stuff;
//
//import java.time.LocalDateTime;
//
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//@Controller
//public class MessageController {
//
//    @MessageMapping("/send")
//    @SendTo("/topic/messages")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Message send(Message message) {
//    
//        LocalDateTime timestamp = LocalDateTime.now();
//        System.out.println("Message being posted...");
//        return new Message(message.getFrom(), message.getMessage(), timestamp);
//    }
//}