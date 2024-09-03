// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
  let resultadoDaStringInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultadoDaStringInvertida += str[i];
  }
  return resultadoDaStringInvertida;
}

const stringOriginal = "Desafio Target";
const stringInvertida = inverterString(stringOriginal);

console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);

// verificada com node teste5.js dentro do cd teste5-string
