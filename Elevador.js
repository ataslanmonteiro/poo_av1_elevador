class Elevador {
  constructor(capacidade) {
    this.capacidade = capacidade;
    this.andarAtual = 0;
    this.totalPessoas = 0;
  }

  get capacidade() {
    return this.capacidade;
  }

  get andarAtual() {
    return this.andarAtual;
  }

  get totalPessoas() {
    return this.totalPessoas;
  }

  adicionarPessoa() {
    if (this.totalPessoas < this.capacidade) {
      this.totalPessoas++;
    } else {
      console.log("Elevador cheiro.");
    }
  }

  removerPessoa() {
    if (this.totalPessoas > 0) {
      this.totalPessoas--;
    } else {
      console.log("Elevador vazio.");
    }
  }

  subir() {
    this.andarAtual++;
  }

  descer() {
    if (this.andarAtual > 0) {
      this.andarAtual--;
    } else {
      console.log("O elevador já está no térreo.");
    }
  }
}

class SistemaElevadores {
  constructor() {
    this.elevadores = [];
  }

  criarElevador(capacidade) {
    const elevador = new Elevador(capacidade);
    this.elevadores.push(elevador);
    console.log(`Elevador criado com capacidade para ${capacidade} pessoas.`);
  }

  exibirElevadores() {
    this.elevadores.forEach((elevador, indice) => {
      console.log(
        `Elevador ${indice + 1} - Capacidade: ${
          elevador.capacidade
        } - Pessoas: ${elevador.totalPessoas} - Andar atual: ${
          elevador.andarAtual
        }`
      );
    });
  }
}

const sistemaElevadores = new SistemaElevadores();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log(`
  1- Criar novo elevador;
  2- Inserir pessoa em um elevador;
  3- Retirar pessoa de um elevador;
  4- Conferir a capacidade de pessoas do elevador;
  5- Conferir o total de pessoas que estão no elevador;
  6- Fazer o elevador subir um andar;
  7- Fazer o elevador descer um andar;
  8- Verificar em qual andar o elevador se encontra no momento;
  9- Sair do sistema;
  `);
  readline.question("Escolha um opção: ", (opção) => {
    lidarComOpcao(opcao);
  });
}

function lidarComOpcao(opcao) {
  switch (opcao) {
    case "1":
      readline.question("Informe a capacidade do elevador: ", (capacidade) => {
        sistemaElevadores.criarElevador(parseInt(capacidade));
        mostrarMenu();
      });
      break;
    case "2":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          sistemaElevadores.elevadores[indice - 1].adicionarPessoa();
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "3":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          sistemaElevadores.elevadores[indice - 1].removerPessoa();
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "4":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          console.log(
            `Capacidade do elevador: ${
              SistemaElevadores.elevadores[indice - 1].capacidade
            }`
          );
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "5":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          console.log(
            `Total de pessoas no elevador: ${
              SistemaElevadores.elevadores[indice - 1].totalPessoas
            }`
          );
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "6":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          SistemaElevadores.elevadores[indice - 1].subir();
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "7":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          SistemaElevadores.elevadores[indice - 1].descer();
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "8":
      readline.question("Escolha o elevador (1, 2, ...): ", (indice) => {
        if (sistemaElevadores.elevadores[indice - 1]) {
          console.log(
            `O elevador está no andar: ${
              SistemaElevadores.elevadores[indice - 1].andarAtual
            }`
          );
        } else {
          console.log("Elevador não encontrado.");
        }
        mostrarMenu();
      });
      break;
    case "9":
      readline.close();
      break;
    default:
      console.log("Opção inválida.");
      mostrarMenu();
      break;
  }
}
mostrarMenu();
