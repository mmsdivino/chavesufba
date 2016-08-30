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
@Table(name="SALA_EQUIPAMENTO", schema = "SCHEMAA")
public class EquipmentRoom {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Integer id;
	
	
	@Column(name="QUANTIDADE")
	private Integer quantity;
	
	
	@ManyToOne
	@JoinColumn(name="EQUIPAMENTO_ID", foreignKey=@ForeignKey(name="ID"))
	private Equipment equipmentId;
	
	
	@ManyToOne
	@JoinColumn(name="SALA_ID", foreignKey=@ForeignKey(name="ID"))
	private Room roomId;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	public Equipment getEquipmentId() {
		return equipmentId;
	}


	public void setEquipmentId(Equipment equipmentId) {
		this.equipmentId = equipmentId;
	}


	public Room getRoomId() {
		return roomId;
	}


	public void setRoomId(Room roomId) {
		this.roomId = roomId;
	}

}
