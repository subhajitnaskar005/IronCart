package com.example.IronCart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "org.jsp")
@EntityScan(basePackages = "org.jsp.dto")
@EnableJpaRepositories(basePackages = "org.jsp.repository")
public class IronCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(IronCartApplication.class, args);
	}

}
