package com.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.HODEntity;
import com.springboot.service.HODServices;

@RestController
@RequestMapping("/api/hods")
public class HODController {

    @Autowired
    private HODServices hodServices;

    @GetMapping
    public List<HODEntity> getAllHODs() {
        return hodServices.getAllHODs();
    }

    @GetMapping("/{id}")
    public HODEntity getHODById(@PathVariable Long id) {
        return hodServices.getHODById(id);
    }

    @PostMapping
    public HODEntity createHOD(@RequestBody HODEntity hod) {
        return hodServices.saveHOD(hod);
    }

    @DeleteMapping("/{id}")
    public void deleteHOD(@PathVariable Long id) {
        hodServices.deleteHOD(id);
    }
}
