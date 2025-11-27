CREATE DATABASE IF NOT EXISTS estoque_db;
USE estoque_db;

CREATE TABLE IF NOT EXISTS tb_autor (
    id BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tb_categoria (
    id BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tb_livro (
    id BIGINT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    valor FLOAT(53),
    quantidade INT,
    autor_id BIGINT,
    categoria_id BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (autor_id) REFERENCES tb_autor(id),
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS tb_movimentacao (
    id BIGINT NOT NULL AUTO_INCREMENT,
    data DATETIME(6) NOT NULL,
    quantidade INT NOT NULL,
    tipo ENUM('ENTRADA','SAIDA') NOT NULL,
    livro_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (livro_id) REFERENCES tb_livro(id)
) ENGINE=InnoDB;

INSERT INTO tb_autor (nome) VALUES
('J.K. Rowling'),
('George R.R. Martin'),
('J.R.R. Tolkien');

INSERT INTO tb_categoria (nome) VALUES
('Fantasia'),
('Ficção Científica'),
('Romance');

INSERT INTO tb_livro (titulo, valor, quantidade, autor_id, categoria_id) VALUES
('Harry Potter e a Pedra Filosofal', 39.90, 10, 1, 1),
('Game of Thrones', 59.90, 5, 2, 1),
('O Senhor dos Anéis', 79.90, 7, 3, 1);

INSERT INTO tb_movimentacao (data, quantidade, tipo, livro_id) VALUES
(NOW(), 5, 'ENTRADA', 1),
(NOW(), 2, 'SAIDA', 1),
(NOW(), 3, 'ENTRADA', 2),
(NOW(), 1, 'SAIDA', 2),
(NOW(), 4, 'ENTRADA', 3);
