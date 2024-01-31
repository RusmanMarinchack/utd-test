"use strict"

const blockOne = document.querySelector('.block-one');
const blockTwo = document.querySelector('.block-two');
const blockThree = document.querySelector('.block-three');
const blockFour = document.querySelector('.block-four');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function 1
function testOne() {
    arr.splice(0, 3);
    arr.splice(3, 0, 2, 2, 2);

    return arr;
}

testOne().forEach(num => {
    blockOne.innerHTML += `${num}. `
});

// Function 2
function testTwo() {
    arr = arr.map(num => {
        return Math.pow(num, 2)
    })

    return arr;
}

testTwo().forEach(num => {
    blockTwo.innerHTML += `${num}. `
});

// Function 3
function testThree(x, y) {
    const arrRandomNumbers = [];

    for (let i = 0; i < 10; i++) {
        arrRandomNumbers.push((Math.round(Math.random() * (x - y) + y)));
    }

    return arrRandomNumbers;
}
testThree(100, 1).forEach(num => {
    blockThree.innerHTML += `${num}. `
})

// Function 4
function testFour(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0)
        }

        result.push(row)
    }

    return result
}

testFour(5).forEach(arr => {
    arr.forEach((num, index) => {
        const br = (index + 1) === arr.length ? "<br>" : "";

        blockFour.innerHTML += `${num} ${br}`
    });
});
