package br.com.keysufba.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="ALUNO", schema = "SCHEMAA")
@PrimaryKeyJoinColumn(name="ID")
public class Student extends Person {
	
	
	@Column(name="MATRICULA", nullable=false)
	private String registrationNum;
	
	
	@OneToOne
	@JoinColumn(name="CURSO_ID", nullable=false, foreignKey=@ForeignKey(name="ID"))
	private Course courseId;
	
	
	@ManyToOne
	@JoinColumn(name="DEPARTAMENTO_ID", foreignKey=@ForeignKey(name="ID"))
	private Department departmentId;
	
	
	
	public String getRegistrationNum() {
		return registrationNum;
	}
	public void setRegistrationNum(String registrationNum) {
		this.registrationNum = registrationNum;
	}
	public Course getCourseId() {
		return courseId;
	}
	public void setCourseId(Course courseId) {
		this.courseId = courseId;
	}
	
}
