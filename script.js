// This file contains the JavaScript code that implements the game logic for Tic-Tac-Toe.

const board = document.getElementById('board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(clickedCell, clickedCellIndex) {
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;

  checkForWinner();
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
      continue;
    }
    if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    statusDisplay.innerHTML = 'It\'s a draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
}

function handleCellCreation() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-cell-index', i);
    cell.addEventListener('click', () => handleCellClick(cell, i));
    board.appendChild(cell);
  }
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
  board.innerHTML = '';
  handleCellCreation();
}

resetButton.addEventListener('click', handleRestartGame);
handleCellCreation();