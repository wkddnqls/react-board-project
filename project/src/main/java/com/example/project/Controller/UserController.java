package com.example.project.Controller;

import com.example.project.DTO.LoginRequest;
import com.example.project.DTO.LoginResponse;
import com.example.project.DTO.UserRegisterRequest;
import com.example.project.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 🔹 이메일 중복확인
    @GetMapping("/check")
    public ResponseEntity<Boolean> checkEmail(@RequestParam String email) {
        boolean exists = userService.checkEmailDuplicate(email);
        return ResponseEntity.ok(exists);
    }

    // 🔹 회원가입
    @PostMapping
    public ResponseEntity<Void> register(
            @RequestBody UserRegisterRequest request
    ) {
        userService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {
        LoginResponse response =
                userService.login(request.getEmail(), request.getPassword());

        return ResponseEntity.ok(response);
    }
}
