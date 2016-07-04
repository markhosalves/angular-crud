// class Estudante {
//     nomeCompleto: string;
//     constructor(public primeiroNome:string,
//      public ultimoNome:string) {
//         this.nomeCompleto = primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
//     }
// }
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// interface Humano {
//     primeiroNome: string;
//     ultimoNome: string;
//     idade?: number;
// }
var Humano = (function () {
    function Humano(primeiroNome, ultimoNome) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
    }
    return Humano;
}());
var Estudante = (function (_super) {
    __extends(Estudante, _super);
    function Estudante(primeiroNome, nomeMeio, ultimoNome) {
        _super.call(this, primeiroNome, ultimoNome);
        this.nomeMeio = nomeMeio;
        this.nomeCompleto = this.primeiroNome + ' ' + this.nomeMeio + ' ' + this.ultimoNome;
    }
    return Estudante;
}(Humano));
function saudar(pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}
var pessoa = new Estudante('Arthur', 'C.', 'Clark');
console.log(saudar(pessoa));
