package com.jacob.demo.stuff;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

//@Configuration
//@EnableWebSocketMessageBroker
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry registry) {
//    	try {
//	    	registry.enableSimpleBroker("/topic");
//	        registry.setApplicationDestinationPrefixes("/app");
//    	} catch (Exception e) {
//    		System.out.println(e);
//    	}
//    }
//
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//    	try {
//    		 registry.addEndpoint("/websocket").setAllowedOrigins("*");
//    	     registry.addEndpoint("/sockjs").setAllowedOrigins("*").withSockJS();	
//    	} catch (Exception e) {
//    		System.out.println(e);
//    	}
//       
//    }
//}