export default () => {
    const blockTwo = document.querySelector('.js-task-two');

    function taskTwo(num) {
        const listFibonacci = [0, 1];

        if (num < 1) {
            return listFibonacci.slice(0, 1);
        } else if (isNaN(num)) {
            alert('Ведіть корекне число.')
            return taskTwo(prompt('Task 2. Ведіть бажане вами число.'))
        }

        for (let i = 1; i < num; i++) {
            listFibonacci.push(listFibonacci[listFibonacci.length - 1] + listFibonacci[listFibonacci.length - 2]);
        }

        return listFibonacci;
    }
    taskTwo(prompt('Task 2. Ведіть бажане вами число.')).forEach(n => {
        blockTwo.innerHTML += `${n}. `
    });
}