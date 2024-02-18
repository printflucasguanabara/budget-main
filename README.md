# Orçamentos

Este é um código que faz um orçamento para um projeto de web design. tem alguns campos para você preencher com as suas preferências, como a quantidade de páginas, se quer usar JavaScript, se precisa de um layout personalizado e qual o prazo de entrega.
Quando você muda alguma coisa nesses campos, o código calcula o preço do projeto de acordo com as suas escolhas. Ele também mostra na tela quantas semanas vai levar para entregar o projeto etc.


## Funcionamento:

- O código utiliza event listeners para detectar alterações nos campos #qtde, #js, #layout-sim, #layout-nao e #prazo.
- Quando ocorre uma mudança em qualquer um desses campos, a função atualizarPreco() é chamada para recalcular o preço com base nas novas seleções.
- Para o campo #prazo, a função também atualiza o texto de uma label para exibir o prazo selecionado em semanas.
- O preço é calculado com base na quantidade, necessidade de JavaScript, inclusão de layout e prazo de entrega selecionados pelo usuário.
- O preço final é exibido no campo #preco.
