package br.com.keysufba.entity;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "RESERVA", schema = "SCHEMAA")
public class Booking {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Integer id;
	
	
	@OneToOne
	@JoinColumn(name="PROFESSOR_ID")
	private Teacher teacherId;
	
	
	@OneToOne
	@JoinColumn(name="SALA", nullable=false)
	private Room roomId;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="HORA_INICIO")
	private Calendar beginTime;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="HORA_FINAL")
	private Calendar endTime;
	
	
	@OneToOne
	@JoinColumn(name="TECNICO", foreignKey=@ForeignKey(name="ID"))
	private Technician technicianId;
	
	
	@OneToOne
	@JoinColumn(name="STATUS_RESERVA_ID", foreignKey=@ForeignKey(name="ID"))
	private BookingStatus bookingStatusId;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Teacher getTeacherId() {
		return teacherId;
	}


	public void setTeacherId(Teacher teacherId) {
		this.teacherId = teacherId;
	}


	public Room getRoomId() {
		return roomId;
	}


	public void setRoomId(Room roomId) {
		this.roomId = roomId;
	}


	public Calendar getBeginTime() {
		return beginTime;
	}


	public void setBeginTime(Calendar beginTime) {
		this.beginTime = beginTime;
	}


	public Calendar getEndTime() {
		return endTime;
	}


	public void setEndTime(Calendar endTime) {
		this.endTime = endTime;
	}


	public Technician getTechnicianId() {
		return technicianId;
	}


	public void setTechnicianId(Technician technicianId) {
		this.technicianId = technicianId;
	}


	public BookingStatus getBookingStatusId() {
		return bookingStatusId;
	}


	public void setBookingStatusId(BookingStatus bookingStatusId) {
		this.bookingStatusId = bookingStatusId;
	}
	
}
