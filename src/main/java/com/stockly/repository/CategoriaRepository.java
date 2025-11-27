package com.stockly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stockly.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {}
