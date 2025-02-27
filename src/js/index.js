/*
OBJETIVO 1 - QUANDO O USUÁRIO CLICAR NA SETA AVANÇAR, IR PARA A PRÓXIMA CARTA...

        Passo 1 - pegar o elemento HTML da seta avançar; 

        Passo 2 - dar um jeito de  identificar quando o usuário clicar na seta avançar;

        Passo 3 - mudar para a próxima carta da lista;

        Passo 4 - esconder a carta que estava selecionada. 

    
OBJETIVO 2 - QUANDO O USUÁRIO CLICAR NA SETA VOLTAR, IR PARA A CARTA ANTERIOR...

        Passo 1 - pegar o elemento HTML da seta voltar; 

        Passo 2 - dar um jeito de  identificar quando o usuário clicar na seta avançar;

        Passo 3 - mudar para a carta anterior da lista;

        Passo 4 - esconder a carta que estava selecionada.


*/

// Passo 1 - pegar o elemento HTML da seta avançar;

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartaoSelecionado(){
        cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
}

btnAvancar.addEventListener("click", function () {
        if(cartaoAtual === cartoes.length -1){
                return
        }

        cartaoAtual++;
        cartoes[cartaoAtual].classList.add("selecionado");

        esconderCartaoSelecionado();
               
});


btnVoltar.addEventListener("click", function () {
        if(cartaoAtual <= 0){
                return
        }
       
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");

        cartaoAtual--;
        
        mostrarCartaoSelecionado();            
});
