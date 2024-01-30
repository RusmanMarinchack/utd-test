"use strict"

const blockOne = document.querySelector('.block-one');
const blockTwo = document.querySelector('.block-two');

// Task 1
function taskOne(N) {

// for
    for (let i = 0; i < N; i++) {
        const br = i + 1 === Number(N) ? "<br>" : "";

        blockOne.innerHTML += `
<div>1. Я показую повідомлення ${i + 1} раз. (for)</div>
${br}
`;
    }

// While
    let i = 0;

    while (i < N) {
        const br = i + 1 === Number(N) ? "<br>" : "";

        blockOne.innerHTML += `
<div>2. Я показую повідомлення ${i + 1} раз. (while)</div>
${br}
`;
        i++
    }

// Do while
    let num  = 0;

    do {
        const br = num + 1 === Number(N) ? "<br>" : "";

        blockOne.innerHTML += `
<div>3. Я показую повідомлення ${num + 1} раз. (do while)</div>
${br}
`;
        num++;
    } while (num < N);
}
taskOne(prompt("Скільки разів вивести повідомлення?"));

// Task 2
function taskTwo(num) {
    let listFibonacci = [0, 1];

    if (num === 1) {
        return listFibonacci.slice(0, num + 1);
    }

    for (let i = 0; i < num; i++) {
        listFibonacci.push(listFibonacci[listFibonacci.length - 1] + listFibonacci[listFibonacci.length - 2]);
    }

    return listFibonacci
}
taskTwo(prompt('Ведіть число не менше 1.')).forEach(n => {
    blockTwo.innerHTML += `${n}. `
});