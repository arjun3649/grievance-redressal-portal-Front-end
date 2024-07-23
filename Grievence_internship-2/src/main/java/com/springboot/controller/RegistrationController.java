package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.springboot.model.RegistrationEntity;
import com.springboot.service.RegistrationServices;

import java.util.List;

@RestController
@RequestMapping("/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationServices registrationServices;

    @PostMapping("/register")
    public RegistrationEntity registerUser(@RequestBody RegistrationEntity registrationEntity) {
        return registrationServices.saveRegistration(registrationEntity);
    }

    @GetMapping("/all")
    public List<RegistrationEntity> getAllRegistrations() {
        return registrationServices.getAllRegistrations();
    }
}


