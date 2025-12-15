package com.example.project.Service;

import com.example.project.DTO.BoardRequestDto;
import com.example.project.DTO.BoardResponseDto;
import com.example.project.Repository.BoardRepository;
import com.example.project.Repository.UserRepository;
import com.example.project.entity.Board;
import com.example.project.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    public Board createBoard(BoardRequestDto requestDto) {
        User writer = userRepository.findByEmail(requestDto.getWriterEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Board board = new Board(
                requestDto.getTitle(),
                requestDto.getContent(),
                requestDto.getPrice(),
                requestDto.getImage(),
                writer
        );

        return boardRepository.save(board);
    }

    public List<Board> getAllBoards() {
        return boardRepository.findAll(); // 전체 게시글 조회
    }

    public BoardResponseDto getBoardById(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));
        return new BoardResponseDto(board);
    }

    // 게시글 삭제
    public void deleteBoard(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));
        boardRepository.delete(board);
    }

    public BoardResponseDto updateBoard(Long id, BoardRequestDto requestDto) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        board.setTitle(requestDto.getTitle());
        board.setContent(requestDto.getContent());
        board.setPrice(requestDto.getPrice());
        board.setImage(requestDto.getImage());

        Board updated = boardRepository.save(board);
        return new BoardResponseDto(updated);
    }
}
