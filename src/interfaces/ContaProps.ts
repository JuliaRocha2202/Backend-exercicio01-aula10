export interface ContaProps {
    numero: string;
    agencia: string;
    titular: string;
    saldo: number;
}

export interface ContaCorrenteProps extends ContaProps {
    limite: number;
}

export interface ContaPoupancaProps extends ContaProps {
    taxaAniversario: number;
}
