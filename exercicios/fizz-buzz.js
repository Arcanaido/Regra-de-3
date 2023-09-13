/** [Fácil]
 * Implementar um código que percorra os números de 1 até o número dado e conte quantos desses são
 * divisíveis por 3, quantos são divisíveis por 5 e quantos são divisíveis por 3 e 5 ao mesmo tempo
 * 
 * Observações:
 * - O número recebido sempre será maior que 1
 * - O nome deste problema é "FizzBuzz", pois tradicionalmente se imprime "Fizz" (3), "Buzz" (5) ou "FizzBuzz" (3 e 5)
 */

/**
 * Retornar verdade se numero for par, caso contrário retornar falso
 */
const fizzbuzz = ( numeroFinal ) => {
    
    let fizzCount = 0
    let buzzCount = 0
    let fizzBuzzCount = 0


        for ( let i = 1; i <= numeroFinal; i++ ){
            if ( i % 3 === 0 && i % 5 === 0 ) {
                fizzBuzzCount++
            } else if ( i % 3 === 0 ) {
                fizzCount ++
            } else if ( i % 5 === 0 ) {
                buzzCount ++
            }
        }
   
       
    
    return{
        fizz: fizzCount,
        buzz: buzzCount,
        fizzBuzz: fizzBuzzCount,
    }
}


/**
 * Função para testar o resultado das implementações.
 */
const teste = () => {
    const casosDeTeste = [
        {
            numero: 3,
            resultadoEsperado: {
                fizz: 1,
                buzz: 0,
                fizzBuzz: 0,
            },
        },
        {
            numero: 6,
            resultadoEsperado: {
                fizz: 2,
                buzz: 1,
                fizzBuzz: 0,
            },
        },
        {
            numero: 15,
            resultadoEsperado: {
                fizz: 4,
                buzz: 2,
                fizzBuzz: 1,
            },
        },
        {
            numero: 32,
            resultadoEsperado: {
                fizz: 8,
                buzz: 4,
                fizzBuzz: 2,
            },
        },
        {
            numero: 33,
            resultadoEsperado: {
                fizz: 9,
                buzz: 4,
                fizzBuzz: 2,
            },
        },
    ]

    console.log(`[Teste FizzBuzz] Executando ${casosDeTeste.length} testes:`)

    casosDeTeste.forEach((teste) => {
        console.log("[Teste FizzBuzz] Testando com o número:", teste.numero)
        console.log("[Teste FizzBuzz] Resultado esperado:", teste.resultadoEsperado)
        
        const resultadoObtido = fizzbuzz(teste.numero)
        
        console.log("[Teste FizzBuzz] Resultado obtido:", resultadoObtido)
        const resultadoTeste = resultadoObtido.fizz === teste.resultadoEsperado.fizz && resultadoObtido.buzz === teste.resultadoEsperado.buzz && resultadoObtido.fizzBuzz === teste.resultadoEsperado.fizzBuzz
        console.log("[Teste FizzBuzz] Teste teve ", resultadoTeste ? "SUCESSO" : "FALHA")
        console.log("[Teste FizzBuzz] ---------------------------------")
    })
}

teste()
