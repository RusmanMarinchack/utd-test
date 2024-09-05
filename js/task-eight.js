export default () => {
    const blockEight = document.querySelector('.js-task-eight');

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
}