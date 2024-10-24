const sum = (num1,num2) => {
    return num1 + num2
}

const diff = (num1,num2) => {
    return num1 - num2
}

const mul = (num1,num2) => {
    return num1 * num2
}



// common js module how to export
module.exports = {sum, diff, mul}

// use of ES6 sntax
// export {sum, diff, mul}