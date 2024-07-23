package com.springboot.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.EmployeeEntity;


public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
