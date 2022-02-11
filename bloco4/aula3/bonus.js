/*1- Crie programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
exemplo:
n = 5
*****
*****
*****
*****
*****
           */
let numero = 5;
tabela = '';
if(numero >1){
    for(let linha=1; linha<=numero; linha+=1){
    tabela = '';
        for(let coluna=1; coluna<=numero; coluna+=1){
            tabela += '*'
        }
    console.log(tabela);
    }
}

/*2- 2- faça o mesmo que antes, mas imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5
*
**
***
****
*****                                                                                                  */

let numero = 5;
tabela = '';
if(numero >1){
    for(let linha=1; linha<=numero; linha+=1){
    tabela = '';
        for(let coluna=1; coluna<=linha; coluna+=1){
            tabela += '*'
        }
    console.log(tabela);
    }
}



/*3- Agora vamos inverter o lado do triângulo. Por exemplo:
n = 5
    *
   **
  ***
 ****
*****                                                       */

let numero = 5;
let tabela = '';
if(numero >1){
    for(let linha=1; linha<=numero; linha+=1){
    tabela = '';
        for(let coluna=0; coluna<numero; coluna+=1){
            if(coluna >= numero-linha){
                tabela += '*'
            } else{
                tabela += ' '
            }
        }
    console.log(tabela);
    }
}



/*4- faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****                                                                  */

let numero = 5;
let meio= Math.ceil(numero/2);
let tabela= '';
let ajustepar= 0;

if (numero%2==0){
    ajustepar= 1
}
    
for (let linha=0; linha<(numero/2); linha += 1){
    tabela = ''
    for(let coluna=1; coluna<=numero; coluna +=1){
        if (coluna<meio-linha ^ coluna>meio+linha+ajustepar){
        tabela += ' '; 
        } else{
        tabela += '*';
        }
    }
    console.log(tabela);
}

/*5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
n = 7

   *
  * *
 *   *
*******     */

let numero = 5;
let meio= Math.ceil(numero/2);
let tabela= '';
let ajustepar= 0;

if (numero%2==0){
    ajustepar= 1
}
    
for (let linha=0; linha<(numero/2); linha += 1){
    tabela = ''
    for(let coluna=1; coluna<=numero; coluna +=1){
       if (linha == meio-1) {
           tabela += '*';
            } else if (coluna == meio-linha || coluna==meio+linha+ajustepar){
                tabela += '*';
            } else {
                tabela += ' ';
            }
        }
    console.log(tabela)
}

/*6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

let number = 15;
let counter = 0;
if(number>0 && number == Math.floor(number)){
    for(let index=1; index<(number/2)+1; index+=1){
        if(number%index == 0){
        counter += 1;
        }
    }
    if(counter<=1){
        console.log("O numero "+ number+ " é primo")     
    }else{
        console.log("O numero "+ number+ " não é primo")        
    }
}else{
    console.log("O numero " + number + " não é um numero natural")
}

