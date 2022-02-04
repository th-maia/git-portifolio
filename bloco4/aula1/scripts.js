const a = 90;
const b = 45;
/*
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if(a == b){
    console.log("a variavel a e b tem o mesmo valor");
} else if (a >b){
    console.log("a é maior do que b");
} else {
    console.log("b é maior do que a")
}
*/
const c = 30;

if (a >= b && a >= c) {
    console.log( a , "é o maior");
} else if (b > a && b >= c) {
    console.log( b , "é o maior");  
} else {
    console.log( c , "é o maior");
}

if ( a > 0) {
    console.log("positivo");
} else if (a < 0) {
    console.log("negativo");
} if ( a == 0) {
    console.log("zero");
}

if (a <= 0 | b <= 0 | c <= 0){
    console.log("erro");
} else if (a+b+c === 180){
    console.log("true");
} else {
    console.log("false");
}