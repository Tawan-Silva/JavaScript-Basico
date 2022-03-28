let varA = "A";
let varB = "B";
let varC = "C";

const varAA = varA;
varA = varB;
varB = varC;


console.log(varA, varB, varAA);