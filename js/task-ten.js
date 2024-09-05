export default () => {
    const blockTen = document.querySelector('.js-task-ten');

    function testTen(arr) {
        let a
        let arrNew = []

        arr.forEach(item => {
            if (typeof item === 'string') {
                arrNew.push(item)
            } else if (typeof item === 'number') {
                arrNew.unshift(item)
            }
        })

        for (let i=0; i<arrNew.length; i++) {
            arrNew.forEach((item2, index2) => {
                if (index2 < arr.length - 1 && arrNew[index2] > arrNew[index2 + 1]) {
                    a = item2
                    arrNew[index2] = arrNew[index2 + 1]
                    arrNew[index2 + 1] = a
                }
            })
        }

        return arrNew
    }

    const result = testTen([1, 2, 1, 8, 'r', 'a', 'a', 'a', 'p', 7, 10]).join()

    blockTen.innerHTML += `${result}`
}