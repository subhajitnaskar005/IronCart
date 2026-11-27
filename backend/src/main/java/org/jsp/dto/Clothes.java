package org.jsp.dto;
import java.util.List;
import jakarta.persistence.*;
@Entity
@Table(name = "Clothes")
public class Clothes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String category;
	private String type;
	private String gender;
	private String salePrice;
	private String actualPrice;
	 @Lob
	 @Column(name = "image_data", columnDefinition = "LONGBLOB")
	 private byte[] imageData;
	@OneToMany(mappedBy = "clothes", cascade = CascadeType.ALL )
	private List<OrderDetails> orderDetails;
	
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(String salePrice) {
		this.salePrice = salePrice;
	}
	public String getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(String actualPrice) {
		this.actualPrice = actualPrice;
	}
}
