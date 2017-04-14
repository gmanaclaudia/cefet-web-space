// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

//selecionar todos os botões de expandir/retrair
//iterar no array: para cada botao atrelar um evento de click
          //selecionar o <p> correspondente
          //verifica se está expandindo ou retraindo
          //colocar ou tirar a classe expandido do <p>
          //alterar texto do botao para "+" ou "-"

let botoes = document.getElementsByClassName('botao-expandir-retrair');

for (let i=0; i<botoes.length; i++){
  botoes[i].addEventListener('click', function (e) {
    let paragrafoCorrespondente = e.target.parentNode;
    if (paragrafoCorrespondente.classList.contains('expandido')){
        paragrafoCorrespondente.classList.remove('expandido');
        e.target.innerHTML = '+';
    }
    else {
      paragrafoCorrespondente.classList.add('expandido');
      e.target.innerHTML = '-';
    }

  });
}
