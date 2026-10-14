import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import { ContaBancaria } from "./src/models/ContaBancaria.js";

console.log("=== SISTEMA BANCÁRIO ===");

const corrente = new ContaCorrente({
    numero: "12345-6",
    agencia: "0001",
    titular: "Mariana Souza",
    saldo: 1000.00,
    limite: 500.00
});

const poupanca = new ContaPoupanca({
    numero: "98765-4",
    agencia: "0001",
    titular: "Mariana Souza",
    saldo: 5000.00,
    taxaAniversario: 0.005 // 0.5%
});

console.log("\n--- DEMONSTRAÇÃO DE OPERAÇÕES ---");
corrente.sacar(1200); // Usa o saldo e parte do limite
poupanca.renderJuros(); // Rende os juros mensais

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO (EXTRATOS) ---");

// Array contendo a classe abstrata recebendo as subclasses instanciadas
const contas: ContaBancaria[] = [corrente, poupanca];

// Executando o método polimórfico
for (const conta of contas) {
    conta.exibirExtrato();
}
