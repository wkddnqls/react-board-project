package com.example.project.Controller;


import com.example.project.DTO.BoardCreateDto;
import com.example.project.DTO.BoardSelectDto;
import com.example.project.Service.BoardService;
import com.example.project.entity.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createBoard(
            @ModelAttribute BoardCreateDto requestDto
    ) {
        Board board = boardService.createBoard(requestDto);
        return ResponseEntity.ok(board);
    }


    @GetMapping
    public List<BoardSelectDto> getBoards() {
        List<Board> boards = boardService.getAllBoards();
        return boards.stream()
                .map(BoardSelectDto::new)
                .toList();
    }



    // 게시글 삭제
    @DeleteMapping("/{id}")
    public void deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
    }

    @PutMapping("/{id}")
    public BoardSelectDto updateBoard(@PathVariable Long id, @RequestBody BoardCreateDto requestDto) {
        return boardService.updateBoard(id, requestDto);
    }

/// //////////////////////////////////////////////////////////////////////////////////////////////////

    // 단일 게시글 조회
    @GetMapping("/{id}")
    public BoardSelectDto getBoard(@PathVariable Long id) {
        return boardService.getBoardById(id);
    }
}



