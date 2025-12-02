# TDD

Criamos 2 testes para validar nosso software sendo eles a validação do criar de um livro e uma simulação de busca de um livro inexistente exibindo uma mensaguem de erro


# Teste: cadastro de produto

Este teste valida o comportamento do método criar() da classe LivroService.
Utilizando mocks do LivroRepository, AutorRepository e CategoriaRepository, ele garante que:

Um livro é criado corretamente quando autor e categoria existem.

O ID é gerado no momento do save.

O título, o autor e a categoria do livro retornado correspondem aos dados recebidos no LivroDTO.

Nenhuma chamada real ao banco é feita, já que todos os repositórios são simulados com Mockito.

O teste assegura que o fluxo de criação de livros funciona de forma isolada e previsível, validando apenas a lógica da camada de serviço.

# Teste: id erro 404

Este teste simula a situação em que um livro não existe no repositório e verifica se o serviço reage corretamente.
Quando a busca pelo ID retorna vazia, o teste garante que o método buscarPorId lança a exceção esperada (EntityNotFoundException), 
confirmando que o tratamento de erros está funcionando como previsto.

____________________________________________________________________________________________________________________________________________________________________________
Ambos os teste foram executados primeiramente de forma a gerar como invalido para em seguida ser ajudatado para ser valido. Como segue as imagens abaixo:

<img width="538" height="230" alt="image" src="https://github.com/user-attachments/assets/01dc66e8-9655-4411-818e-4954b6878a12" />
