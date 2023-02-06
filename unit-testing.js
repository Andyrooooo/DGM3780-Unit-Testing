/* let number = Math.trunc(Math.random() * 15)
console.log(number)

let someArray = []

const arrayCreator = (number) => {
    for (let i = 0; i <= number; i++) {
        someArray.push(i)
    }
}
arrayCreator(number - 1)
console.log(someArray) */


    let number = 16 //Math.trunc(Math.random() * 30) //let number = 15
    //console.log(number)

    let someArray = []
    let fizz = "fizz"
    let buzz = "buzz"
    let fizzbuzz = "fizzBuzz"

    const fizzBuzz = (number) => {
        for (let i = 0; i <= number; i++) {
             if (i % 3 === 0) {
                someArray.pop()
                someArray.push(fizz)
            } if (i % 5 === 0) {
                someArray.pop()
                someArray.push(buzz)
            }  if (i % 15 === 0) {
                someArray.pop()
                someArray.push(fizzbuzz)
            }   else {
                someArray.push(i)
            }
        }
    }
    fizzBuzz(number)
    console.log(someArray)

    /* if (i % 5 === 0) {
                someArray.pop()
                someArray.push(buzz)
            }
            if (i % 15 === 0) {
                someArray.pop()
                someArray.push(fizzBuzz)
            } */