const randomNumber = () => Math.floor(1 + Math.random() * 100)

const main = (params) => {
  const numbers = []
  for (let i = 0; i < 100; i++) {
    const n = randomNumber()
    numbers.push(n)
  }
  let min = 200
  let max = 0
  numbers.forEach((n) => {
    if (n < min) {
      min = n
    } 
    if (n > max) {
      max = n
    }
  })

  return [min,max]
}
