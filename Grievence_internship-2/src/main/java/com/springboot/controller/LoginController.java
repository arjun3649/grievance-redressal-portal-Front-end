package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.dto.LoginRequest;
import com.springboot.model.LoginEntity;
import com.springboot.service.LoginServices;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class LoginController {

    @Autowired
    private LoginServices loginServices;

    @PostMapping
    public ResponseEntity<LoginEntity> createUser(@RequestBody LoginEntity user) {
        return ResponseEntity.ok(loginServices.saveUser(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoginEntity> getUserById(@PathVariable Long id) {
        Optional<LoginEntity> user = loginServices.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<LoginEntity> getUserByUsername(@PathVariable String username) {
        Optional<LoginEntity> user = loginServices.findByUsername(username);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        loginServices.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        boolean isValid = loginServices.validateUser(loginRequest.getUsername(), loginRequest.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}
