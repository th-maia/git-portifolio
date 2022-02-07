let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1- imprima todos os valores do array no console.log().
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let print of numbers){
    console.log(print)
}

//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index=0; index<numbers.length ; index +=1 ){
    soma += numbers[index];
}
console.log(soma);

//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0
for(let index=0; index<numbers.length ; index +=1 ){
    soma += numbers[index];
}
media = soma/numbers.length;
console.log(media);

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0
for(let index=0; index<numbers.length ; index +=1 ){
    soma += numbers[index];
}
media = soma/numbers.length;
console.log(media);
let maior20=media>20 ? "valor maior que 20" : "valor menor ou igual a 20";
console.log(maior20);

//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior= null ;
for(index=0; index<numbers.length; index +=1){
    maior = Math.max(maior,numbers[index] )
}
console.log(maior);

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for(index=0; index<numbers.length; index +=1){
    if(numbers[index]%2 != 0){
    impares += 1 
    }
}
console.log(impares);

//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0]

for(index=0; index<numbers.length; index +=1){
   if(numbers[index]<menor){
       menor=numbers[index]
   }
}
console.log(menor);
//8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array= [];
let soma= null;
for(let index=1; index<=25; index+=1){
    array.push(index);
    soma+= index
}
console.log(soma)

//9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let array= [];
let numero= 0;
for(let index=1; index<=25; index+=1){
    array.push(index);
    console.log(index/2)
}
