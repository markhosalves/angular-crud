//recebe e retorna o parametro
function identity(params) {
    return params;
}

console.log(identity());

//soma 
function add(a,b) {
    return a+b;
}
console.log(add(2,2));

//multiplicacao 

function mul(a,b) {
    return a*b;
}
console.log(mul(2,2));


function retorno(a){
 return a;
}

function identity(teste){
    return function(){return retorno(teste);};
}

console.log(identity(1));


function addAll(){
    for(var i=0,j=arguments.length;i<j;i=i+1){

    }
}

function addf(valor){
    
}



function retorno(a,b){
    return a+b;
}

function soma(a){
    return function(b){return retorno(a,b);};
}


function add(a,b){
    return  a + b;
}


function applyF(f){
    return function(x){
        return function(y){
            return f(x,y);
        };
    };
}



function curry(f,a){
            return applyF(f,a);
}


var a = [1,2,3,4,5,6,7,8,9,10];
a.forEach(function(x){
    console.log(x*2);
});
//return 2,4,6,8,10,12,14,16,18,20



var a = [1,2,3,4,5,6,7,8,9,10];

var quad = a.map(function(x){return x*x;});
//return [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


var impar = a.filter(function(n){
    return n % 2 === 1;
});
//return [1, 3, 5, 7, 9] Impares

var reduz = a.reduce(function(anterior,atual){
    return anterior+atual;
});

//Soma filter 55



a.filter(function(n){
    return n % 2 === 1;
}).reduce(function(anterior,atual){
    return anterior+atual;
},0);