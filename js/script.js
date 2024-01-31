"use strict"

const blockOne = document.querySelector('.block-one');
const blockTwo = document.querySelector('.block-two');
const blockThree = document.querySelector('.block-three');

// Function 1
function test1(a, b, c, e) {
    if (e) {
        return a + b + c + e
    } else if (c) {
        return a * b * c
    } else if (b) {
        return a - b
    } else {
        return a
    }
}
blockOne.innerHTML = `1. Result: ${test1(2, 4, 10, 8)}`;

// Function 2
function test2(...list) {
    let sumNum = 0;

    if(list.length === 0) {
        return 0
    }

    list.forEach(num => {
        sumNum += num
    })

    return sumNum / list.length
}
blockTwo.innerHTML = `2. Result: ${test2(2, 10, 8, 10, 99)}`;

// Function 3
function calc(a, b) {
    return Math.pow(a, b)
}

function nextStep(fun, a) {
    return function (c) {
        return fun(a, c)
    }
}

const thirdStep = nextStep(calc, 2)

blockThree.innerHTML = `3. Result: ${thirdStep(10)}`;
