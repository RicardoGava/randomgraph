## Gerador de histograma para testar o random do JS

Para alterar a quantidade de números gerados altere a constante repeatRandom e para aumentar o range do random altere a constante randomRange.

```JS
const repeatRandom = 700000;
const randomRange = 1800;
```

>Exemplo de gráfico gerado:
>![Exemplo](print.png "Exemplo")

A linha branca horizontal dedemarca a frequência média.
Enquanso as linhas azuis ciano horizontais são os desvios padrões.

No histrograma as linhas verdes são frequências dentro do primeiro desvio padrão, as linha amarelas entre o segundo e primeiro desvio padrão e a vermelha acima de dois desvios padrão.