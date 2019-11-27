This is a project in progress.

I am hoping to build a SpringBoot, Spring Security, JWT, React (with hooks), webRtc, VOIP, whatsapp-chat-clone app


If you are looking for a simple web-sockets implementation of a chat server/client, please reference the SpringBoot server in WebSocketPlaygrounf, spelled incorrectly i know, and client in webSocketStatic


I relied heavily on Josh Wood's https://blog.joshmlwood.com/websockets-with-spring-boot/ tutorial to build this out. The only changes I made from Josh's project are enabling cross origin requests with .setAllowedOrigins("*") in lines 25-26 in WebSocketPlaygrounf/src/main/java/com/jacob/demo/stuff/WebSocketConfig.java and i removed the styling and jQuery from his client implementation replacing the necessary parts of it with plain old javascript.
