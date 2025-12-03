package com.stockly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stockly.model.Movimentacao;

public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Long> {}
