// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// * O menor valor de faturamento ocorrido em um dia do mês;
// * O maior valor de faturamento ocorrido em um dia do mês;
// * Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");
const path = require("path");

// Defina o caminho do arquivo JSON
const jsonFilePath = path.join(__dirname, "faturamento.json");

// Ler o arquivo JSON
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return;
  }

  try {
    // Analisar o JSON
    const faturamentoData = JSON.parse(data);
    const faturamento = faturamentoData.faturamento;

    const faturamentoValidoMaiorQueZero = faturamento
      .map((dia) => dia.valor)
      .filter((valor) => valor > 0);

    const menorValorDeFaturamento = Math.min(...faturamentoValidoMaiorQueZero);
    const maiorValorDeFaturamento = Math.max(...faturamentoValidoMaiorQueZero);

    const mediaMensal =
      faturamentoValidoMaiorQueZero.reduce((acc, valor) => acc + valor, 0) /
      faturamentoValidoMaiorQueZero.length;

    const diasComFaturamentoAcimaDaMedia = faturamentoValidoMaiorQueZero.filter(
      (valor) => valor > mediaMensal
    ).length;

    console.log(`Menor valor de faturamento: R$ ${menorValorDeFaturamento}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValorDeFaturamento}`);
    console.log(
      `Quantidade de dias com faturamento superior à média: ${diasComFaturamentoAcimaDaMedia}`
    );
  } catch (parseError) {
    console.error("Erro ao analisar o arquivo JSON:", parseError);
  }
});

// verificado com node teste3.js dentro do cd teste3-faturamento
