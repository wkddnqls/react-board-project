package com.example.project.DTO;

import com.example.project.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponseDto {
    private Long id;
    private String email;

    public LoginResponseDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
    }
}

