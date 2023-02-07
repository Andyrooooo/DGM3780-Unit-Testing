//----------------------------- fizzbuzz array test part 1--------------------------------------

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
})


// ------------------------------fizzbuzz array test part 2--------------------------------------

test('number splits into array length of 15 the adds fizz at multiples of 3, buzz at multiples of 5 and fizzbuzz at multiples of both', () => {

    let someArray = []

    const fizzBuzz = () => {
        for (let i = 1; i <= 15; i++) {
            if (i % 15 === 0) {
                someArray.push("fizzBuzz")
            } else if (i % 3 === 0) {
                someArray.push("fizz")
            } else if (i % 5 === 0) {
                someArray.push("buzz")
            } else {
                someArray.push(i)
            }
        }
    }
    fizzBuzz()
    expect([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz']).toEqual(
        expect.arrayContaining(someArray))
}) */


// -----------------------------------addition test #2---------------------------------------

/* test('add a, b, and c together', () => {
    function plus(a, b, c) {
        return a + b + c
    }

    expect(plus(10, 57, 120)).toBe(187)
})
 */


// ------------------------------------subtraction test #3----------------------------------------

/* test('will add the current year and your birthyear to give us your age', () => {
    function myAge(currentYear, ageBorn) {
        return currentYear - ageBorn
    }

    expect(myAge(2023, 1985)).toBe(38)
}) */



// ------------------------------------multiplication test #4----------------------------------------

/* test('tells you how many pieces of fruit you need to make a juice', () => {
    function cutFruitPieces(fruit) {
        return fruit * 4
    }
    
    function fruitProcessor(oranges) {
        const orangePieces = cutFruitPieces(oranges)
    
        let juice = orangePieces
        return juice
    }

    expect(fruitProcessor(5)).toBe(20)
})
 */


// ------------------------------------division test #5----------------------------------------

/* test('divide how many nails you have by how many each board needs to get how many boards we can put together', () => {
    function buildMyTreehouse(nailsIHave, nailsPerboard) {
        return nailsIHave / nailsPerboard
    }

    expect(buildMyTreehouse(250, 5)).toBe(50)
}) */



// ------------------------------------exponentiation test #6----------------------------------------

/* test('calculate BMI', () => {
    function myBmi(mass, height) {
        return (mass / height ** 2)
        //return Math.round(mass / height ** 2)
    }

    expect(myBmi(73, 1.75)).toBe(23.836734693877553)
}) */


// ------------------------------------room size test using "is not" (!==) #7----------------------------------------

/* test('Tells you the size of the room and console.logs with "its not going to fit"', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    function roomSize(width, height) {
        let room = width * height
            if (room === 100) {
                console.log('The bed will fit')
            } else if (room !== 100) {
                console.log('Its not going to fit')
            } 
        return room
    }

    expect(roomSize(20, 10)).toBe(200);
    expect(consoleSpy).toHaveBeenCalledWith('Its not going to fit');
}) */




// ------------------------------------reverse string function #9----------------------------------------
/* test('function will reverse function to be "olleh" ', () => {

    function reverse(word) {
        let hello = word
    
        let reverseOrder = ''
    
        for (let i = hello.length - 1; i >= 0; i--) {
            reverseOrder += hello[i]
        }
        return reverseOrder
    }

expect(reverse("hello")).toMatch(/olleh/);
}) */


// ------------------------------------uppercase string function #10----------------------------------------
test('function to change string to uppercase ', () => {
    function upperCase(word) {
        let newWord = word

        let upper = newWord.toUpperCase()

        return upper
    }

expect(upperCase("hello")).toMatch(/HELLO/);

