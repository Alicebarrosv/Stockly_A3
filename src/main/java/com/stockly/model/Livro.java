package com.stockly.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tb_livro")
@Data
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "autor_id")
    private Autor autor;

    private Double valor;

    private Integer quantidade;
}
