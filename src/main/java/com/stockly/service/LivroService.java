package com.stockly.service;

import com.stockly.dto.LivroDTO;
import com.stockly.model.Livro;
import com.stockly.model.Autor;
import com.stockly.model.Categoria;
import com.stockly.repository.LivroRepository;
import com.stockly.repository.AutorRepository;
import com.stockly.repository.CategoriaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository livroRepository;
    private final AutorRepository autorRepository;
    private final CategoriaRepository categoriaRepository;

    public LivroService(LivroRepository livroRepository, AutorRepository autorRepository, CategoriaRepository categoriaRepository) {
        this.livroRepository = livroRepository;
        this.autorRepository = autorRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Livro buscarPorId(Long id) {
        return livroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Livro não encontrado com id " + id));
    }

    @Transactional
    public Livro criar(LivroDTO dto) {
        Livro livro = new Livro();
        mapDtoParaLivro(dto, livro);
        return livroRepository.save(livro);
    }

    @Transactional
    public Livro atualizar(Long id, LivroDTO dto) {
        Livro livro = livroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Livro não encontrado com id " + id));

        mapDtoParaLivro(dto, livro);
        return livroRepository.save(livro);
    }

    @Transactional
    public void deletar(Long id) {
        Livro livro = livroRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Livro não encontrado com id " + id));
        livroRepository.delete(livro);
    }

    // Método auxiliar para mapear DTO para entidade
    private void mapDtoParaLivro(LivroDTO dto, Livro livro) {
        livro.setTitulo(dto.titulo());
        livro.setValor(dto.valor());
        livro.setQuantidade(dto.quantidade());

        Autor autor = autorRepository.findById(dto.autorId())
                .orElseThrow(() -> new EntityNotFoundException("Autor não encontrado com id " + dto.autorId()));
        Categoria categoria = categoriaRepository.findById(dto.categoriaId())
                .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada com id " + dto.categoriaId()));

        livro.setAutor(autor);
        livro.setCategoria(categoria);
    }
}
