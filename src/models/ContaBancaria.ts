import { ContaProps } from "../interfaces/ContaProps.js";

export abstract class ContaBancaria<T extends ContaProps = ContaProps> {
    constructor(protected props: T) {}

    public getNumero(): string {
        return this.props.numero;
    }

    public getAgencia(): string {
        return this.props.agencia;
    }

    public getSaldo(): number {
        return this.props.saldo;
    }

   
    public sacar(valor: number): void {
        if (valor <= 0) {
            console.log("\n ERRO: O valor do saque deve ser maior que zero!");
            return;
        }
        if (this.props.saldo >= valor) {
            this.props.saldo -= valor;
        } else {
            console.log("\n ERRO: Saldo insuficiente!");
        }
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("\n ERRO: O valor do depósito deve ser maior que zero!");
            return;
        }
        this.props.saldo += valor;
    }

    public abstract exibirExtrato(): void;
}
