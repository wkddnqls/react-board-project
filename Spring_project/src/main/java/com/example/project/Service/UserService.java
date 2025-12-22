package com.example.project.Service;

import com.example.project.DTO.LoginResponseDto;
import com.example.project.DTO.UserRegisterDto;

import com.example.project.Repository.UserRepository;
import com.example.project.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    //회원가입
    public void register(UserRegisterDto request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalStateException("이미 존재하는 이메일");
        }

        User user = new User(request.getEmail(), request.getPassword());
        userRepository.save(user);
    }


    //이메일 중복확인용
    public boolean checkEmailDuplicate(String email) {
        return userRepository.existsByEmail(email);
    }

   //로그인해서 로컬스토지리에 user 키값으로 로그인하기
    public LoginResponseDto login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이메일"));

        if (!user.getPassword().equals(password)) {
            throw new IllegalArgumentException("비밀번호 불일치");
        }

        return new LoginResponseDto(user.getId(), user.getEmail());
    }

    /// //////////////==========요청시 로직 -==================///////////////////

   //모든 유저 조회
    public List<LoginResponseDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(LoginResponseDto::new)
                .collect(Collectors.toList());
    }


    //이메일 키워드로 유저 검색
    public List<User> searchByEmail(String keyword) {
        return userRepository.findByEmailContaining(keyword);
    }


    //유저삭제
    public void delete(String user_email) {
        User user = userRepository.findByEmail(user_email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userRepository.delete(user);
    }

    // 아이디 키워드로 유저 검색
    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당 유저가 존재하지 않습니다."));
    }
}

