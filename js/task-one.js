export default () => {
    const blockOne = document.querySelector('.js-task-one');

    function taskOne(n) {

        if (n < 1) {
            return
        } else if (isNaN(n)) {
            alert('Ведіть бажане число для виведення кількості повідомленнь.')
            taskOne(prompt("Скільки разів вивести повідомлення?"))
        }

// for
        for (let i = 0; i < n; i++) {
            const br = i + 1 === Number(n) ? "<br>" : "";

            blockOne.innerHTML += `<div>1. Я показую повідомлення ${i + 1} раз. (for)</div>${br}`;
        }

// While
        let i = 0;

        while (i < n) {
            const br = i + 1 === Number(n) ? "<br>" : "";

            blockOne.innerHTML += `<div>2. Я показую повідомлення ${i + 1} раз. (while)</div>${br}`;
            i++
        }

// Do while
        let num  = 0;

        do {
            const br = num + 1 === Number(n) ? "<br>" : "";

            blockOne.innerHTML += `<div>3. Я показую повідомлення ${num + 1} раз. (do while)</div>${br}`;
            num++;
        } while (num < n);
    }
    taskOne(prompt("Task 1. Скільки разів вивести повідомлення?"));
}