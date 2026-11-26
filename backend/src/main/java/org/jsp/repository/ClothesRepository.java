package org.jsp.repository;


import org.jsp.dto.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothesRepository extends JpaRepository<Clothes, Long>{

}
