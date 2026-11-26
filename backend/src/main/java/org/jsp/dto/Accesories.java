package org.jsp.dto;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "Accesories")
public class Accesories {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String category;
	private String type;
	private Long price;
	 @Lob
	 @Column(name = "image_data", columnDefinition = "LONGBLOB")
	 private byte[] imageData;

	public byte[] getImageData() {
		return imageData;
	}
	 public void setImageData(byte[] imageData) {
		 this.imageData = imageData;
	 }
	 public List<OrderDetails> getOrderDetails() {
		 return orderDetails;
	 }
	 public void setOrderDetails(List<OrderDetails> orderDetails) {
		 this.orderDetails = orderDetails;
	 }
	@OneToMany(mappedBy = "accesories", cascade = CascadeType.ALL)
	private List<OrderDetails> orderDetails;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	
	
}
