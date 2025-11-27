package com.stockly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stockly.model.Autor;

public interface AutorRepository extends JpaRepository<Autor, Long> {}
