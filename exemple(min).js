
const randomNum = () => Math.floor ( 1 + Math.random() * 100)

const main = (params) => {
  
  const numbers = []

  for ( let i = 0; i < 100; i++ ) {
    const n = randomNum()
    numbers.push(n)
  }

  
let min = 200
  
numbers.forEach((n) => {

  if ( n < min ) {
    min = n
  }
})

const soma = numbers.reduce ((accumulator, currentValue) => accumulator + currentValue, 0)

const media = soma / numbers.length
  
return [min,media]
}
