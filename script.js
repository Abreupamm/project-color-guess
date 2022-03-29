const cores = document.getElementsByClassName('ball');
const resposta = document.getElementById('answer');

function corCerta(event){
const divClick = event.target;
if(divClick.style.backgroundColor == 'rgb (168, 34, 1'){
resposta.innerHTML = 'Acertou!'
} else {
  resposta.innerText = 'Errou! Tente novamente'
}

}

for (let i = 0; i < cores.length; i += 1) {
  const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  const p = cores[i];
  p.style.backgroundColor = cor;
  p.addEventListener('click', corCerta);
}


// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript