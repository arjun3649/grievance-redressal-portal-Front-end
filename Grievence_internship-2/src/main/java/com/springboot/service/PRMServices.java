package com.springboot.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.PRMEntity;
import com.springboot.repo.PRMRepository;

@Service
public class PRMServices {

    @Autowired
    private PRMRepository prmRepository;

    public List<PRMEntity> getAllPRMs() {
        return prmRepository.findAll();
    }

    public PRMEntity getPRMById(Long id) {
        return prmRepository.findById(id).orElse(null);
    }

    public PRMEntity savePRM(PRMEntity prm) {
        return prmRepository.save(prm);
    }

    public void deletePRM(Long id) {
        prmRepository.deleteById(id);
    }
}
