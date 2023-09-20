/** [Médio]
 * Implementar um código que dada uma lista de números, retorne o menor e o maior.
 * 
 * Restrições:
 * - Serão apenas números positivos (maior ou igual a 0)
 * - Não é permitido usar Math.min() nem Math.max()
 * - A função min() já está implementada COMO UM EXEMPLO. A implementação usa Math.min() e portanto não vale :P
 */

/**
 * Retornar o menor número da lista de números recebida
 */
const min = (listaDeNumeros) => {
    // Implementar essa função
    
    let menorValor = 1000000
    
    for( let i = 0; i < listaDeNumeros.length; i++ ){
        if( listaDeNumeros[i] < menorValor ){
            menorValor = listaDeNumeros[i]
        }
    }
           
    return menorValor
}

/**
 * Retornar o maior número da lista de números recebida
 */
const max = (listaDeNumeros) => {
    // Implementar essa função
    let maiorValor = 0
    
    for( let i = 0; i < listaDeNumeros.length; i++ ){
        if( listaDeNumeros[i] > maiorValor ){
            maiorValor = listaDeNumeros[i]
        }
    }    
    
    return maiorValor
}

/**
 * Retornar o maior número da lista de números recebida
 */
const max = (listaDeNumeros) => {
    // Implementar essa função
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const menorNumero = Math.round(Math.random() * 10)
    const maiorNumero = 11 + Math.round(Math.random() * 1_000)
    const quantidadeNumeros = Math.round(Math.random() * 100)

    const lista = []
    let menorGerado = maiorNumero + 1
    let maiorGerado = menorNumero - 1

    for (let i = 0; i < quantidadeNumeros; i++) {
        const n = menorNumero + Math.floor(Math.random() * (maiorNumero - menorNumero))
        menorGerado = Math.min(menorGerado, n)
        maiorGerado = Math.max(maiorGerado, n)
        lista.push(n)
    }

    const resultadoFuncaoMin = min(lista)
    const resultadoFuncaoMax = max(lista)

    console.log("[Teste Min/Max] Parâmetros do teste:")
    console.log("[Teste Min/Max] - MENOR número que podia ser gerado:", menorNumero)
    console.log("[Teste Min/Max] - MAIOR número que podia ser gerado:", maiorNumero)
    console.log("[Teste Min/Max] - Tamanho da lista de números:", quantidadeNumeros)
    console.log("[Teste Min/Max] - Lista completa de números gerados:", lista)
    console.log("[Teste Min/Max] -----------------------------------")
    console.log("[Teste Min/Max] Resultados esperados:")
    console.log("[Teste Min/Max] - Função min:", menorGerado)
    console.log("[Teste Min/Max] - Função max:", maiorGerado)
    console.log("[Teste Min/Max] -----------------------------------")
    console.log("[Teste Min/Max] Resultados obtidos das funções:")
    console.log("[Teste Min/Max] - Função min:", resultadoFuncaoMin)
    console.log("[Teste Min/Max] - Função max:", resultadoFuncaoMax)
    console.log("[Teste Min/Max] -----------------------------------")

    if (resultadoFuncaoMin === menorGerado) {
        console.log("[Teste Min/Max] SUCESSO na função min!")
    }
    else {
        console.log("[Teste Min/Max] ERRO na função min!")
    }

    if (resultadoFuncaoMax === maiorGerado) {
        console.log("[Teste Min/Max] SUCESSO na função max!")
    }
    else {
        console.log("[Teste Min/Max] ERRO na função max!")
    }
}

teste()
