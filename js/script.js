"use strict"

const blockOne = document.querySelector('.block-one');
const blockTwo = document.querySelector('.block-two');
const blockThree = document.querySelector('.block-three');
const blockFour = document.querySelector('.block-four');
const blockFive = document.querySelector('.block-five');
const blockSix = document.querySelector('.block-six');
const blockSeven = document.querySelector('.block-seven');
const blockEight = document.querySelector('.block-eight');
const blockNine = document.querySelector('.block-nine');
const blockTen = document.querySelector('.block-ten');

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

// Function 5
function testFive(numbers) {
    let numbersArr = Array.from(numbers.toString(), Number)
    let numbersMax = numbersArr[0]
    let numbersMin = numbersArr[0]

    numbersArr.forEach(num => {
        if (numbersMax < num) numbersMax = num

        if (numbersMin > num) numbersMin = num
    });

    return `Більша цифра: ${numbersMax}, менша цифра: ${numbersMin}`
}

blockFive.innerHTML += testFive(12348)

// Function 6
function testSix(arr, target) {
    let startNumber = Infinity
    let index;

    arr.forEach((num, i) => {
        const difference = Math.abs(num - target)

        if (difference < startNumber) {
            startNumber = difference
            index = i
        }
    })

    return index
}

blockSix.innerHTML += testSix([1,2,3,4,6], 10)

// Function 7
function testSeven(number) {
    const numberString = number.toString();

    for (let i = 0; i < numberString.length; i++) {
        if (numberString.indexOf(numberString[i]) !== numberString.lastIndexOf(numberString[i])) {
            return true;
        }
    }
    return false;
}
blockSeven.innerHTML += testSeven(123941)

// Function 8
function testEight(a, b) {
    let arrs = [];

    // We create a multidimensional array 10 by 10.
    for (let i= 0; i < 10; i++) {
        let arr = []

        for (let j= 0; j < 10; j++) {
            arr.push(Math.floor(Math.random() * (b - a + 1)) + a)
        }

        // We add the result to the array
        arrs.push(arr)
    }

    // We are looking for the row with the smallest element.
    let minRowIndex = 0
    let minRowNumber = arrs[0][0]

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arrs[i][j] < minRowNumber) {
                minRowIndex = i
            }
        }
    }

    // We swap the first line and the line with the smallest element
    arrs[0] = arrs[minRowIndex]
    arrs[minRowIndex] = arrs[0]

    return `Масив з мінімальним числом, arr - ${arrs[minRowIndex]}`
}

blockEight.innerHTML += testEight(1, 100)

// Function 9
function testNine(directions) {
    let time = 90

    // We will check whether there will be enough time.
    directions.forEach(direction => {
        if (direction === 'північ' || direction === 'південь' || direction === 'захід' || direction === 'схід') {
            time -= 10
        } else {
            console.log('Не відомий напрямок.')
        }
    })

    // If there is not enough time, we issue false.
    if (time <= 0) {
        return false
    }

    return true
}

blockNine.innerHTML += testNine(['північ', 'південь', 'захід', 'захід'])

// Function 10
function testTen(arr) {
    let a
    let arrNew = []

    arr.forEach(item => {
        if (typeof item === 'string') {
            arrNew.push(item)
        } else if (typeof item === 'number') {
            arrNew.unshift(item)
        }
    })

    arrNew.forEach(item => {
        arrNew.forEach((item2, index2) => {
            if (index2 < arr.length - 1 && arrNew[index2] > arrNew[index2 + 1]) {
                a = item2
                arrNew[index2] = arrNew[index2 + 1]
                arrNew[index2 + 1] = a
            }
        })
    })

    return arrNew
}

const result = testTen([1, 2, 1, 8, 'r', 'a', 'a', 'a', 'p', 7, 10]).join()

blockTen.innerHTML += `${result}`