const stringLength = require('./stringCount.js')

// // test("Test length should be 4", ()=> {
// //     const myname = "love"
// //     expect(stringLength(myname)).toBe(4)
// // })

test("Testing with string greater than 10",()=> {
    const longName = "dafasdfasdfafd";
    expect(()=>stringLength(longName)).toThrow(Error)
} )

// test("Testing with string greater than 10",()=> {
//     const longName = "helloadafsdaf";
//     expect(()=>stringLength(longName)).toThrow(Error)
// } )

// stringLength.test.js
// const stringLength = require('./stringCount');

// test("Test length should be correct", () => {
//   const string = "Hello";
//   expect(stringLength(string)).toBe(5);
// });

// test("Test string length less than 1 should throw an error", () => {
//   const string = "";
//   expect(() => stringLength(string)).toThrow(Error);
// });

// test("Test string length greater than 10 should throw an error", () => {
//   const string = "ThisIsALongString";
//   expect(() => stringLength(string)).toThrow(Error);
// });

















































































































































































































































































































































































































































































