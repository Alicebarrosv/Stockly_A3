package com.stockly.service;

import com.stockly.dto.LivroDTO;
import com.stockly.model.Autor;
import com.stockly.model.Categoria;
import com.stockly.model.Livro;
import com.stockly.repository.AutorRepository;
import com.stockly.repository.CategoriaRepository;
import com.stockly.repository.LivroRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class LivroServiceTest {

    private LivroRepository livroRepository;
    private AutorRepository autorRepository;
    private CategoriaRepository categoriaRepository;
    private LivroService livroService;

    @BeforeEach
    void setup() {
        livroRepository = mock(LivroRepository.class);
        autorRepository = mock(AutorRepository.class);
        categoriaRepository = mock(CategoriaRepository.class);
        livroService = new LivroService(livroRepository, autorRepository, categoriaRepository);
    }

    @Test
    void deveCriarLivroComAutorECategoria() {
        Autor autor = new Autor();
        autor.setId(1L);
        Categoria categoria = new Categoria();
        categoria.setId(2L);

        LivroDTO dto = new LivroDTO(null, "Título", 2L, 1L, 10.00, 5);

        when(autorRepository.findById(1L)).thenReturn(Optional.of(autor));
        when(categoriaRepository.findById(2L)).thenReturn(Optional.of(categoria));
        when(livroRepository.save(any(Livro.class))).thenAnswer(invocation -> {
            Livro l = invocation.getArgument(0);
            l.setId(100L);
            return l;
        });

        Livro salvo = livroService.criar(dto);

        assertNotNull(salvo.getId());
        assertEquals("oiTítulo", salvo.getTitulo());
        assertEquals(autor, salvo.getAutor());
        assertEquals(categoria, salvo.getCategoria());
    }

}
