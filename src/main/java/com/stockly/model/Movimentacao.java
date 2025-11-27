package com.stockly.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_movimentacao")
@Data
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoMovimentacao tipo;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(nullable = false)
    private LocalDateTime data = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "livro_id", nullable = false)
    private Livro livro;

    public enum TipoMovimentacao {
        ENTRADA,
        SAIDA
    }
}
