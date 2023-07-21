const reverseString = require("./reverseString")

test("Should reverse the string",()=>{
    const myString = "hello"
    expect(reverseString(myString)).toBe("olleh")
})