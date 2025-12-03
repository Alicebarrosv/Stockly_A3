package com.stockly.controller;

import com.stockly.dto.LivroDTO;
import com.stockly.model.Livro;
import com.stockly.service.LivroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    private final LivroService livroService;

    public LivroController(LivroService livroService) {
        this.livroService = livroService;
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listarTodos() {
        return ResponseEntity.ok(livroService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> buscarPorId(@PathVariable Long id) {
        Livro livro = livroService.buscarPorId(id);
        return ResponseEntity.ok(livro);
    }


    @PostMapping
    public ResponseEntity<Livro> criar(@RequestBody LivroDTO dto) {
        Livro livro = livroService.criar(dto);
        return ResponseEntity.ok(livro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizar(@PathVariable Long id, @RequestBody LivroDTO dto) {
        Livro livro = livroService.atualizar(id, dto);
        return ResponseEntity.ok(livro);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        livroService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
