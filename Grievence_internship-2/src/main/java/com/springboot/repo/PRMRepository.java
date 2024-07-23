package com.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.PRMEntity;

@Repository
public interface PRMRepository extends JpaRepository<PRMEntity, Long> {
}
