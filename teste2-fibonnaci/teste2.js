// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function numeroFibonacci(num) {
  if (num < 0) return false;

  let a = 0,
    b = 1;

  while (a <= num) {
    if (a === num) return true;
    [a, b] = [b, a + b];
  }

  return false;
}

function verificarSeNumeroEhFibonnaci() {
  const numeroInput = document.getElementById("numero");
  const resultado = document.getElementById("resultado");
  const numero = parseInt(numeroInput.value, 10);

  if (numeroInput.value === "") {
    resultado.textContent = "";
    return;
  }

  if (isNaN(numero)) {
    resultado.textContent =
      "Isso não é um número inteiro válido. Digite outro valor.";
  } else {
    if (numeroFibonacci(numero)) {
      resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      resultado.textContent = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
  }
}

verificarSeNumeroEhFibonnaci();

// verificado no navegador
