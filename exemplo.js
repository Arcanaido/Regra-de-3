/*
 * const qualquerCoisa = () => ...
 *    -> Cria uma função chamada "qualquerCoisa" que não recebe parâmetros
 * 
 * Math.<função>
 *    -> Funções matemáticas do JavaScript
 *    -> Objeto global "Math" que tem funções matemáticas
 * 
 * Math.floor() / Math.ceil()
 *    -> Eles transformam qualquer número no inteiro menor ou maior
 *    -> Ele corta "tudo depois do ponto" -> 2.45 => 2 / 2.45 = 3
 * 
 * Math.random()
 *    -> Ele retorna um número aleatório entre 0 e 1
 * 
 * Math.round()
 *    -> Arredondamento "normal" (tecnicamente falando, é o arredondamento bancário)
 * 
 * Lembrar da regra da porcentagem:
 *    -> Porcentagens nos dão números entre 0 e o valor total
 *    -> Representado por "* 0.y" onde y é o tanto de porcento (20% = 0.20, 12.34% = 0.1234, 5% = 0.05)
 */


const randomNumber = () => Math.floor(1 + Math.random() * 100)

const main = (params) => {
  // O const proíbe a mudança da referência da variável
  const numbers = [] // Cria um array para colocarmos os números

  // Repetir 100x o código
  for (let i = 0; i < 100; i++) {
    const n = randomNumber() // Gera um número aleatório
    numbers.push(n) // Joga o número no array
  }

  // Nesse ponto do código: numbers é um array com 100 elementos, cada um sendo um número aleatório

  // É um algoritmo bem comum.
  // Determina dentre os números qual é o MAIOR e/ou qual é o MENOR
  // 
  // Números vão de 1 a 100
  let min = 200
  let max = 0

  // Para cada número gerado...
  numbers.forEach((n) => {
    if (n < min) { // O número gerado é menor que mínimo que eu achei até agora?
      min = n // Caso seja verdade, "min = n" (o menor agora é esse que eu acabei de ver)
    }
    if (n > max) { // O número gerado é maior que o maior que eu já achei até agora?
      max = n // Caso seja verdade, "max = n" (o maior agora é esse que eu acabei de ver)
    }
  })

  return [min,max]
}

/*
 * 1. Estudar esse código
 * 2. Refazer o código retornando apenas o mínimo
 * 3. Dado que:
 *    a) Um texto pode ser usado como um array
 *    b) Cada letra do texto está associada a um número (exemplo: "a".charCodeAt() = 97)
 *    c) Escrever um código que me diga a maior letra usada em um texto (considerando o charCodeAt)
 */
