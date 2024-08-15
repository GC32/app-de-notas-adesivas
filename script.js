let notas = document.getElementsByClassName('notas')[0];
let criarCaixa = document.getElementsByClassName('criarCaixa')[0];
let input = document.getElementById("userInput");
let i = 0;

//console.log(input)


criarCaixa.addEventListener('keydown', content);

document.getElementById('criar').addEventListener('click', function() {
  criarCaixa.style.display = 'block';
});
  

function content(elemento) {

  console.log(elemento.keyCode)

  if(elemento.keyCode == '13') {
    divStyle(input.value)
    input.value = '';
    criarCaixa.style.display = 'none';

  }
}

function colors (){
  let randcolors = ["#c2ff3d", "#ff3de8","#3dc2ff","#04e022","#bc83e6","#eebb328"];

  if (i > randcolors.length -1) {
    i - 0;
  }
  return randcolors [i++];
}


function divStyle(texto){
  let div = document.createElement('div');
  div.className = 'nota';

  div.innerHTML = '<div class="detalhes"> '+' <h3>'+texto+'</h3>'+'</div>';
  //remover nota com duplo clique

  div.addEventListener('dblclick', function (){
    div.remove();
  })

  //preencher com cores aleatorias

  div.setAttribute('style', 'background: '+colors()+ '');

  notas.appendChild(div);

}
