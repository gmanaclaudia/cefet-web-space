// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let atual = 0;

let previous = document.getElementById('anterior').addEventListener('click', imagens);
let next = document.getElementById('proximo').addEventListener('click', imagens);


function imagens(){
  if (this == next){
    atual++;
    if(atual == todasAsImagens.length){
      atual = 0;
    }
  }
  else{
    atual--;
    if(atual < 0){
      atual = todasAsImagens.length-1;
    }
  }
    let fotos = document.getElementById('slide');
    fotos.src = servidorDasImagens.concat(todasAsImagens[atual]);
}
