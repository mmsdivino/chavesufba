package br.com.keysufba.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="PROFESSOR", schema = "SCHEMAA")
@PrimaryKeyJoinColumn(name="ID")
public class Teacher extends Person {
	
	
	@Column(name="NUM_SIAP", nullable=false)
	private String siapNumber;
	
	
	@ManyToOne
	@JoinColumn(name="DEPARTAMENTO_ID", foreignKey=@ForeignKey(name="ID"))
	private Department departmentId;
	
	
	public String getSiapNumber() {
		return siapNumber;
	}
	public void setSiapNumber(String siapNumber) {
		this.siapNumber = siapNumber;
	}
	public Department getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Department departmentId) {
		this.departmentId = departmentId;
	}
	
}
