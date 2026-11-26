package org.jsp.repository;

import org.jsp.dto.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserData, Long>{
	UserData findAllByEmailAndPassword(String email, String password);

}
