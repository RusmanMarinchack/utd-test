const selectors = {
    wrapper: '.js-sliding-puzzle',
    cell: '.js-sliding-puzzle__cell',
    finish: '.js-finish',
    restart: '.js-btn-restart'
};

const classes = {
    empty: 'is-empty',
    move: 'is-active-move',
    active: 'is-active',
    finish: 'is-finish'
}

window.addEventListener('load', () => {
    const listNumbers  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let preloaded = true;

    function handlerSortArr(arr) {
        const newArr = [...arr];

        newArr.forEach((_, i) => {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        });

        return newArr
    }

    const sortListNumbers = handlerSortArr(listNumbers);

    function handlerPreview(arr) {
        const wrapper = document.querySelector(selectors.wrapper);

        if (!wrapper) {
            return
        }

        arr.forEach(num => {
            const createElementCell = num === 0 ? 'div' : 'button';
            const cell = document.createElement(createElementCell);

            cell.classList.add('sliding-puzzle__cell');
            cell.classList.add('js-sliding-puzzle__cell');

            if (num === 0) {
                cell.classList.add(classes.empty)
                cell.innerHTML = '';
            } else {
                cell.innerHTML = num;
            }

            wrapper.appendChild(cell);
        });

        preloaded = true;
    }

    handlerPreview(sortListNumbers);

    function handlerClickCell() {
        const wrapper = document.querySelector(selectors.wrapper);
        const cells = [...wrapper.querySelectorAll(selectors.cell)];

        if (cells.length < 1) {
            return
        }

        cells.forEach((cell, index)=> {
            let activeMove;
            let cellEmpty;

            if (preloaded) {
                cell.addEventListener('click', function () {
                    preloaded = false;

                    sortListNumbers.forEach((num, i) => {
                        if (num === 0) {
                            cellEmpty = i;
                        }
                    });

                    if (!this.classList.contains(classes.empty) && this.classList.contains(classes.move)) {
                        activeMove = index;

                        [sortListNumbers[activeMove], sortListNumbers[cellEmpty]] = [sortListNumbers[cellEmpty], sortListNumbers[activeMove]];

                        handlerAnimationCell(cells, activeMove)
                    }

                    cells.forEach(c => c.classList.remove(classes.move));

                    setTimeout(() => {
                        wrapper.innerHTML = '';
                        handlerPreview(sortListNumbers);
                        handlerClickCell();
                        handlerFinishPreview(listNumbers, sortListNumbers);
                    }, 200);
                });
            }

            if (cell.classList.contains(classes.empty)) {
                handlerAvailableMoves(cells, index);
            }
        });
    }

    handlerClickCell();

    function handlerAvailableMoves (cells, indexEmpty) {
        const availableMoves = [];
        const indexEmptyIncrement = indexEmpty + 1;

        if (indexEmptyIncrement !== 1 && indexEmptyIncrement !== 5 && indexEmptyIncrement !== 9 && indexEmptyIncrement !== 13) {
            availableMoves.push(indexEmpty - 1);
        }

        if (indexEmptyIncrement !== 4 && indexEmptyIncrement !== 8 && indexEmptyIncrement !== 12 && indexEmptyIncrement !== 16) {
            availableMoves.push(indexEmpty + 1);
        }

        if (cells[indexEmpty + 4]) {
            availableMoves.push(indexEmpty + 4);
        }

        if (cells[indexEmpty - 4]) {
            availableMoves.push(indexEmpty - 4);
        }

        availableMoves.forEach(activeMove => {
            cells[activeMove].classList.add(classes.move)
        });
    }

    function handlerAnimationCell(cells, activeIndex) {
        let styleTransformValue;

        if (cells[activeIndex + 1] && cells[activeIndex + 1].classList.contains(classes.empty)) {
            styleTransformValue = 'translateX(calc(100% + 6px))';
        } else if (cells[activeIndex - 1] && cells[activeIndex - 1].classList.contains(classes.empty)) {
            styleTransformValue = 'translateX(calc(-100% - 6px))';
        } else if (cells[activeIndex - 4] && cells[activeIndex - 4].classList.contains(classes.empty)) {
            styleTransformValue = 'translateY(calc(-100% - 6px))';
        } else if (cells[activeIndex + 4] && cells[activeIndex + 4].classList.contains(classes.empty)) {
            styleTransformValue = 'translateY(calc(100% + 6px))';
        }

        cells[activeIndex].style.transform = styleTransformValue;
    }

    function handlerFinishPreview(startArr, sortArr) {
        const wrapper = document.querySelector(selectors.wrapper);
        const finish = document.querySelector(selectors.finish);

        if (!finish || !wrapper) {
            return
        }

        const btnRestart = finish.querySelector(selectors.restart);

        const isArrSame = startArr.every((element, index) => {
            return element === sortArr[index];
        });

        if (isArrSame) {
            document.body.classList.add(classes.finish);
            wrapper.classList.add(classes.finish);

            setTimeout(() => finish.classList.add(classes.active), 500);

            btnRestart.addEventListener('click', function () {
                document.body.classList.remove(classes.finish);
                wrapper.classList.remove(classes.finish);
                finish.classList.remove(classes.active);

                wrapper.innerHTML = '';
                handlerPreview(handlerSortArr(sortListNumbers));
                handlerClickCell();
            });
        }
    }
});