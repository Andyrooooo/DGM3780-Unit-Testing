/* test('number splits into array length of 15', () => {
    let number = 15 
    console.log(number)

    let someArray = []

    const arrayCreator = (number) => {
        for (let i = 0; i <= number; i++) {
            someArray.push(i)
        }
    }
    arrayCreator(number - 1)
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]).toEqual(
        expect.arrayContaining(someArray))
}) */




test('number splits into array length of 15 the adds fizz at multiples of 3, buzz at multiples of 5 and fizzbuzz at multiples of both', () => {
    //console.log(number)

    let someArray = []

    const fizzBuzz = () => {
        for (let i = 1; i <= 15; i++) {
             if (i % 3 === 0) {
                someArray.push("fizz")
            } else if (i % 5 === 0) {
                someArray.push("buzz")
            } else if (i % 15 === 0) {
                someArray.push("fizzBuzz")
            }   else {
                someArray.push(i)
            }
        }
    }
    fizzBuzz()
    expect([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz']).toEqual(
        expect.arrayContaining(someArray))
})
