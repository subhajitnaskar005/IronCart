package org.jsp.dto;

import jakarta.persistence.*;

@Entity
@Table(name = "Order_Details")
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long quantity;
	private Long totalPrice;
	@ManyToOne
	@JoinColumn(name = "od_uid")
	private UserData userData;
	@ManyToOne
	@JoinColumn(name = "od_cid")
	private Clothes clothes;
	@ManyToOne
	@JoinColumn(name = "od_aid")
	private Accesories accesories;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public UserData getUserData() {
		return userData;
	}
	public void setUserData(UserData userData) {
		this.userData = userData;
	}
	public Clothes getClothes() {
		return clothes;
	}
	public void setClothes(Clothes clothes) {
		this.clothes = clothes;
	}
	public Accesories getAccesories() {
		return accesories;
	}
	public void setAccesories(Accesories accesories) {
		this.accesories = accesories;
	}
	public Long getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Long totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
}
