package org.jsp.service;
import java.util.List;

import org.jsp.dto.Clothes;
import org.jsp.repository.ClothesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClothesService {
	@Autowired
	ClothesRepository clothesRepository;

	public List<Clothes> getAllClothesData() {
		return clothesRepository.findAll();
	}

	public Clothes getClothesById(Long id) {
		return clothesRepository.findById(id).orElse(null);
	}

	public Clothes addClothesData(Clothes clothes) {
		return clothesRepository.save(clothes);
	}

	public void removeClothesData(Long id) {
		clothesRepository.delete(getClothesById(id));
	}
}
