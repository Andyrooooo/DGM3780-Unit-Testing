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


    //let number = 15 //Math.trunc(Math.random() * 30) //let number = 15
    //console.log(number)
    let someArray = []

    const fizzBuzz = () => {
        for (let i = 1; i <= 15; i++) {
            if (i % 15 === 0) {
                someArray.push("fizzBuzz")
            } else if (i % 3 === 0) {
                someArray.push("fizz")
            } else if (i % 5 === 0) {
                someArray.push("buzz")
            }  else {
                someArray.push(i)
            }
        }
    }
    fizzBuzz()
    console.log(i)

    


    //console.log(someArray2)

    /* if (i % 5 === 0) {
                someArray.pop()
                someArray.push(buzz)
            }
            if (i % 15 === 0) {
                someArray.pop()
                someArray.push(fizzBuzz)
            } */