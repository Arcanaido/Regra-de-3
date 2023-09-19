/** [Médio]
 * Implementar um código que retorna verdadeiro se a palavra dada for um Palíndromo
 * 
 * Observações:
 * - Palíndromos são palavras "espelhadas": a primeira metade da palavra é igual ao inverso da segunda metade
 * - Você pode pensar também como "o inverso da primeira metade é igual a segunda metade"
 * - Por exemplo: "ovo" é um palíndromo pois "ov" (começo) é igual ao inveso de "vo" (final) -> "ov" = "vo" ao contrário, que é "ov"
 * - Mesmo exemplo, mas com o segundo pensamento: "ovo" temos "ov" como começo e "vo" como final. Invertendo o começo: "vo" = "vo"
 * - Por exemplo: "reviver" é um palíndromo pois "ov" (começo) é igual ao inveso de "vo" (final) -> "ov" = "vo" ao contrário, que é "ov"
 * - Se a palavra tem um número ÍMPAR de letras, a letra "do meio" faz parte de ambas metades! ("reviver" -> 7 letras, primeira metade = "revi", segunda metade = "iver")
 *    - Dica: se a letra do meio pertence a ambas partes, será se ela pode ser ignorada? ;)
 * - Se a palavra tem um número PAR de letras, ela pode ser dividida igualmente! ("mussum" -> 6 letras, primeira metade = "mus", segunda metade = "sum")
 * - Letras minúsculas são diferentes de maiúsculas ("a" não é o mesmo que "A" - então "Mussum" não é palíndromo pois "M" é diferente de "m")
 */

/**
 * Retornar verdade se palavra é um Palíndromo
 */
const palindromo = (palavra) => {
    let len = Math.floor(palavra.length / 2);
    for (let i = 0; i < len; i++) {
      if (palavra[i] !== palavra[palavra.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavra: "MassaM",
            resultadoEsperado: true,
        },
        {
            palavra: "RENNER",
            resultadoEsperado: true,
        },
        {
            palavra: "Mussum",
            resultadoEsperado: false,
        },
        {
            palavra: "MUSSUM",
            resultadoEsperado: true,
        },
        {
            palavra: "mussum",
            resultadoEsperado: true,
        },
        {
            palavra: "hanah",
            resultadoEsperado: true,
        },
        {
            palavra: "Hanah",
            resultadoEsperado: false,
        },
        {
            palavra: "osso",
            resultadoEsperado: true,
        },
        {
            palavra: "Ovo",
            resultadoEsperado: false,
        },
        {
            palavra: "ovo",
            resultadoEsperado: true,
        },
        {
            palavra: "Palavra",
            resultadoEsperado: false,
        },
        {
            palavra: "Anagrama",
            resultadoEsperado: false,
        },
    ]

    console.log(`[Teste Palíndromo] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Palíndromo] Testando com a palavra:", teste.palavra)
        console.log("[Teste Palíndromo] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = palindromo(teste.palavra)
        
        console.log("[Teste Palíndromo] Resultado obtido:", resultadoObtido)
        console.log("[Teste Palíndromo] Teste teve ", resultadoObtido === teste.resultadoEsperado ? "SUCESSO" : "FALHA")
        console.log("[Teste Palíndromo] ---------------------------------")
    })
}

teste()
