package com.example.project.Repository;

import com.example.project.entity.Board;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Transactional
@Repository
@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepository {
    private final EntityManager em;

    @Override
    public Board save(Board board) {

            em.persist(board);   // 신규 저장
            return board;

    }

    @Override
    public List<Board> findAll() {
        // JPQL을 사용하여 Board 엔티티 전체 조회
        return em.createQuery("SELECT b FROM Board b JOIN FETCH b.writerid", Board.class)
                .getResultList();
    }

    @Override
    public Optional<Board> findById(Long id) {
        Board board = em.find(Board.class, id);
        return Optional.ofNullable(board);
    }

    @Override
    public Optional<Board> findByIdWithWriter(Long id) {
        return em.createQuery(
                        "select b from Board b join fetch b.writerid where b.id = :id",
                        Board.class
                )
                .setParameter("id", id)
                .getResultStream()
                .findFirst();
    }

    @Override
    public void delete(Board board) {
        em.remove(em.contains(board) ? board : em.merge(board));
    }


}
