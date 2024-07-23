package com.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.springboot.model.PRMEntity;
import com.springboot.service.PRMServices;

@RestController
@RequestMapping("/api/prms")
public class PRMController {

    @Autowired
    private PRMServices prmService;

    @GetMapping
    public List<PRMEntity> getAllPRMs() {
        return prmService.getAllPRMs();
    }

    @GetMapping("/{id}")
    public PRMEntity getPRMById(@PathVariable Long id) {
        return prmService.getPRMById(id);
    }

    @PostMapping
    public PRMEntity createPRM(@RequestBody PRMEntity prm) {
        return prmService.savePRM(prm);
    }

    @DeleteMapping("/{id}")
    public void deletePRM(@PathVariable Long id) {
        prmService.deletePRM(id);
    }
}
