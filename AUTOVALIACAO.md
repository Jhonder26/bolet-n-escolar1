# Autoavaliação do aluno

## Situação de Aprendizagem — Boletim Escolar com React + Vite

**Curso:** Frontend
**Professor:** Nivaldo Araújo

---

## 1. Reescreva o ternário da situação usando if/else.
Qual forma você achou mais fácil de ler? Por quê?

```javascript
let situacao

if (media >= 7) {
  situacao = 'Aprovado'
} else if (media >= 5) {
  situacao = 'Recuperação'
} else {
  situacao = 'Reprovado'
}
```

Achei a estrutura if/else mais fácil de ler, porque consigo
entender cada condição separadamente. Porém, percebi que o
operador ternário também é muito útil, pois permite escrever
a mesma lógica de forma mais curta e organizada.

## 2. Por que temaEscuro fica no App, mas mostrarNotas
fica no CartaoResultado?

O estado temaEscuro fica no App porque controla o tema de
toda a aplicação e precisa ser compartilhado entre os
componentes.

Já o estado mostrarNotas fica no CartaoResultado porque
controla apenas a exibição das notas dentro desse componente.
Dessa forma, cada estado fica no local onde realmente
é necessário.

## 3. O que aconteceria se alterarNota não usasse ...notas?

Se a função alterarNota não utilizasse o operador spread
(...notas), as outras notas seriam perdidas sempre que
uma nota fosse alterada.

O spread permite copiar os valores existentes e atualizar
somente o campo que foi modificado, mantendo as outras
informações do formulário.

## 4. Qual capacidade socioemocional você mais desenvolveu
nesta SA?

A capacidade socioemocional que mais desenvolvi nesta
situação de aprendizagem foi a perseverança.

Durante o desenvolvimento do projeto, encontrei algumas
dificuldades para compreender determinados conceitos de
programação, principalmente por ser estrangeiro e ainda
estar aprendendo o português.

Mesmo assim, procurei estudar, entender cada etapa,
corrigir os erros e realizar os testes necessários.

Essa experiência me ajudou a desenvolver minha autonomia,
minha organização e minha capacidade de resolver problemas.