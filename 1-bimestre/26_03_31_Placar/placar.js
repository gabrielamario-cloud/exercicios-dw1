
let a = 0;
let b = 0;

function mudar(time, valor){
  if(time === 'A'){
    a += valor;
    if(a < 0) a = 0;
    document.getElementById('A').innerText = a;
  } else {
    b += valor;
    if(b < 0) b = 0;
    document.getElementById('B').innerText = b;
  }
}

function resetPlacar(){
  a = 0;
  b = 0;
  document.getElementById('A').innerText = 0;
  document.getElementById('B').innerText = 0;
}

let tempo = 0;
let intervalo = null;

function iniciar(){
  if(!intervalo){
    intervalo = setInterval(()=>{
      tempo++;
      let m = Math.floor(tempo/60);
      let s = tempo%60;
      document.getElementById('tempo').innerText =
        String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    },1000);
  }
}

function pausar(){
  clearInterval(intervalo);
  intervalo = null;
}

function resetTempo(){
  pausar();
  tempo = 0;
  document.getElementById('tempo').innerText = "00:00";
}
