Link do site: https://srloki11.github.io/Stockly/

---

#  Front-End 

##  Objetivo

O front-end é responsável por exibir e gerenciar o cadastro de **livros**, permitindo visualizar, registrar e acompanhar o estoque e o histórico de movimentações.

Toda a interface foi pensada para facilitar a interação do usuário com a aplicação de forma simples e rápida.

---

## Funcionalidades Principais
1. Página de Livros

Exibe lista de livros cadastrados, com informações como título, autor (se houver), quantidade disponível, status/estado.
Ações para editar e excluir livros.
Interface consistente com o protótipo — estilo, espaçamentos, tipografia, responsividade etc.

2. Página de Cadastro de Livro
   
Formulário para adicionar um livro novo: com campos como título, autor, quantidade, preço (se aplicável).
Validação de entrada de dados.
Envio via API.
Feedback de sucesso ou erro.

3. Página/Seção de Histórico de Movimentações

Exibe histórico de movimentações dos livros: adições, remoções, edições.
Organização por data e tipo de operação.
Interface conforme protótipo — fácil leitura, filtros claros (se previstos).

4. Navegação & Fluxo do Usuário

Estado inicial: lista de livros.
Possibilidade de navegar para cadastro, edição ou histórico.
Fluxo intuitivo conforme protótipo.

5. UI/UX & Estilização


Layout responsivo (desktop/mobile) conforme diretrizes visuais.
Componentes reaproveitáveis, consistência de estilos (cores, fontes, espaçamentos).
Feedback visual — carregamentos, erros, confirmações, transições suaves.

---

## Estrutura de Pastas (Recomendada)

```bash
/src
  /components
  /pages
  /services
  /hooks
  /contexts
  /routes
  /assets
  /styles
main.jsx
App.jsx
```

---

## 🔗 Comunicação com o Back-End

O front-end consome rotas específicas para **livros**:

Exemplo:

```js
const response = await api.get("/livros");
setLivros(response.data);
```

---

## Fluxo da Aplicação

1. Usuário acessa o sistema
2. Visualiza lista de livros
3. Adiciona ou edita livros
4. Verifica o histórico de movimentações
5. Todas as ações são enviadas para a API

---

## UI/UX

* Interface moderna
* Navegação simples
* Feedback em tempo real
* Componentes reutilizáveis
* Layout responsivo para desktop e mobile

---

## Licença

Projeto acadêmico. Livre para modificações e melhorias.

---



