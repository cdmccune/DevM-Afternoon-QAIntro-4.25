module.exports = {
    returnTwo: () => {return 2},
    greeting: (name) => {return `Hello, ${name}`},
    add: adds = (...numbers) => {
        let result = 0
        for (i=0; i<numbers.length; i++){
            result+=numbers[i]
        }
        return result
    },
    subtract: (num1, num2) => {return Number(num1) - Number(num2)},
    multiply: (num1, num2) => {return Number(num1)*Number(num2)},
    divide: (num1, num2) => {return Number(num1)/Number(num2)}
}
