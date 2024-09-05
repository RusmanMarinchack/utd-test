export default () => {
    const blockOne = document.querySelector('.js-task-one');

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function testOne() {
        arr.splice(0, 3);
        arr.splice(3, 0, 2, 2, 2);

        return arr;
    }

    testOne().forEach(num => {
        blockOne.innerHTML += `${num}. `
    });
}