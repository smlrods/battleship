import { attackRandom, showAttack } from "./randomplays";
import crownGif from '../images/crown.gif';

const aiAttack = (enemy, player) => {
  if (enemy.gameboard.allSunk()) return;
  const board = document.querySelector('.board');
  const allAttacked = board.querySelectorAll('.attacked');
  const attackedNotSunk = [];

  allAttacked.forEach((square) => {
    const x = +square.id[0];
    const y = +square.id[1];
    const isSunk = player.gameboard.board[x][y].ship.isSunk();

    if (!isSunk) attackedNotSunk.push(square);
  }); 

  if (attackedNotSunk.length === 1) {
    const x = +attackedNotSunk[0].id[0];
    const y = +attackedNotSunk[0].id[1];

    // check the top
    if (x > 0 && 
        player.gameboard.board[x - 1][y]
        /* player.gameboard.board[x + 1][y].ship.attacked */
        ) {
      enemy.attack(x - 1, y);
      const square = document.getElementById(`${x - 1}${y}`);
      showAttack(square, player.gameboard.board[x - 1][y]);
    } else

    // check the right
    if (y < 9 && player.gameboard.board[x][y + 1]) {
      enemy.attack(x, y + 1);
      const square = document.getElementById(`${x}${y + 1}`);
      showAttack(square, player.gameboard.board[x][y + 1]);
    } else

    // check the bottom
    if (x < 9 && player.gameboard.board[x + 1][y]) {
      enemy.attack(x + 1, y);
      const square = document.getElementById(`${x + 1}${y}`);
      showAttack(square, player.gameboard.board[x + 1][y]);
    } else

    // check the left
    if (y > 0 && player.gameboard.board[x][y - 1]) {
      enemy.attack(x, y - 1);
      const square = document.getElementById(`${x}${y - 1}`);
      showAttack(square, player.gameboard.board[x][y - 1]);
    }
  } else if (attackedNotSunk.length > 1) {
    let x = +attackedNotSunk[0].id[0];
    let y = +attackedNotSunk[0].id[1];

    const orientation = attackedNotSunk.every((square) => +square.id[0] === x);

    // horizontal
    if (orientation) {
      y = +attackedNotSunk[attackedNotSunk.length - 1].id[1];

      // Check right
      if (y < 9 && player.gameboard.board[x][y + 1]) {
        enemy.attack(x, y + 1);
        const square = document.getElementById(`${x}${y + 1}`);
        showAttack(square, player.gameboard.board[x][y + 1]);
      } else 

      // Check left
      if (y > 0 && player.gameboard.board[x][y - 1]) {
        y = +attackedNotSunk[0].id[1];

        enemy.attack(x, y - 1);
        const square = document.getElementById(`${x}${y - 1}`);
        showAttack(square, player.gameboard.board[x][y - 1]);
      }

    } else { // vertical
      x = +attackedNotSunk[0].id[0];

      // Check TOP
      if (x > 0 && player.gameboard.board[x - 1][y]) {
        enemy.attack(x - 1, y);
        const square = document.getElementById(`${x - 1}${y}`);
        showAttack(square, player.gameboard.board[x - 1][y]);
      } else 

      // Check BOTTOM
      if (x < 9 && player.gameboard.board[x + 1][y]) {
        x = +attackedNotSunk[attackedNotSunk.length - 1].id[0];

        enemy.attack(x + 1, y);
        const square = document.getElementById(`${x + 1}${y}`);
        showAttack(square, player.gameboard.board[x + 1][y]);
      }
    }

  } else {
    attackRandom(enemy, player);
  }

  if (player.gameboard.allSunk()) {
    const infos = document.getElementById('infos'); 
    const crownImage = new Image();
    crownImage.src = crownGif;
    document.querySelector('body').insertBefore(crownImage, infos);
    infos.textContent = 'Computer Won';
    const boards = document.querySelectorAll('.board');
    boards.forEach((el) => el.classList.add('finished'));
  }
}

export {aiAttack}
