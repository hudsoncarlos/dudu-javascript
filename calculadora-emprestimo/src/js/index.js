
document.addEventListener("DOMContentLoaded", function(){

    const bomDia = 'Bom dia',
        boaTarde = 'Boa tarde',
        boaNoite = 'Boa noite',
        boaMadrugada = 'Se está acordado até agora é que esta com demanda atrasada para entregar na segunda-feira, boa sorte!'

    let timer = new Timer(function(){
        console.log('Chamou a função!');        
    }, 3000);
    
    CaregarAreaJogoPPT();
})

function Timer(callback, delay){

}