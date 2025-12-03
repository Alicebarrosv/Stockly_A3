# Tecnologias utilizadas para fazer o Backend

- Java 21
- Spring Boot (para criação da API REST)
- Maven (gerenciamento de dependências e build)
- Spring Data JPA (persistência e integração com banco de dados)
- MySql para Banco de dados
  
# Como foi feito

- Criamos um projeto Spring Boot utilizando o Spring Initializr.
- Configuramos o Maven para gerenciar dependências e facilitar o build.
- Implementamos as entidades e repositórios usando Spring Data JPA.
- Desenvolvemos os endpoints REST para cada operação do CRUD:
- POST → Criar registro
- GET → Listar registros
- PUT → Atualizar registro
- DELETE → Remover registro

# Stockly API - Configuração Rápida do Banco

Este guia rápido permite criar e popular o banco de dados necessário para a API Stockly.

---

## Pré-requisitos

- **MySQL Server** instalado localmente ([Download](https://dev.mysql.com/downloads/mysql/))
- **Cliente MySQL** como Workbench ([Download](https://dev.mysql.com/downloads/workbench/))
- MySQL rodando na porta **3306**
- Credenciais conforme `application.yml`:

```yaml
username: root
password: Vfca250308!
database: estoque_db
```
---

# Testes
Os testes foram implementados com JUnit 5 e Mockito, garantindo qualidade e isolamento da lógica de negócio.

# Como os testes foram feitos

Mocks: Repositórios (LivroRepository, AutorRepository, CategoriaRepository) foram simulados para evitar dependência do banco.
Cenários testados:

Criação de livro com autor e categoria válidos.
Lançamento de exceção (EntityNotFoundException) quando o livro não é encontrado pelo ID.


Validações: Utilizamos assertNotNull, assertEquals e assertThrows para garantir o comportamento esperado.

