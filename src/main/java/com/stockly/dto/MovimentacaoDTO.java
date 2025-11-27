package com.stockly.dto;

public record MovimentacaoDTO(
        Long id,
        Long livroId,
        String tipo,
        Integer quantidade,
        String data
) {}
