function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🍎", "🍉", "🍇","🍊"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;
let vencedor = false;

function setup() {
  createCanvas(400, 400);
  textAlign(LEFT, CENTER);
}

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused) {
    background("rgb(5,192,18)");
  } else {
    background("rgb(4,184,2)");
  }

  fill(255);
  textSize(16);
  text("Clique na tela e pressione A, S, D ou F para jogar", 2, 30);
  text("(Maçã) - A", 20, 105);
  text("(Melancia) - S", 20, 180);
  text("(Uva) - D", 20, 255);
  text("(Laranja) - F", 20, 330);
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("rgb(248,241,241)");
  rect(350, 0, 10, 400);
  fill("rgb(20,20,20)");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  if (vencedor) return;

  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      textSize(24);
      fill(0);
      text(jogador[i] + " venceu!", 100, 370);
      noLoop(); // para o jogo
      vencedor = true;
    }
  }
}

function keyPressed() {
  // Converte a tecla para minúscula (evita problemas com Shift)
  let tecla = key.toLowerCase();

  for (let i = 0; i < quantidade; i++) {
    if (tecla === teclas[i]) {
      xJogador[i] += 10;
    }
  }
}