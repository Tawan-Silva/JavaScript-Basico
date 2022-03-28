// 1 Solução
function maiorNumero (num1, num2) {
    num1 > num2 ? console.log(num1) : console.log(num2);
}

maiorNumero(80, 70);

// 2 Solução
const max = (num1, num2) => num1 > num2 ? `O maior número entre os dois é ${num1}` : `O maior número entre os dois é ${num2}`;
console.log(max(90, 10));