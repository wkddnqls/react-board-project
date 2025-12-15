package com.example.project.Controller;


import com.example.project.DTO.BoardRequestDto;
import com.example.project.DTO.BoardResponseDto;
import com.example.project.Service.BoardService;
import com.example.project.entity.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping
    public ResponseEntity<?> createBoard(@RequestBody BoardRequestDto requestDto) {
        try {
            Board board = boardService.createBoard(requestDto);
            return ResponseEntity.ok(board);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public List<BoardResponseDto> getBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards.stream()
                .map(BoardResponseDto::new)
                .toList();
    }

    // 단일 게시글 조회
    @GetMapping("/{id}")
    public BoardResponseDto getBoard(@PathVariable Long id) {
        return boardService.getBoardById(id);
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    public void deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
    }

    @PutMapping("/{id}")
    public BoardResponseDto updateBoard(@PathVariable Long id, @RequestBody BoardRequestDto requestDto) {
        return boardService.updateBoard(id, requestDto);
    }
}

