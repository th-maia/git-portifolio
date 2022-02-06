/* 1- Faça  5 programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
const a = 90;
const b = 45;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if(a == b){
    console.log("a variavel a e b tem o mesmo valor");
} else if (a >b){
    console.log("a é maior do que b");
} else {
    console.log("b é maior do que a")
}
// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 90;
const b = 45
const c = 30;

if (a >= b && a >= c) {
    console.log( a , "é o maior");
} else if (b > a && b >= c) {
    console.log( b , "é o maior");  
} else {
    console.log( c , "é o maior");
}
//4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const z = 0;
if(z > 0) {
    console.log("positivo");
} else if (z < 0) {
    console.log("negativo");
} else {
    console.log("zero");
}
//5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

if (a <= 0 | b <= 0 | c <= 0){
    console.log("erro");
} else if (a+b+c === 180){
    console.log("true");
} else {
    console.log("false");
}

/*6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.*/

let piece = 'KniGHt';

piece = piece.toLowerCase()
switch (piece) {
    case 'pawn':
        console.log('pawn -> move forward one or two squares, but capture one of the front squares diagonally square');
        break;
    case 'bishop':
        console.log('bishop -> move any distancmove diagonally as many squares as it likes');
        break;
    case 'knight':
        console.log('knight -> can jump over another piece! It moves one square left or right horizontally and then two squares up or down vertically');
        break;
    case 'rook':
        console.log('rook -> can move as many squares as it likes, or horizontally or vertically');
        break;
    case 'queen':
        console.log('queen -> can move as many squares as it likes, or horizontally or vertically or diagonally');
        break;
    case 'king':
        console.log('king -> can move only one square, or horizontally or vertically or diagonally');
        break;
    default:
        console.log('erro')

}

/* 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
 Siga essas regras abeixo e que imprima somente o maior dos conceitos entre eles(o A ou o mais proximo de A).
 Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/
let porcentagem = -1;
let conceitosAlcançados = null;

if(porcentagem < 50) {
    conceitoAlcançado= 'F'
}
if(porcentagem  >= 50 ){
    conceitoAlcançado= 'E';
}

if(porcentagem  >= 60 ){
    conceitoAlcançado= 'D';
}

if(porcentagem >= 70) {
    conceitoAlcançado= 'C';
}
  
if(porcentagem >= 80) {
    conceitoAlcançado= 'B';
}
if (porcentagem >= 90) {
    conceitoAlcançado= 'A';
}

if (porcentagem < 0) {
    conceitoAlcançado= 'ERRO';
}
console.log(conceitoAlcançado);

//8- Escreva um programa três constantes que retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const a = 542;
const b = 322;
const c = 11;
if( a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log('true');
}else {
    console.log('false')
}

//9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const a = 542;
const b = 32;
const c = 12;
if( a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log('true');
}else {
    console.log('false');
}

//10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto e o imposto de 20% sobre o custo do produto) a empresa terá ao vender mil desses produtos.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
const compra = 10;
const venda = 15;

if (compra == 0 || venda == 0) {
    console.log('ERRO')
}else{
    let lucroTotal = 0;
    lucroTotal= venda - ((compra/5)+compra)
    console.log(lucroTotal*1000);
}

/*11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salario = 3000.00;
let inss = 0;
let ir = 0;
let renda = 0;
let liquido = renda;

if(salario<=1556.94) {
    inss = (salario/100)*8;
} else if(salario>=1556.95 && salario<=2594.92) {
    inss = (salario/100)*9;
    } else if(salario>=2594.93 && salario<=5189.82){
        inss = (salario/100)*11;
        }else if (salario>=5189.82){
            inss=570.88;
        }
renda = salario - inss

if(renda>=1903.99 && renda<=2826.65){
    liquido= renda-(renda*0.075)+142.80
}else if(renda>=2826.66 && renda<=3751.05){
    liquido=renda-(renda*0.15)+354.80
}else if(renda>=3751.06 && renda<=4664.68){
    liquido=renda-(renda*0.225)+636.13
}else if(renda>=4.664,68){
    liquido=renda-(renda*0.275)+869.36
}
console.log(liquido)