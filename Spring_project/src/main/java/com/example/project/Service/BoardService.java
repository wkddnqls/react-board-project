package com.example.project.Service;

import com.example.project.DTO.BoardCreateDto;
import com.example.project.DTO.BoardSelectDto;
import com.example.project.Repository.BoardRepository;
import com.example.project.Repository.UserRepository;
import com.example.project.entity.Board;
import com.example.project.entity.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Transactional
@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
//board DB에 정보 넣기
public Board createBoard(BoardCreateDto requestDto) {


    User writer = userRepository.findByEmail(requestDto.getWriterEmail())
            .orElseThrow(() -> new IllegalArgumentException("User not found"));

    String imagePath = null;

    if (requestDto.getImage() != null && !requestDto.getImage().isEmpty()) {
        try {
            String uploadDir = "C:/Users/user1/Documents/카카오톡 받은 파일/";

            // 원본 파일명
            String originalName = requestDto.getImage().getOriginalFilename();

            // UUID 파일명
            String savedName = UUID.randomUUID() + "_" + originalName;

            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            // 실제 파일 저장
            requestDto.getImage().transferTo(
                    new File(uploadDir + savedName)
            );

            // DB에는 파일명만 저장
            imagePath = savedName;

        } catch (IOException e) {
            throw new RuntimeException("이미지 저장 실패", e);
        }
    }

    Board board = new Board(
            requestDto.getTitle(),
            requestDto.getContent(),
            requestDto.getPrice(),
            imagePath,
            writer
    );

    return boardRepository.save(board);
}

    // 모든 게시물 가져와서 출력
    public List<Board> getAllBoards() {
        return boardRepository.findAll(); // 전체 게시글 조회
    }

    // 게시글 삭제
    public void deleteBoard(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));
        boardRepository.delete(board);
    }

    public BoardSelectDto updateBoard(Long id, BoardCreateDto requestDto) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        board.setTitle(requestDto.getTitle());
        board.setContent(requestDto.getContent());
        board.setPrice(requestDto.getPrice());
        if (requestDto.getImage() != null && !requestDto.getImage().isEmpty()) {
            // 지금 단계: 파일명만 저장
            String imageName = requestDto.getImage().getOriginalFilename();
            board.setImage(imageName);
        }

        Board updated = boardRepository.save(board);
        return new BoardSelectDto(updated);
    }
/// //////////////////////////////////////////////////////////////////////////////////////////

    public BoardSelectDto getBoardById(Long id) {
        Board board = boardRepository.findByIdWithWriter(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));
        return new BoardSelectDto(board);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
}
