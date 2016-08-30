package br.com.keysufba.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="SALA", schema = "SCHEMAA")
public class Room {

	
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name="ID")
  private Integer id;

  
  @Column(name = "NUMERO", nullable=false)
  private String number;

  
  @Column(name = "CAPACIDADE")
  private Integer capacity;

  
  @OneToOne
  @JoinColumn(name = "PAVILHAO_ID", foreignKey=@ForeignKey(name="ID"))
  private Pavilion pavilionId;

  
  @OneToOne
  @JoinColumn(name = "TIPO_SALA_ID")
  private RoomType roomTypeId;

  
  Room() { // jpa only

  }

  public Room(final Integer id, final String number, final Integer capacity, final Pavilion pavilionId, final RoomType roomType) {
    this.id = id;
    this.number = number;
    this.capacity = capacity;
    this.pavilionId = pavilionId;
    this.roomTypeId = roomType;
  }

  public Integer getId() {
    return id;
  }

  public String getNumber() {
    return number;
  }

  public Integer getCapacity() {
    return capacity;
  }

  public Pavilion getPavilionId() {
    return pavilionId;
  }

  public RoomType getRoomType() {
    return roomTypeId;
  }
}
