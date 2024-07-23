package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.DepartmentEntity;
import com.springboot.repo.DepartmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public List<DepartmentEntity> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Optional<DepartmentEntity> getDepartmentById(Long id) {
        return departmentRepository.findById(id);
    }

    public DepartmentEntity saveDepartment(DepartmentEntity department) {
        return departmentRepository.save(department);
    }

    public void deleteDepartment(Long id) {
        departmentRepository.deleteById(id);
    }
}
