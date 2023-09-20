/** [Médio+]
 * Implementar um código que dada uma palavra, retornar a maior e menor "letra".
 * 
 * Observações:
 * - Considere o charCodeAt() como o valor da letra.
 */

/**
 * Retornar a menor letra da palavra.
 */
const minChar = (palavra) => {
    // Implementar essa função
    let menorLetra = 100000
    
    for ( let i = 0; i < palavra.length; i++ ){
        if ( palavra[i].charCodeAt() < menorLetra ) {
            menorLetra = palavra[i].charCodeAt() // talvez de merda aqui
        }
    }

    return menorLetra

}
    

/**
 * Retornar a maior letra da palavra.
 */
const maxChar = (palavra) => {
    // Implementar essa função
    let maiorLetra = 0
    
    for ( let i = 0; i < palavra.length; i++ ){
        if ( palavra[i].charCodeAt() > maiorLetra ){
            maiorLetra = palavra [i].charCodeAt()
        }
    }  
    
    return maiorLetra

}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavra: "Teste",
            resultadoEsperadoMin: "T".charCodeAt(0),
            resultadoEsperadoMax: "t".charCodeAt(0),
        },
        {
            palavra: "TESTE",
            resultadoEsperadoMin: "E".charCodeAt(0),
            resultadoEsperadoMax: "T".charCodeAt(0),
        },
        {
            palavra: "teste",
            resultadoEsperadoMin: "e".charCodeAt(0),
            resultadoEsperadoMax: "t".charCodeAt(0),
        },
        {
            palavra: "TeStE",
            resultadoEsperadoMin: "E".charCodeAt(0),
            resultadoEsperadoMax: "t".charCodeAt(0),
        },
        {
            palavra: "abcABC",
            resultadoEsperadoMin: "A".charCodeAt(0),
            resultadoEsperadoMax: "a".charCodeAt(0),
        },
    ]

    console.log(`[Teste Min - Char] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Min - Char] Testando MIN com a palavra:", teste.palavra)
        console.log("[Teste Min - Char] Resultado esperado:", teste.resultadoEsperadoMin)
        
        const resultadoObtido = minChar(teste.palavra)
        
        console.log("[Teste Min - Char] Resultado obtido:", resultadoObtido)
        console.log("[Teste Min - Char] Teste teve ", resultadoObtido === teste.resultadoEsperadoMin ? "SUCESSO" : "FALHA")
        console.log("[Teste Min - Char] ---------------------------------")
    })

    console.log(`[Teste Min - Char] ------------------------------`)
    console.log(`[Teste Max - Char] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Max - Char] Testando MAX com a palavra:", teste.palavra)
        console.log("[Teste Max - Char] Resultado esperado:", teste.resultadoEsperadoMax)
        
        const resultadoObtido = maxChar(teste.palavra)
        
        console.log("[Teste Max - Char] Resultado obtido:", resultadoObtido)
        console.log("[Teste Max - Char] Teste teve ", resultadoObtido === teste.resultadoEsperadoMax ? "SUCESSO" : "FALHA")
        console.log("[Teste Max - Char] ---------------------------------")
    })
}

teste()
