const reverseString = (string)=>{
    const reversedStr = string.toLowerCase()
    .split("")
    .reverse()
    .join("")

    return reversedStr

}


module.exports = reverseString