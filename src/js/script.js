let tempoRestante = 15 * 60; 

const contador = document.getElementById("contagem");

const intervalo = setInterval(() => {
  let minutos = Math.floor(tempoRestante / 60);
  let segundos = tempoRestante % 60;


  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  contador.textContent = `${minutos}:${segundos}`;

  tempoRestante--;

  if (tempoRestante < 0) {
    clearInterval(intervalo);
    contador.textContent = "Tempo esgotado!";
  }

}, 1000);