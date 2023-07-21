const capitalize = require("./capitalize")

test("Capitalize the first letter", ()=>{
    const myWord = "january"
    expect(capitalize(myWord)).toBe("January")

})