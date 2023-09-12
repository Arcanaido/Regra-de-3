/** [Fácil]
 * Implementar um código que dada duas palavras, ele retorne verdade se ambas tiverem as mesmas letras.
 * 
 * Observações:
 * - Essas palavras são chamadas de anagramas
 * - Por exemplo: "Rafael" e "LafaRe" são anagramas
 * - Por exemplo: "Bacana" e "Nabaca" NÃO são anagramas!
 * - Letras minúsculas são diferentes de maiúsculas ("a" não é o mesmo que "A")
 */

/**
 * Retornar verdade se palavra1 e palavra2 são anagramas
 */
const anagrama = (palavra1, palavra2) => {
    // Implementar essa função
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavras: ["Rafael", "leafRa"],
            resultadoEsperado: true,
        },
        {
            palavras: ["AbcD", "DcbA"],
            resultadoEsperado: true,
        },
        {
            palavras: ["Abcd", "Dbca"],
            resultadoEsperado: false,
        },
        {
            palavras: ["Anagram", "Palindrome"],
            resultadoEsperado: false,
        },
        {
            palavras: ["CaseSenstive", "Casesensitive"],
            resultadoEsperado: false,
        },
        {
            palavras: ["", "NotEmpty"],
            resultadoEsperado: false,
        },
        {
            palavras: ["NotEmpty", ""],
            resultadoEsperado: false,
        },
        {
            palavras: ["AAaaBBbb", "BBaaAAbbAAbbBBaa"],
            resultadoEsperado: false,
        },
        {
            palavras: ["BBaaAAbbAAbbBBaa", "AAaaBBbb"],
            resultadoEsperado: false,
        },
        {
            palavras: ["AAaaBBbbC", "BBaaAAbbAAbbBBaa"],
            resultadoEsperado: false,
        },
        {
            palavras: ["BBaaAAbbAAbbBBaa", "AAaaBBbbC"],
            resultadoEsperado: false,
        },
    ]

    console.log(`[Teste Anagrama] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Anagrama] Testando com as palavras:", teste.palavras)
        console.log("[Teste Anagrama] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = anagrama(teste.palavras[0], teste.palavras[1])
        
        console.log("[Teste Anagrama] Resultado obtido:", resultadoObtido)
        console.log("[Teste Anagrama] Teste teve ", resultadoObtido === teste.resultadoEsperado ? "SUCESSO" : "FALHA")
        console.log("[Teste Anagrama] ---------------------------------")
    })
}

teste()
