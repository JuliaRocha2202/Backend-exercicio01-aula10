import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {
    constructor(props: ContaPoupancaProps) {
        super(props);
    }

    public getTaxaAniversario(): number {
        return this.props.taxaAniversario;
    }

    public renderJuros(): void {
        const juros = this.getSaldo() * this.props.taxaAniversario;
        this.depositar(juros);
        console.log(`\n Rendimento aplicado! Juros gerados: R$${juros.toFixed(2)}`);
    }

    public exibirExtrato(): void {
        console.log(`[CONTA POUPANÇA] Titular: ${this.props.titular} | Ag: ${this.getAgencia()} | CP: ${this.getNumero()} | Saldo: R$${this.getSaldo().toFixed(2)} | Taxa: ${(this.getTaxaAniversario() * 100)}%`);
    }
}
