const cores = document.getElementsByClassName('ball');

for (let i = 0; i < cores.length; i += 1) {
  const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  const p = cores[i];
  p.style.backgroundColor = cor;
}
// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript