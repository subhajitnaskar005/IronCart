package org.jsp.controller;
import java.util.List;

import org.jsp.dto.Clothes;
import org.jsp.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gym_clothes")
@CrossOrigin(origins = "http://localhost:5173") 
public class ClothesController {
	@Autowired
	ClothesService clothesService;
	
	@GetMapping
	public List<Clothes> getAllClothesData(){
		return clothesService.getAllClothesData();
	}
	

    @GetMapping("/{id}")
    public Clothes getClothesById(@PathVariable Long id) { 
    		return clothesService.getClothesById(id);
    	}
    
    @PostMapping
    public Clothes addClothesData(@RequestBody Clothes clothes) {
    	return clothesService.addClothesData(clothes);
    }
    
    
    @DeleteMapping("/{id}") 
    public void removeClothesData(@PathVariable Long id) {
    	clothesService.removeClothesData(id);
    }
    
//    @PutMapping("/gym_clothes/{id}")
//    public Clothes updateClothesData(@PathVariable Long id, @RequestBody Clothes clothes) {
//    	return clothesService.updateClothesData(id, clothes);
//    }
}
