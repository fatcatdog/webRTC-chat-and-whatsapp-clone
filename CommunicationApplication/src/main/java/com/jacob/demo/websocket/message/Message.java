package com.jacob.demo.websocket.message;

import java.time.LocalDateTime;

public class Message {
	private String from;
    private String message;
    private LocalDateTime timeStamp;

    public Message() {
        // required for Jackson
    }

	public Message(String from, String message, LocalDateTime timeStamp) {
		super();
		this.from = from;
		this.message = message;
		this.timeStamp = timeStamp;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}

    @Override
    public String toString() {
        return "Message{" +
                "from='" + from + '\'' +
                ", message='" + message + '\'' +
                ", timeStamp=" + timeStamp +
                '}';
    }

}
