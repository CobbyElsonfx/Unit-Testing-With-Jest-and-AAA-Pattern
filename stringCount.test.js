const stringLength = require('./stringCount.js')

test("Test length should be 4", ()=> {
    const myname = "love"
    expect(stringLength(myname)).toBe(4)
})

test("Testing with string greater than 10",()=> {
    const longName = "hellowmyworld";
    expect(()=>stringLength(longName)).toThrow(Error)
} )

test("Testing with string less  than 1",()=> {
    const shortName = "";
    expect(()=>stringLength(longName)).toThrow(Error)
} )
