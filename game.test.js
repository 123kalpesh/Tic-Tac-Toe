import { checkWinner, resetGame } from '../js/script.js';

describe('Tic-Tac-Toe Game Logic', () => {
  let board;

  beforeEach(() => {
    board = ['', '', '', '', '', '', '', '', ''];
  });

  test('should declare player X as the winner', () => {
    board = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(checkWinner(board)).toBe('X');
  });

  test('should declare player O as the winner', () => {
    board = ['O', 'O', 'O', '', '', '', '', '', ''];
    expect(checkWinner(board)).toBe('O');
  });

  test('should return null when there is no winner', () => {
    board = ['X', 'O', 'X', 'O', 'X', '', '', '', ''];
    expect(checkWinner(board)).toBeNull();
  });

  test('should reset the game board', () => {
    board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    resetGame(board);
    expect(board).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});