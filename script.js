const cores = document.getElementsByClassName('ball');
const resposta = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const color = document.getElementById('rgb-color');
let rgb = color.innerText;
const placar = document.getElementById('score');

function pontos() {
  placar.innerText = parseInt(placar.innerText) + 3;
}

function resultado(event) {
  const divClick = event.target;
  if (divClick.style.backgroundColor === rgb) {
    resposta.innerHTML = 'Acertou!';
    pontos();
  } else {
    resposta.innerText = 'Errou! Tente novamente';
  }
}

function gerarCor() {
  for (let i = 0; i < cores.length; i += 1) {
    const cor = 'rgb(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
    const p = cores[i];
    p.style.backgroundColor = cor;
    p.addEventListener('click', resultado);
  }
}
gerarCor();

function corCerta() {
  const i = parseInt(Math.random() * 6);
  const div2 = cores[i];
  cores[i].style.backgroundColor = rgb;
}
corCerta();

function gerarNovasCores() {
  gerarCor();
  resposta.innerText = 'Escolha uma cor';
  const cor = 'rgb(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
  color.innerText = cor;
  rgb = cor;
  corCerta();
}
reset.addEventListener('click', gerarNovasCores);

// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
