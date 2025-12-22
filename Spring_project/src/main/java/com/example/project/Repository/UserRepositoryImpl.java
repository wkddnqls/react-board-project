package com.example.project.Repository;

import com.example.project.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Repository
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private EntityManager em;


    //회원가입
    @Override
    public void save(User user) {
        em.persist(user);
    }

    //유저 아이디 키워드로 검색
    @Override
    public Optional<User> findById(Long id) {
        User user = em.find(User.class, id);
        return Optional.ofNullable(user);
    }

    //이메일 중복확인 메서드
    @Override
    public boolean existsByEmail(String email) {
        Long count = em.createQuery(
                        "select count(u) from User u where u.email = :email",
                        Long.class
                )
                .setParameter("email", email)
                .getSingleResult();

        return count > 0;
    }


    //로그인시 유저 이메일이 있는지 검사 및 조회 메서드
    @Override
    public Optional<User> findByEmail(String email) {
        return em.createQuery(
                        "select u from User u where u.email = :email",
                        User.class
                )
                .setParameter("email", email)
                .getResultStream()
                .findFirst();
    }


    //모든 유저 조회
    @Override
    public List<User> findAll() {
        return em.createQuery(
                "select u from User u",
                User.class
        ).getResultList();
    }


    //유저 삭제
    @Override
    public void delete(User user_email) {
        em.remove(user_email);
    }


    //유저 이메일 키워드로 검색
    @Override
    public List<User> findByEmailContaining(String keyword) {
        return em.createQuery(
                        "select u from User u where u.email like :keyword",
                        User.class
                )
                .setParameter("keyword", "%" + keyword + "%")
                .getResultList();
    }



}
