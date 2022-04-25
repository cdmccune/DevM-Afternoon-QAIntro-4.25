const {returnTwo, add, greeting, subtract, multiply, divide} = require('./functions')

test("should return 2", () => {
    let returned = returnTwo()
    console.log(returned)
    expect(returned).toBe(2)
})

test("Should greet our name", () => {
    expect(greeting('Curt')).toBe("Hello, Curt")
})

describe('Math Functions', () => {
    
    test('Should add these together', () => {
        expect(add(5,9)).toBe(14)
    })

    test("add wrong number of params", () => {
        expect(add(1,2,3,4)).toBe(10)
    })
    
    test('Should subtract these', () => {
        expect(subtract(5,1)).toBe(4)
    })

    test('Should divide these', () => {
        expect(divide(10,2)).toBe(5)
    })
    
    test('Should multiply these together', () => {
        expect(multiply("5",9)).toBe(45)
    })
})
