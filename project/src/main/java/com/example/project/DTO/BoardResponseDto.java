package com.example.project.DTO;


import com.example.project.entity.Board;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BoardResponseDto {
    private Long id;
    private String title;
    private String content;
    private Integer price;
    private String image;
    private String writerEmail;


    public BoardResponseDto(Board board) {
        this.id = board.getId();
        this.title = board.getTitle();
        this.content = board.getContent();
        this.price = board.getPrice();
        this.image = board.getImage();
        this.writerEmail = board.getWriter().getEmail();
    }

}

