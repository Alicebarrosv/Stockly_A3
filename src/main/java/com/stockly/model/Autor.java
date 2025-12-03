package com.stockly.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tb_autor")
@Data
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;
}
