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
@Table(name = "LOCACAO", schema = "SCHEMAA")
public class Location {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Integer id;
	
	
	@OneToOne
	@JoinColumn(name="ALUNO_ID", nullable=false, foreignKey=@ForeignKey(name="ID"))
	private Student alunoId;
	
	
	@OneToOne
	@JoinColumn(name="ALUNO_ID", nullable=false, foreignKey=@ForeignKey(name="ID"))
	private Room roomId;
	
	
	@OneToOne
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="HORA_INICIO", nullable=false)
	private Calendar horaInicio;
	
	
	@OneToOne
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="HORA_FINAL", nullable=false)
	private Calendar horaFinal;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Student getAlunoId() {
		return alunoId;
	}


	public void setAlunoId(Student alunoId) {
		this.alunoId = alunoId;
	}


	public Room getRoomId() {
		return roomId;
	}


	public void setRoomId(Room roomId) {
		this.roomId = roomId;
	}


	public Calendar getHoraInicio() {
		return horaInicio;
	}


	public void setHoraInicio(Calendar horaInicio) {
		this.horaInicio = horaInicio;
	}


	public Calendar getHoraFinal() {
		return horaFinal;
	}


	public void setHoraFinal(Calendar horaFinal) {
		this.horaFinal = horaFinal;
	}
}
