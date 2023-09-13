/** [Médio]
 * Implementar um código que conte quantas vezes cada letra apareceu na palavra
 * 
 * Observações:
 * - Letras maiúsculas e minúsculas são consideradas diferentes!
 * 
 * Exemplos:
 * - Na palavra "Banana" temos "B" = 1, "a" = 3 e "n" = 2
 * - Na palavra "Julius" temos "J" = 1, "u" = 2, "l" = 1, "s" = 1
 * - Na palavra "Olá" temos "O" = 1, "l" = 1 e "á" = 1
 */

/**
 * Retornar quantas vezes cada letra apareceu na palavra.
 */
const contarLetras = (palavra) => {
    // Implementar essa função

    // Por exemplo, para a palavra "Banana" a resposta esperada é:
    return {
        "B": 1,
        "a": 3,
        "n": 2
    }
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavra: "Massa",
            resultadoEsperado: {
                "M": 1,
                "a": 2,
                "s": 2
            },
        },
        {
            palavra: "Kikkoman",
            resultadoEsperado: {
                "K": 1,
                "i": 1,
                "k": 2,
                "o": 1,
                "m": 1,
                "a": 1,
                "n": 1
            },
        },
        {
            palavra: "Balão",
            resultadoEsperado: {
                "B": 1,
                "a": 1,
                "l": 1,
                "ã": 1,
                "o": 1
            },
        },
        {
            palavra: "Guinness",
            resultadoEsperado: {
                "G": 1,
                "u": 1,
                "i": 1,
                "n": 2,
                "e": 1,
                "s": 2
            },
        }
    ]

    const verificar = (esperado, resultado) => {
        let sumEsperado = 0
        let sumResultado = 0
        let sumIguais = 0

        for (let i in esperado) {
            sumEsperado += esperado[i]
        }

        for (let i in resultado) {
            sumResultado += resultado[i]

            if (esperado[i] != undefined && esperado[i] !== null) {
                if (esperado[i] === resultado[i]) {
                    sumIguais += resultado[i]
                }
            }
        }

        return sumEsperado === sumResultado === sumIguais
    }

    console.log(`[Teste Contagem de Letras] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Contagem de Letras] Testando com a palavra:", teste.palavra)
        console.log("[Teste Contagem de Letras] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = contarLetras(teste.palavra)
        const resultadoTeste = verificar(teste.resultadoEsperado, resultadoObtido)
        
        console.log("[Teste Contagem de Letras] Resultado obtido:", resultadoObtido)
        console.log("[Teste Contagem de Letras] Teste teve ", resultadoTeste ? "SUCESSO" : "FALHA")
        console.log("[Teste Contagem de Letras] ---------------------------------")
    })
}

teste()
