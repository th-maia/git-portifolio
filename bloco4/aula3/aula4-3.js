//1- crie um algoritmo que retorne o fatorial de 10.
let numero= 10;
let factorial = 1; 
for(let index=numero; index > 1; index -=1 ) {
    factorial *= index;
}
console.log(factorial);

//2-crie um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
let word = 'tryber';
let inverse = ''

for(index=word.length-1; index>=0; index-=1 ){
    inverse += word[index];
}
console.log(inverse);


//2- outra resposta
let word = 'tryber';
let teste = word.split("").reverse().join("");
console.log(teste);


//3-Considere o array de strings abaixo:
//let array = ['java', 'javascript', 'python', 'html', 'css'];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let moreLetters = 0;
let arrayPossition = 0;

for(index = 0; index < array.length; index +=1){
    if(moreLetters < array[index].length){
        moreLetters = array[index].length;
        arrayPossition = index;
    }
}
console.log('A maior palavra é ' + array[arrayPossition])

for(index = 0; index < array.length; index +=1){
    if(moreLetters > array[index].length){
        moreLetters = array[index].length;
        arrayPossition = index;
    }
}
console.log('A menor palavra é ' + array[arrayPossition])


//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que diga o maior número primo entre 0 e 50.

let marcador = 0;

for(numero = 50; numero> 2; numero-=1){
    marcador = 0;
    for(divisor=2; divisor<= numero; divisor +=1 ){
        if(numero % divisor == 0){
            marcador += 1
        }
    }
    if(marcador == 1){
        console.log(numero)
        break
    }
}