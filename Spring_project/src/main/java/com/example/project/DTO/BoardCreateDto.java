package com.example.project.DTO;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Setter
@Getter
@NoArgsConstructor
public class BoardCreateDto {

    private String title;
    private String content;
    private Integer price;
    private String writerEmail;

    private MultipartFile image;
}