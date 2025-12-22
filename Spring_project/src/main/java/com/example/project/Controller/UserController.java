package com.example.project.Controller;

import com.example.project.DTO.LoginRequest;
import com.example.project.DTO.LoginResponseDto;
import com.example.project.DTO.UserRegisterDto;
import com.example.project.Service.UserService;
import com.example.project.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
            @RequestBody UserRegisterDto request
    ) {
        userService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(
            @RequestBody LoginRequest request
    ) {
        LoginResponseDto response =
                userService.login(request.getEmail(), request.getPassword());

        return ResponseEntity.ok(response);
    }

    /// ///////////////////////////////////////////////////////////////////////////


    @GetMapping
    public List<LoginResponseDto> getUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/{user_email}")
    public ResponseEntity<String> deleteUser(@PathVariable String user_email) {
        userService.delete(user_email);
        return ResponseEntity.ok("ok");
    }







    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUserByEmail(
            @RequestParam String keyword
    ) {
        return ResponseEntity.ok(
                userService.searchByEmail(keyword)
        );
    }







    @GetMapping("/{userId}")
    public ResponseEntity<LoginResponseDto> getUserById(
            @PathVariable Long userId
    ) {
        User user = userService.findById(userId);
        return ResponseEntity.ok(new LoginResponseDto(user));
    }
}
