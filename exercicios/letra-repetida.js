/** [Fácil]
 * Implementar um código que retorne a primeira letra que repete na palavra
 * 
 * Observações:
 * - Letras maiúsculas e minúsculas são consideradas diferentes!
 * 
 * Exemplos:
 * - Na palavra "Banana" a primeira letra que repete é "a"
 * - Na palavra "Julius" a primeria letra que repete é "u"
 * - Na palavra "MUSSUM" a primeria letra que repete é "M"
 * - Na palavra "Parar" a primeria letra que repete é "a"
 * - Na palavra "Ana" nenhuma letra se repete, então o resultado é "" (em branco)
 */

/**
 * Retornar verdade se palavra1 e palavra2 são anagramas
 */
const primeiraLetraRepetida = (palavra) => {
    // Implementar essa função
}

/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            palavra: "Massa",
            resultadoEsperado: "a",
        },
        {
            palavra: "Kikkoman",
            resultadoEsperado: "k",
        },
        {
            palavra: "Guinness",
            resultadoEsperado: "n",
        },
        {
            palavra: "Brasil",
            resultadoEsperado: "",
        },
        {
            palavra: "Leite",
            resultadoEsperado: "e",
        },
        {
            palavra: "Remédio",
            resultadoEsperado: "",
        },
        {
            palavra: "Rafael",
            resultadoEsperado: "a",
        },
        {
            palavra: "Nihillus",
            resultadoEsperado: "i",
        },
        {
            palavra: "Ouvido",
            resultadoEsperado: "",
        },
        {
            palavra: "ouvido",
            resultadoEsperado: "o",
        },
        {
            palavra: "Televisão",
            resultadoEsperado: "e",
        },
    ]

    console.log(`[Teste Letra Repetida] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste Letra Repetida] Testando com a palavra:", teste.palavra)
        console.log("[Teste Letra Repetida] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = primeiraLetraRepetida(teste.palavra)
        
        console.log("[Teste Letra Repetida] Resultado obtido:", resultadoObtido)
        console.log("[Teste Letra Repetida] Teste teve ", resultadoObtido === teste.resultadoEsperado ? "SUCESSO" : "FALHA")
        console.log("[Teste Letra Repetida] ---------------------------------")
    })
}

teste()
