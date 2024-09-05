export default () => {
    const blockTwo = document.querySelector('.js-task-two');

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function testTwo() {
        arr = arr.map(num => {
            return Math.pow(num, 2)
        })

        return arr;
    }

    testTwo().forEach(num => {
        blockTwo.innerHTML += `${num}. `
    });
}