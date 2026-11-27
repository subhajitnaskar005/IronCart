package org.jsp.service;

import org.jsp.dto.UserData;
import org.jsp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public UserData findUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public boolean addUserData(UserData userData) {
		if(userRepository.save(userData) != null) {
			return true;
		}else {
			return false;
		}
	}

	public UserData findUser(UserData userData) {
		return userRepository.findAllByEmailAndPassword(userData.getEmail(), userData.getPassword());
	}
}
