package org.jsp.controller;

import org.jsp.dto.UserData;
import org.jsp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userData")
@CrossOrigin(origins = "http://localhost:5173") 
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping("/{id}")
	public UserData findUserById(@PathVariable Long id) {
		return userService.findUserById(id);
	}
	
	@PostMapping("/signin")
	public UserData findUser(@RequestBody UserData userData) {
		return userService.findUser(userData);
	}
	
	@PostMapping
	public String addUserData(@RequestBody UserData userData) {
		if(userService.addUserData(userData)) {
			return "User Data entered SucessFully";
		}else {
			return "Something Went wrong!";
		}
	}
}
