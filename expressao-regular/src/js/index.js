console.log('\n ------- Início dos testes ------- \n')

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('* Exemplo expressão regular para mudar a ordem dos dados, abaixo um exeplo: \n')
ExemploExpressaoRegularParaMudarFormatoDosDados();

function ExemploExpressaoRegularParaMudarFormatoDosDados(){
    // A expressão regular abaixo inverte a posição das palavras da mensagem.
    let expressaoRegular = /(\w+)\s(\w+)/;
    let mensagem = 'Hudson Carlos';    
    let novaMensagem = mensagem.replace(expressaoRegular, '$2, $1');
    console.log(' -> Antes: ' + mensagem);
    console.log(' -> Depois: ' + novaMensagem);
}

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('\n* Exemplo de split utilizando expressões regulares, abaixo um exeplo: \n')
ExemploQuebrarLinhasComDiferentesFins();

function ExemploQuebrarLinhasComDiferentesFins(){
    let texto = 'Um texto\nE mais um pouco\r\nE ainda mais\rEsse é o fim';
    let linhas = texto.split(/\r\n|\r|\n/);
    console.log(' -> Antes: ' + texto);
    console.log(' -> Depois; ' + linhas);
}

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('\n* Este exemplo mostra como utilizar a sticky flag em expressões regulares, abaixo um exeplo: \n')
ExemploUsandoExpressaoRegularComOStickyFlag();

function ExemploUsandoExpressaoRegularComOStickyFlag(){
    let texto = 'First line\nSecond line';
    let regex = /(\S+) line\n?/y;

    let resultado1 = regex.exec(texto);
    console.log(' -> Antes: ' + texto);
    console.log(' -> Depois: ' + resultado1);
    console.log(' -> Depois: ' + regex.lastIndex);
    
    let resultado2 = regex.exec(texto);
    console.log(' -> Depois: ' + resultado2[1]);
    console.log(' -> Depois: ' + regex.lastIndex);

    let resultado3 = regex.exec(texto);
    console.log(' -> Depois: ' + resultado3 === null);
}

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('\n* Expressão regular e Unicode caracteres, abaixo um exeplo: \n')
ExemploExpressaoRegularEUnicodeCaracteres();

function ExemploExpressaoRegularEUnicodeCaracteres(){
    let texto = 'Образец text на русском языке';
    let regex = /[\u0400-\u04FF]+/g;

    let resultado1 = regex.exec(texto);
    console.log(' -> Antes: ' + texto);
    console.log(' -> Depois: ' + resultado1[0]);
    console.log(' -> Depois: ' + regex.lastIndex);

    let resultado2 = regex.exec(texto);
    console.log(' -> Antes: ' + texto);
    console.log(' -> Depois: ' + resultado2[0]);
    console.log(' -> Depois: ' + regex.lastIndex);
}

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('* Extraindo o nome do subdomínio da URL, abaixo um exeplo: \n')
ExemploExtraindoNomeDoSubdomínioDaURL();

function ExemploExtraindoNomeDoSubdomínioDaURL(){
    let url = 'http://xxx.domain.com';
    console.log(' -> Antes: ' + url);
    console.log(' -> Depois: ' + /[^.]+/.exec(url)[0].substring(7));
}

console.log('\n-----------------------------------------------------------------------------------------------')
console.log('* Encontrar uma correspondência em uma string, abaixo um exeplo: \n')
ExemploEncontrarUmaCorresPondenciaEmUmaString();

function ExemploEncontrarUmaCorresPondenciaEmUmaString(){
    let myRe = /d(b+)d/g;
    let myArray = myRe.exec("cdbbdbsbz");
    
    console.log(' -> Antes: ' + myRe);
    console.log(' -> Depois: ' + myArray);

    //myArray = /d(b+)d/g.exec("cdbbdbsbz");

    // let myRe = new RegExp("d(b+)d", "g");
    // let myArray = myRe.exec("cdbbdbsbz");
}

