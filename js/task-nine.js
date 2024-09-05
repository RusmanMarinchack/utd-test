export default () => {
    const blockNine = document.querySelector('.js-task-nine');

    function testNine(directions) {
        let time = 90

        // We will check whether there will be enough time.
        directions.forEach(direction => {
            if (direction === 'північ' || direction === 'південь' || direction === 'захід' || direction === 'схід') {
                time -= 10
            } else {
                console.log('Не відомий напрямок.')
            }
        })

        // If there is not enough time, we issue false.

        if (time <= 0) {
            return
        }

        return true
    }

    blockNine.innerHTML += testNine(['північ', 'південь', 'захід', 'захід'])
}