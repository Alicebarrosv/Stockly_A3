# Stockly
O software Stockly tem o objetivo de gerenciar o estoque de produtos de uma
empresa, controlando entradas, saídas, quantidade disponível, alertas de estoque
baixo e cadastros básicos (como produto, código, valor e quantidade).

O projeto terá o back-end desenvolvido em Java, garantindo robustez e escalabilidade, enquanto o front-end será implementado em React com JavaScript, proporcionando interatividade e uma melhor experiência para o usuário.

[Projeto no Jira](https://projeto-a3-gerenciamentode-estoque.atlassian.net/jira/software/projects/KAN/boards/1)

# Grupo
Alice Barros Viana

Cauã Luiz Araujo e Andrade

Eduardo Oliveira de Lana

Tulio Macedo

Victor Ferreira de Castro Alves

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
