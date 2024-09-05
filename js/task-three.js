export default () => {
    const blockThree = document.querySelector('.js-task-three');

    function testThree(x, y) {
        const arrRandomNumbers = [];

        for (let i = 0; i < 10; i++) {
            arrRandomNumbers.push(Math.floor(Math.random() * (y - x + 1) + x));
        }

        return arrRandomNumbers;
    }
    testThree(5, 10).sort((a, b) => a - b).forEach(num => {
        blockThree.innerHTML += `${num}. `
    })
}