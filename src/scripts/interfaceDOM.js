import { aiAttack } from './ai';
import crownGif from '../images/crown.gif';

const renderBoard = (player, enemy, isPlayer = false, size = 10) => {
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');

      if (isPlayer) col.id = `${i}${j}`;

      if (!isPlayer) {
        col.addEventListener('click', () => {
          if (col.classList.contains('attacked') && enemy.gameboard.board[i][j].ship.isSunk()) {
            if (!col.classList.contains('ship-sunk')) col.classList.add('ship-sunk');
            return;
          }

          if (!player.gameboard.allSunk() && enemy.gameboard.board[i][j]) {
            if (!enemy.gameboard.board[i][j].attacked) {
              player.attack(i, j);

              if (enemy.gameboard.board[i][j].ship) {
                col.classList.add('attacked');
                if (enemy.gameboard.allSunk()) {
                  const infos = document.getElementById('infos');
                  const crownImage = new Image();
                  crownImage.src = crownGif;
                  document.querySelector('body').insertBefore(crownImage, infos);
                  infos.textContent = 'Player Won';
                  const boards = document.querySelectorAll('.board');
                  boards.forEach((el) => el.classList.add('finished'));
                }
              } else {
                col.classList.add('missed');
              }

              showSunk();

              aiAttack(enemy, player);
            }
          }
        });
      }

      col.classList.add('board-square');

      row.appendChild(col);
    }
    board.appendChild(row);
  }
  return board;
};

const showShadowOfShips = (board, player) => {
  const squares = board.querySelectorAll('.board-square');

  squares.forEach((square) => {
    if (player.gameboard.board[+square.id[0]][+square.id[1]].ship) {
      square.classList.add('ship-shadow');
    }
  });
};

const showSunk = () => {
  const boards = document.querySelectorAll('.board');
  const computerBoard = boards[1];

  computerBoard.querySelectorAll('.attacked').forEach((squareAttacked) => {
    squareAttacked.click();
  });
};

export { renderBoard, showShadowOfShips };
