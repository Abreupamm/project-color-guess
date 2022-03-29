const cores = document.getElementsByClassName('ball');
const resposta = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const color = document.getElementById('rgb-color')

function corCerta(event){
const divClick = event.target;
if(divClick.style.backgroundColor == color){
resposta.innerHTML = 'Acertou!'
} else {
  resposta.innerText = 'Errou! Tente novamente'
}

}

function gerarCor(){
  for (let i = 0; i < cores.length; i += 1) {
    const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    const p = cores[i];
    p.style.backgroundColor = cor;
    p.addEventListener('click', corCerta);
  }
  const divCerta = parseInt(Math.random() * 5)
  
  cores[divCerta].style.backgroundColor = color.innerHTML
  
}
gerarCor();

function gerarNovasCores(){
  gerarCor();
  resposta.innerText = 'Escolha uma cor'
  const cor = 'rgb (' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
  color.innerText = cor
}
reset.addEventListener('click', gerarNovasCores)


// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript