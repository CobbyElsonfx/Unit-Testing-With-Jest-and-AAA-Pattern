const calculator = require("./calculator")

describe("Testing calculator",()=> {
    test("Testing add function", ()=>{
        const myCalculator = new calculator()
        expect(myCalculator.add(1,2)).toBe(3)
    })

    test ("Testing substract function",()=>{
        const myCalculator = new calculator()
        expect(myCalculator.subtract(2,1)).toBe(1)    
    })

    test("Testing multiply function",()=>{
        const myCalculator = new calculator()
        expect(myCalculator.multiply(2,2)).toBe(4)
    })

    test("Testing divide function",()=>{
        const myCalculator  = new calculator()
        expect(myCalculator.divide(4,2)).toBe(2)
    })

})