/* ------------------------------------------------------------------------ scratch paper -------------------------------------------------------------------------- */

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
 /*    let someArray = []

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
   */

/* function roomSize(width, height) {
    let room = width * height
        if (room === 100) {
            console.log("The bed will fit")
        } else if (room !== 100) {
            console.log("It's not going to fit")
        } 
    return room
}
console.log(roomSize(20, 10)) */
/* 
function reverse(word) {
    let hello = word

    let reverseOrder = ""

    for (let i = hello.length - 1; i >= 0; i--) {
        reverseOrder += hello[i]
    }
    return reverseOrder
} */
//console.log(reverse("hello"))


/* function upperCase(word) {
    let newWord = word

    let upper = newWord.toUpperCase()

    return upper
}

console.log(upperCase("hello")) */


/* function vowel(word) {
    
    word = word.replace(/a/g,'')
    word = word.replace(/e/g,'')
    word = word.replace(/i/g,'')
    word = word.replace(/o/g,'')
    word = word.replace(/u/g,'')

    return word
}

console.log(vowel("hey how is it going")) */

/* 

let words = "helloooo"
words.replace('e', '')
words = words.replace(/o/g, '')
console.log(words) */


/* const myContact = {
    fullName: "Andrew",
    phone: 1234567890,
    age: 45
}

function validateName(myContact, fullName) {

    let specialKey = myContact.fullName.toLowerCase()
    let myString = fullName.toLowerCase()

    if (specialKey === myString) {
        console.log("yes")
    } else {
        console.log("no")
    }

    return myString
}

console.log(validateName(myContact, "Andrew")) */


// In here I was trying to turn the keys into an array to which I could then target
// "fullName" and see if it would match the string fullName I would input when I 
// would console.log
/* const myContact = {
    fullName: "Andrew",
    phone: 1234567890,
    age: 45
}

function validateName(myContact, fullName) {

    keysToArrays = Object.keys.map()

    console.log(keysToArrays)

    //let specialKey = myContact.fullName.toLowerCase()
    //let myString = fullName.toLowerCase()

    if (specialKey === myString) {
        console.log("yes")
    } else {
        console.log("no")
    }

    return myString
}

console.log(validateName(myContact, "fullName")) */


/* function arrayCalculator(theArray) {
    console.log(theArray)

    let arrayAdded = theArray.reduce((a, b) => a + b)
    
    return arrayAdded
}

console.log(arrayCalculator([1, 8, 20])) */