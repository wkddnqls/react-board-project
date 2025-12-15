package com.example.project.DTO;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardRequestDto {
    private String title;
    private String content;
    private Integer price;
    private String image;  // 선택적
    private String writerEmail;
}