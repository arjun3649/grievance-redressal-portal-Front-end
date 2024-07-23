package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.LoginEntity;
import com.springboot.repo.LoginRepository;

import java.util.Optional;

@Service
public class LoginServices {

    @Autowired
    private LoginRepository loginRepository;

    public LoginEntity saveUser(LoginEntity user) {
        return loginRepository.save(user);
    }

    public Optional<LoginEntity> findById(Long id) {
        return loginRepository.findById(id);
    }

    public Optional<LoginEntity> findByUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    public void deleteUser(Long id) {
        loginRepository.deleteById(id);
    }

    public boolean validateUser(String username, String password) {
        Optional<LoginEntity> user = loginRepository.findByUsername(username);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}
