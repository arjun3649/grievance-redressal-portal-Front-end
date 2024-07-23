package com.springboot.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.RegistrationEntity;
import com.springboot.repo.RegistrationRepository;

import java.util.List;

@Service
public class RegistrationServices {

    @Autowired
    private RegistrationRepository registrationRepository;

    public RegistrationEntity saveRegistration(RegistrationEntity registrationEntity) {
        return registrationRepository.save(registrationEntity);
    }

    public List<RegistrationEntity> getAllRegistrations() {
        return registrationRepository.findAll();
    }

}
