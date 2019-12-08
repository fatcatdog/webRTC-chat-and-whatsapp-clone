package com.jacob.demo.websocket.invitation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "invitation")
public class Invitation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String from;
	
	@Column
	private String to;
	
	@Column
	private boolean blocked;
	
	@Column
	private boolean status;

	public Invitation(long id, String from, String to, boolean blocked, boolean status) {
		super();
		this.id = id;
		this.from = from;
		this.to = to;
		this.blocked = blocked;
		this.status = status;
	}
	
	public Invitation(String from, String to) {
		super();
		this.from = from;
		this.to = to;
		this.blocked = false;
		this.status = false;
	}
	
	public Invitation() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public boolean isBlocked() {
		return blocked;
	}

	public void setBlocked(boolean blocked) {
		this.blocked = blocked;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

}
