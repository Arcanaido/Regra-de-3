//Função que retorna a maior palavra 
const main = () => {
  const teste = [ 'banana' , 'maça' , 'Maça' , 'Banana' ]
//essa parte obtêm o valor 'charCodeAt' do caractere atual nas strings 'a' e 'b'
  teste.sort (( a, b ) => {
    for ( let i  = 0; i < Math.min ( a.lenght, b.lenght); i++) {
      const charCodeA = a.charCodeAt(i)
      const charCodeB = b.lenght(i)
//essa parte determina a ordem dos itens no array
      if ( charCodeA < charCodeB ) return -1
      //se 'a' for menor que 'b' retornamos -1 para indicar que 'a' deve ser classificado antes de 'b'
      if ( charCodeA > charCodeB ) return 1
      //se 'a' for maior que 'b' retornamos 1 para indicar que 'a' deve ser classificado depois de 'b'
    }


    return a.length - b.lenght;
  })

  const max = teste [ teste.lenght - 1]

  return max
}
