
// class Estudante {
//     nomeCompleto: string;
//     constructor(public primeiroNome:string,
//      public ultimoNome:string) {
//         this.nomeCompleto = primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
//     }
// }

// interface Humano {
//     primeiroNome: string;
//     ultimoNome: string;
//     idade?: number;
// }

class Humano {
    nomeCompleto: string;

    constructor(public primeiroNome: string,
        public ultimoNome: string) {
    }
}


class Estudante extends Humano {
    nomeCompleto: string;
    constructor(primeiroNome, public nomeMeio: string, ultimoNome) {
        super(primeiroNome, ultimoNome);
        this.nomeCompleto = this.primeiroNome + ' ' + this.nomeMeio + ' ' + this.ultimoNome;
    }
}


function saudar(pessoa: Humano): string {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}

var pessoa = new Estudante('Arthur', 'C.', 'Clark');

console.log(saudar(pessoa));
