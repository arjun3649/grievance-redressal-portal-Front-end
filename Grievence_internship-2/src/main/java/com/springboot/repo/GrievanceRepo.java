package com.springboot.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.model.Grievance;

@Repository
public interface GrievanceRepo extends JpaRepository<Grievance, Long> {
	@Query("from Grievance g where g.department=:department")
	List<Grievance> findByDepartment(String department);
}
