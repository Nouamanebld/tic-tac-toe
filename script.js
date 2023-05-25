/* eslint-disable no-undef */
const container = document.querySelector('.container');
let playerTurn = 1;
let player1;
let player2;
const gameRestart = () => {
  container.innerHTML = '';
  player1 = '';
  player2 = '';
};

const checkWinner = (arr) => {
  const winComb =
  [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  const squares = [];
  arr.forEach((square) => {
    squares.push(square.innerHTML);
  });
  for (let i = 0; i < 8; i++) {
    if (squares[winComb[i][0]] &&
      squares[winComb[i][0]] === squares[winComb[i][1]] &&
      squares[winComb[i][0]] === squares[winComb[i][2]]) {
      if (squares[winComb[i][0]] === 'X') {
        alert(player1 + ' Wins');
        gameRestart();
      } else {
        alert(player2 + ' Wins');
        gameRestart();
      }
    }
  }
};

const click = (arr) => {
  for (let i = 0; i <= 8; i++) {
    arr[i].addEventListener('click', () => {
      if (!arr[i].textContent) {
        if (playerTurn === 1) {
          arr[i].textContent = 'X';
          turnSwitch();
        } else if (playerTurn === 2) {
          arr[i].textContent = 'O';
          turnSwitch();
        }
      }
      checkWinner(arr);
    });
    arr[i].addEventListener('touchstart', () => {
      if (!arr[i].textContent) {
        if (playerTurn === 1) {
          arr[i].textContent = 'X';
          turnSwitch();
        } else if (playerTurn === 2) {
          arr[i].textContent = 'O';
          turnSwitch();
        }
      }
      checkWinner(arr);
    });
  }
  return arr;
};

const gameBoard = (playerTurn) => {
  if (!container.innerHTML) {
    const arr = [];
    for (let i = 0; i <= 8; i++) {
      arr[i] = document.createElement('div');
      arr[i].className = `item ${i}`;
      arr[i].setAttribute('id', 'child');
      container.appendChild(arr[i]);
    }
    click(arr);
  }
};

const turnSwitch = () => {
  if (playerTurn === 1) {
    playerTurn = 2;
  } else if (playerTurn === 2) {
    playerTurn = 1;
  }
};

const game = (() => {
  const gameplay = () => {
    const start = document.querySelector('#start');
    start.addEventListener('click', () => {
      player1 = document.querySelector('#player1').value;
      player2 = document.querySelector('#player2').value;
      if (player1 && player2) {
        gameBoard();
      } else {
        gameplay();
      }
    });
    start.addEventListener('touchstart', () => {
      player1 = document.querySelector('#player1').value;
      player2 = document.querySelector('#player2').value;
      if (player1 && player2) {
        gameBoard();
      } else {
        gameplay();
      }
    });
  };
  gameplay();
  const restart = document.querySelector('#restart');
  restart.addEventListener('click', () => {
    container.innerHTML = '';
    player1 = '';
    player2 = '';
  });
  restart.addEventListener('touchstart', () => {
    container.innerHTML = '';
    player1 = '';
    player2 = '';
  });
})();
