package br.com.keysufba.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="PESSOA_USUARIO", schema = "SCHEMAA")
public class UserPerson {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Integer id;
	
	
	@ManyToOne
	@JoinColumn(name="TIPO_USUARIO_ID", nullable=false, foreignKey=@ForeignKey(name="ID"))
	private UserType userTypeId;
	
	
	@ManyToOne
	@JoinColumn(name="PESSOA_ID", nullable=false, foreignKey=@ForeignKey(name="ID"))
	private Person personId;

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserType getUserTypeId() {
		return userTypeId;
	}

	public void setUserTypeId(UserType userTypeId) {
		this.userTypeId = userTypeId;
	}

	public Person getPersonId() {
		return personId;
	}

	public void setPersonId(Person personId) {
		this.personId = personId;
	}
}
