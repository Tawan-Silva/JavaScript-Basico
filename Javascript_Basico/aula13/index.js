/* Propriedade Length.
 length, esta retornará o tamanho total da string. 
*/

// Sintaxe:

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var l = str.length;//Retorna 30

// Lembrando que a string assim como uma array começa com index zero( 0 ).

/*Métodos indexOf e lastIndexOf.
 Tanto o método indexOf quanto o lastIndexOf retornam a primeira posição de um determinado pedaço dentro de uma string, porem o indexOf retorna a primeira ocorrência e o lastIndexOf retorna a ultima. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var first = str.indexOf("Mundo");//Retorna 4
var last = str.lastIndexOf("Mundo");//Retorna 24

/* Método search.
O método search é exatamente igual ao método indexOf, retorna a primeira ocorrência de um determinado pedaço de em uma string. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.search("Mundo");//Retorna 4

/* Método slice.
O método slice extrai uma parte de uma string e retorna a parte extraída em uma nova string. */

/* O método tem dois parâmetros: o índice inicial (posição), e o índice final (posição). */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.slice(4,13);//Retorna Mundo Olá

/* Podemos passar indices negativos como parâmetro, e ele começará a contar do fim para o começo da string. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.slice(-14,-2);//Retorna ndo Olá Mund

// Podemos omitir o ultimo parâmetro.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.slice(10);//Retorna Olá Mundo Olá Mundo

/* Método substring.
É similar ao slice, porem não aceita números negativos. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.substring(10, 15);//Retorna Olá M

/* Método substr.
Também é similar ao slice, com uma diferença que o segundo parâmetro é o tamanho do corte e não até onde contar. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.substr(4, 7);//Retorna Mundo O
/* Método replace.
O método replace substitui um determinado valor em uma string por outro valor. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.replace("Mundo","Bauru");//Olá Bauru Olá Mundo Olá Mundo 

/* Perceba que o replace não substituiu todas as ocorrências de “Mundo”, mas somente a primeira. */

/* Métodos toUpperCase e toLowerCase.

O método toUpperCase transforma toda a string em maiúscula e o método toLowerCase transforma toda a string e minúscula. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.toUpperCase();//OLÁ MUNDO OLÁ MUNDO OLÁ MUNDO 
var result2 = str.toLowerCase();//olá mundo olá mundo olá mundo 

/* Método concat.
O método concat agrupa 2 ou mais strings. */

var a = "Olá";
var b = "Mundo";
var c = "do";
var d = "JavaScript";
var e = a.concat(" ",b, " ", c, " ",d );//Retorna Olá Mundo do JavaScript

/* Métodos charAt e charCodeAt.
O método charAt server para retornar um caractere de uma string pelo seu índice e o método charCodeAt retorna o mesmo caractere só que em formato unicode. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.charAt(0);//Retorna O
var result2 = str.charCodeAt(0);//Retorna 79

/* No exemplo acima mandei pegar o primeiro caractere, então de index zero( 0 ), e ele me retornou “O”, e 79, se mandar pegar o segundo caractere de index um ( 1 ), ele me retornará “l” e 108. */

/* Método split.
É possível converter uma string em array usando o método split. */

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var arr = str.split(" ")
for (i in arr) {
    console.log(arr[i])
};
/*
Imprimirá no log

Olá
Mundo
Olá
Mundo
Olá
Mundo */