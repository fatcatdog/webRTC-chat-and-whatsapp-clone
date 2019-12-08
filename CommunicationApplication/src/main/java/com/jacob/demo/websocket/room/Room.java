package com.jacob.demo.websocket.room;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "room")
public class Room {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private long urlId;

	public Room(long id, long urlId) {
		super();
		this.id = id;
		this.urlId = urlId;
	}
	
	public Room(long urlId) {
		super();
		this.urlId = urlId;
	}
	
	public Room() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUrlId() {
		return urlId;
	}

	public void setUrlId(long urlId) {
		this.urlId = urlId;
	}

}
