package com.stockly.dto;

public record LivroDTO(
        Long id,
        String titulo,
        Long categoriaId,
        Long autorId,
        Double valor,
        Integer quantidade
) {}
