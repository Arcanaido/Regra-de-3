/** [Fácil]
 * Implementar um código que retorne verdade se um número for Par e falso se for Ímpar
 * 
 * Observações:
 * - Considere "0" (zero) como um número par
 * - Não haverão números negativos
 */

/**
 * Retornar verdade se numero for par, caso contrário retornar falso
 */
const parOuImpar = (numero) => {
    // Implementar essa função
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            numero: 1,
            resultadoEsperado: false,
        },
        {
            numero: 10,
            resultadoEsperado: true,
        },
        {
            numero: 11,
            resultadoEsperado: false,
        },
        {
            numero: 2,
            resultadoEsperado: true,
        },
        {
            numero: 9,
            resultadoEsperado: false,
        },
        {
            numero: 1234567890,
            resultadoEsperado: true,
        },
    ]

    console.log(`[Teste Par ou Ímpar] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Par ou Ímpar] Testando com o número:", teste.numero)
        console.log("[Teste Par ou Ímpar] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = parOuImpar(teste.numero)
        
        console.log("[Teste Par ou Ímpar] Resultado obtido:", resultadoObtido)
        console.log("[Teste Par ou Ímpar] Teste teve ", resultadoObtido === teste.resultadoEsperado ? "SUCESSO" : "FALHA")
        console.log("[Teste Par ou Ímpar] ---------------------------------")
    })
}

teste()
