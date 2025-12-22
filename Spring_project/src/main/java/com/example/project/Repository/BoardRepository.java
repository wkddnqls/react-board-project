package com.example.project.Repository;

import com.example.project.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Board save(Board board);
    List<Board> findAll();
    Optional<Board> findById(Long id);

    void delete(Board board);

    Optional<Board> findByIdWithWriter(Long id);


}
