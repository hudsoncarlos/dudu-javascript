const AREA_JOGO = 'div-area-jogo-ppt';

let divAreaJogo,
        divBody,
        divJogador1,
        divJogador2

document.addEventListener("DOMContentLoaded", function(){
    CaregarAreaJogoPPT();
})

function CaregarAreaJogoPPT(){
    divBody = document.querySelector('body');
    divBody.style.backgroundColor = 'gray';

    divAreaJogo = document.getElementById(AREA_JOGO)
    divAreaJogo.style.backgroundColor = 'white';
    divAreaJogo.style.margin = '1% 1% 1% 1%';
    
    CaregarJogador1();
    CaregarJogador2();

    divAreaJogo.appendChild(divJogador1);
    divAreaJogo.appendChild(divJogador2);
}

function CaregarJogador1(){
    // JOGADOR 1
    divJogador1 = document.createElement('div');
    divJogador1.setAttribute('id', 'divJogador1');
    divJogador1.style.width = '40%';
    divJogador1.style.height = '200px';
    divJogador1.style.margin = '10% 0% 10% 10%';
    divJogador1.style.backgroundColor = 'purple'    
    divJogador1.style.display = 'inline-block';
}

function CaregarJogador2(){
    // JOGADOR 2
    divJogador2 = document.createElement('div');
    divJogador2.setAttribute('id', 'divJogador2');
    divJogador2.style.width = '40%';
    divJogador2.style.height = '200px';
    divJogador2.style.margin = '10% 10% 10% 0%';
    divJogador2.style.backgroundColor = 'green'
    divJogador2.style.display = 'inline-block';

    let butPedra = document.createElement('button');
    let butPapel = document.createElement('button');
    let butTesolra = document.createElement('button');

    butPedra.innerHTML = 'Pedra';
    divJogador2.appendChild(butPedra);

    // ✊🤚✌️
}