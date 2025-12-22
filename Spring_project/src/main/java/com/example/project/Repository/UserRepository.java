package com.example.project.Repository;

import com.example.project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    void save(User user);
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    List<User> findAll();
    void delete(User user_email);
    List<User> findByEmailContaining(String keyword);
    Optional<User> findById(Long id);
}
