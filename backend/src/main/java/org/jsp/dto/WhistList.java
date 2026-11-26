package org.jsp.dto;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "whistlist")
public class WhistList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private UserData userData;
	@ManyToOne
	@JoinColumn(name = "cloth_id")
	private Clothes clothes;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	
	
}
