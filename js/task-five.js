export default () => {
    const blockFive = document.querySelector('.js-task-five');

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
}