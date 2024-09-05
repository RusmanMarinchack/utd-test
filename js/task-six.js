export default () => {
    const blockSix = document.querySelector('.js-task-six');

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
}