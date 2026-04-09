let pontosA = 0;
let pontosB = 0;

function alterarPontos(time, valor) {
  if (time === 'A') {
    pontosA += valor;
    if (pontosA < 0) pontosA = 0;
    document.getElementById('pontosA').innerText = pontosA;
  } else {
    pontosB += valor;
    if (pontosB < 0) pontosB = 0;
    document.getElementById('pontosB').innerText = pontosB;
  }
}