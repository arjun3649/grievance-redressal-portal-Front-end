package com.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Grievance;
import com.springboot.repo.GrievanceRepo;
@CrossOrigin
@RestController
public class GrievanceController {
	@Autowired
	GrievanceRepo repo;

	@PostMapping("/addGrievance")
	public void addGrievance(@RequestBody Grievance g) {
		System.out.println("GrievanceController----addGrievance");
		repo.save(g);
	}

	@GetMapping("/findbyid/{grvId}")
	public Optional<Grievance> findById(@PathVariable long grvId) {
		Optional<Grievance> lstGrv = repo.findById(grvId);
		System.out.println("GrievanceController----grvId");
		return lstGrv;
	}

	@GetMapping("/findallgrievance")
	public List<Grievance> findAllGrievance() {
		System.out.println("GrievanceController----findallgrievance");
		List<Grievance> lstGrv = repo.findAll();
		return lstGrv;
	}
	@GetMapping("/findbydepartment/{department}")
	public List<Grievance> findByDepartment(@PathVariable String department) {
		List<Grievance> lstGrv = repo.findByDepartment(department);
		System.out.println("GrievanceController----findByDepartment");
		return lstGrv;
	}
}
