export default () => {
    const blockFour = document.querySelector('.js-task-four');

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
}