var prompt = require("prompt-sync")();
console.clear();

let sim = 1;

console.log("Vamos participar de uma partida de Jokenpô!");

const nome = prompt("Insira seu nome para indentificarmos o Jogador: ");

while (sim == 1) {
  let empate = 0;
  let vitoriaJogador = 0;
  let vitoriaComputador = 0;

  let rodadas = parseInt(
    prompt("Digite o numero de rodadas que deseja jogar: ")
  );
  console.clear();

  while (isNaN(rodadas)) {
    console.log(`Você digitou errado ${nome}!`);
    rodadas = parseInt(prompt("Digite o numero de rodadas que deseja jogar: "));
    console.clear();
  }

  for (let c = 1; c <= rodadas; c++) {
    let escolhaJogador = prompt(
      `${nome} escolha entre PEDRA, PAPEL ou TESOURA. Para participar da ${c}ª rodada: `
    )
      .toUpperCase()
      .trim();
    console.clear();

    while (
      escolhaJogador != "PEDRA" &&
      escolhaJogador != "PAPEL" &&
      escolhaJogador != "TESOURA"
    ) {
      console.log(`${nome} você digitou uma opção incorreta!`);
      escolhaJogador = prompt(
        `Escolha entre PEDRA, PAPEL ou TESOURA. Para participar da ${c}ª rodada: `
      )
        .toUpperCase()
        .trim();
      console.clear();
    }

    const computador = ["PEDRA", "PAPEL", "TESOURA"];
    const aleatorio = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const escolhaPC = computador[aleatorio(0, computador.length - 1)];
    console.log(`Você escolheu: ${escolhaJogador}`);
    console.log(`O Computador escolheu: ${escolhaPC}`);

    let continuar = 0;

    if (escolhaJogador == "PEDRA" && escolhaPC == "PEDRA") {
      console.log(`A ${c}ª rodada foi um empate!`);
      empate++;

      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "PEDRA" && escolhaPC == "PAPEL") {
      console.log(`O vencedor da ${c}ª rodada foi o Computador!`);
      vitoriaComputador++;

      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "PEDRA" && escolhaPC == "TESOURA") {
      console.log(`O vencedor da ${c}ª rodada foi o Jogador ${nome}!`);
      vitoriaJogador++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "PAPEL" && escolhaPC == "PEDRA") {
      console.log(`O vencedor da ${c}ª rodada foi o Jogador ${nome}!`);
      vitoriaJogador++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "PAPEL" && escolhaPC == "PAPEL") {
      console.log(`A ${c}ª rodada foi um empate!`);
      empate++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "PAPEL" && escolhaPC == "TESOURA") {
      console.log(`O vencedor da ${c}ª rodada foi o Computador!`);
      vitoriaComputador++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "TESOURA" && escolhaPC == "PEDRA") {
      console.log(`O vencedor da ${c}ª rodada foi o Computador!`);
      vitoriaComputador++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "TESOURA" && escolhaPC == "PAPEL") {
      console.log(`O vencedor da ${c}ª rodada foi o Jogador ${nome}!`);
      vitoriaJogador++;
      continuar = prompt("Precione ENTER para continuar!");
    } else if (escolhaJogador == "TESOURA" && escolhaPC == "TESOURA") {
      console.log(`A ${c}ª rodada foi um empate!`);
      empate++;
      continuar = prompt("Precione ENTER para continuar!");
    }
    console.clear();
  }
  console.clear();

  const resultadosTabela = [
    ["Empate", nome, "Computador"],
    [empate, vitoriaJogador, vitoriaComputador],
  ];
  console.table(resultadosTabela);

  console.log(`O número de rodadas empatadas foi de ${empate}!`);
  console.log(
    `O número de rodadas vencidas pelo Jogador ${nome} é de ${vitoriaJogador}!`
  );
  console.log(
    `O número de rodadas vencidas pelo Computador é de ${vitoriaComputador}!`
  );

  if (vitoriaJogador > vitoriaComputador) {
    console.log(
      `O Jogador ${nome} foi o Grande vencedor do jogo! Ganhando ${vitoriaJogador} rodadas!`
    );
  } else if (vitoriaJogador < vitoriaComputador) {
    console.log(
      `O Computador foi o Grande vencedor do jogo! Ganhando ${vitoriaComputador} rodadas!`
    );
  } else {
    console.log("Não houve um Grande vencedor jogo. Foi um empate!");
  }

  sim = parseInt(
    prompt("Deseja jogar novamente? Digite 1 - para SIM e 2 - para NÃO: ")
  );
  console.clear();
  while (sim != 1 && sim != 2) {
    console.log("Você digitou uma opção errada!");
    sim = parseInt(
      prompt("Deseja jogar novamente? Digite 1 - para SIM e 2 - para NÃO: ")
    );
    console.clear();
  }
}
