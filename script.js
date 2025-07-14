let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let cron;
let h2 = document.querySelector("h2");

function start() {
  stop(); // evita criar vários intervalos
  cron = setInterval(() => {
    milissegundos += 10;
    if (milissegundos === 1000) {
      milissegundos = 0;
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
      }
    }

    h2.innerHTML = formatarTempo(horas, minutos, segundos, milissegundos);
  }, 10);
}
function stop() {
  clearInterval(cron);
}
function reset() {
  clearInterval(cron);
  horas = 0;
  minutos = 0;
  segundos = 0;
  milissegundos = 0;
  h2.innerHTML = "00:00:00:00";
}

function formatarTempo(h, m, s, ms) {
  return (
    (h < 10 ? "0" + h : h) +
    ":" +
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms)
  );
}
