//Definindo a casse Calculadora
class Calculadora {
    constructor() {
        //Iniciando o visor com o valor 0
        this.valor = '0'
    }

    //Método para (adicionar um número no visor)
    adicionarNumero(numero) {
        if (this.valor === '0') {
            //Se o valor atual for 0 vai substituir
            this.valor = numero
        } else {
            //Senão, adicionando o número final no final do valor atual
            this.valor += numero
        }
        //Atualiza o visor
        this.atualizarVisor()

    }
    //Método para adicionar operação no visor
    adicionarOperacao(operacao) {
        if (
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '-' ||
            this.valor.slice(-1) === '*' ||
            this.valor.slice(-1) === '/'
        ) {
            this.valor = this.valor.slice(0, -1) + operacao
        } else {
            //Senão, adiciona operação
            this.valor += operacao
        }
        //Atualiza o visor
        this.atualizarVisor()
    }

    limpar() {
        //Método para limpar visor
        this.valor = '0'
        this.atualizarVisor()
    }

    resultado() {
        try{
            //Usa a função eval() para calcular o resultado da expressão no visor
            this.valor = eval(this.valor).toString() 
        } catch(e) {
            //Se houver um erro na expressão, exibe a mensagem Erro
            this.valor = 'Erro'
        }
    }

    //Método para atualizar o visor com o valor atual da calculadora 
    atualizarVisor() {
        document.getElementById('visor').value = this.valor
    }
}
//Criando um objeto calculadora da classe calculadora
let calculadora = new Calculadora()