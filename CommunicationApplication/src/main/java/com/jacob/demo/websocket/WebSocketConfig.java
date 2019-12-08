package com.jacob.demo.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
    	try {
	    	registry.enableSimpleBroker("/topic");
	        registry.setApplicationDestinationPrefixes("/app");
    	} catch (Exception e) {
    		System.out.println(e);
    	}
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
    	try {
    		registry.addEndpoint("/websocket").setAllowedOrigins("http://localhost:3000");
//			sockjs would require some additional security filter work, might get to it in the future... 
//    	    registry.addEndpoint("/sockjs").setAllowedOrigins("http://localhost:3000").withSockJS();	
    	} catch (Exception e) {
    		System.out.println(e);
    	}
       
    }
}