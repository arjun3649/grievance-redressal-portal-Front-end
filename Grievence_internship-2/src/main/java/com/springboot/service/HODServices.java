package com.springboot.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.HODEntity;
import com.springboot.repo.HODRepository;

@Service
public class HODServices {

    @Autowired
    private HODRepository hodRepository;

    public List<HODEntity> getAllHODs() {
        return hodRepository.findAll();
    }

    public HODEntity getHODById(Long id) {
        return hodRepository.findById(id).orElse(null);
    }

    public HODEntity saveHOD(HODEntity hod) {
        return hodRepository.save(hod);
    }

    public void deleteHOD(Long id) {
        hodRepository.deleteById(id);
    }
}
