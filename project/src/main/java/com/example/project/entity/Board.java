package com.example.project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "board")
@Getter
@NoArgsConstructor
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    @Column(nullable = false)
    private int price;

    @Column
    private String image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User writer;

    public Board(String title, String content, int price, String image, User writer) {
        this.title = title;
        this.content = content;
        this.price = price;
        this.image = image;
        this.writer = writer;
    }

    public void update(String title, String content, int price, String image) {
        this.title = title;
        this.content = content;
        this.price = price;
        this.image = image;
    }

    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
    public void setPrice(Integer price) { this.price = price; }
    public void setImage(String image) { this.image = image; }
}