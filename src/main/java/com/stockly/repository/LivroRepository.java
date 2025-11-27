package com.stockly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stockly.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {}
