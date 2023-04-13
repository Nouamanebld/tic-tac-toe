const gameBoard = (() => {
    let gameBoardArr = [];
    let items = document.querySelectorAll('.item');
    items.forEach((item) => {
        gameBoardArr.push(item);
    });
    gameBoardArr.map((item) => {
        item.addEventListener('click', () => {
            item.textContent = "X";
        });
    });
})();

const player = (type) => {
    return {type};
};


