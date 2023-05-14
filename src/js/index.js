/*
      O que precisamos fazer? - quando clicar no botão troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro.

      - objetivo 1 - quando clicar no botão de troca de tema, adicionar classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem da lua
         - passo 1 - pegar o JS o elemento HTML correspondente ao botão de troca de tema
         - passo 2 -dar um jeito de pegar o JS o elemento HTML correspondente ao body
         - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
         - passo 4 - adicionar a classe modo-escuro no body
         - passo 5 - trocar a imagem do botão alterar tema para lua
         
    - objeitvo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classa modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
         - passo 6 - verificar se o body já tem o modo escuro
         - passo 7 - remover a classe do modo-escuro do body
         - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// - objetivo 1 - quando clicar no botão de troca de tema, adicionar classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem da lua 


const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão");

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

  body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")
    } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")
    }
});

