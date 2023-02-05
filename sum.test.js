test('number splits into array length of 15', () => {
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
})