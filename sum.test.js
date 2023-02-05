const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

const arr = require('./arrayCreator')

test('takes number and creates array', () => {
    expect(arrayCreator(number)).toBe(15);
})