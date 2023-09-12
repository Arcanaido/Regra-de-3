/**
 * Implementar um código que retorne a primeira letra que NÃO repete na palavra
 * 
 * Observações:
 * - Letras maiúsculas e minúsculas são consideradas diferentes!
 * 
 * Exemplos:
 * - Na palavra "Banana" a primeira letra que NÃO repete é "B"
 * - Na palavra "Julius" a primeria letra que NÃO repete é "J"
 * - Na palavra "MUSSUM" todas as letras repetem, logo o resultado é "" (em branco)
 * - Na palavra "PARAPPA" a primeira letra que NÃO repete é "R"
 */

/**
 * Retornar verdade se palavra1 e palavra2 são anagramas
 */
const primeiraLetraNaoRepetida = (palavra) => {
    // Implementar essa função
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavra: "ABCA",
            resultadoEsperado: "B",
        },
        {
            palavra: "BCABAC",
            resultadoEsperado: "",
        },
        {
            palavra: "BAC",
            resultadoEsperado: "B",
        },
        {
            palavra: "BananaOnBanana",
            resultadoEsperado: "O",
        },
        {
            palavra: "Rafael",
            resultadoEsperado: "R",
        },
        {
            palavra: "RafaelleafaR",
            resultadoEsperado: "",
        },
        {
            palavra: "What is the first non repeating character?",
            resultadoEsperado: "W",
        },
    ]

    console.log(`[Teste Letra NÃO Repetida] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Letra NÃO Repetida] Testando com a palavra:", teste.palavra)
        console.log("[Teste Letra NÃO Repetida] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = primeiraLetraNaoRepetida(teste.palavra)
        
        console.log("[Teste Letra NÃO Repetida] Resultado obtido:", resultadoObtido)
        console.log("[Teste Letra NÃO Repetida] Teste teve ", resultadoObtido === teste.resultadoEsperado ? "SUCESSO" : "FALHA")
        console.log("[Teste Letra NÃO Repetida] ---------------------------------")
    })
}

teste()
