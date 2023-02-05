/* let number = Math.trunc(Math.random() * 15)
console.log(number) */

let someArray = []

const arrayCreator = (number) => {
    for (let i = 0; i <= number; i++) {
        someArray.push(i)
    }
}
arrayCreator(15)
console.log(someArray)

module.exports = arrayCreator