package br.com.keysufba.entity;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="TECNICO", schema = "SCHEMAA")
@PrimaryKeyJoinColumn(name="ID")
public class Technician extends Person {
	
	
	@ManyToOne
	@JoinColumn(name="departamento_id", foreignKey=@ForeignKey(name="ID"))
	private Department departmentId;


	public Department getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Department departmentId) {
		this.departmentId = departmentId;
	}
	
}
