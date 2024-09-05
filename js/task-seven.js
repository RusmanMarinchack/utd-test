export default () => {
    const blockSeven = document.querySelector('.js-task-seven');

    function testSeven(number) {
        const numberString = number.toString();
        const isSet = new Set();

        for (const digit of numberString) {
            if (isSet.has(digit)) {
                return true;
            }

            isSet.add(digit)
        }
        return false;
    }
    blockSeven.innerHTML += testSeven(1213941)
}