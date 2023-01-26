import Ship from './ship';

export default function randomplays() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const orientation = Math.random() < 0.5;
  return [x, y, orientation];
}

const DEFAULT_SHIPS = [Ship(4), Ship(3), Ship(3), Ship(2), Ship(2), Ship(2), Ship(1), Ship(1), Ship(1), Ship(1), Ship(1)];

const attackRandom = (computer, player) => {
  let isPossible = false;
  let x; let
    y;
  do {
    [x, y] = randomplays();
    if (player.gameboard.board[x][y]) {
      isPossible = computer.attack(x, y);
    }
  } while (!isPossible);
  const square = document.getElementById(`${x}${y}`);
  showAttack(square, player.gameboard.board[x][y]);
};

const showAttack = (square, hit) => {
  if (hit) {
    square.classList.add('attacked');
  } else {
    square.classList.add('missed');
  }
};

const placeRandom = (gameboard, ship) => {
  let isPossible = false;
  const length = ship.getLength();
  let around = [];

  do {
    const [x, y, orientation] = randomplays();

    if (gameboard.board[x][y].ship != null) continue;

    // vertical

    if (orientation) {
      if (x - 1 > 0) around.push(gameboard.board[x - 1][y]);
      if (x + length - 1 < 9) {
        around.push(gameboard.board[x + length][y]);

        if ((y - 1) > 0) {
          for (let i = x; i < x + length; i++) {
            around.push(gameboard.board[i][y - 1]);
          }
        }

        if (y + 1 < 10) {
          for (let i = x; i < x + length; i++) {
            around.push(gameboard.board[i][y + 1]);
          }
        }
      }
    } else {
    // horizontal
    //
      if (y - 1 > 0) around.push(gameboard.board[x][y - 1]);
      if (y + length - 1 < 9) {
        around.push(gameboard.board[x][y + length]);

        if ((x - 1) > 0) {
          for (let i = y; i < y + length; i++) {
            around.push(gameboard.board[x - 1][i]);
          }
        }

        if (x + 1 < 10) {
          for (let i = y; i < y + length; i++) {
            around.push(gameboard.board[x + 1][i]);
          }
        }
      }
    }

    const aroundPossible = around.every((square) => square.ship === null);

    if (aroundPossible) {
      isPossible = gameboard.placeShip(x, y, ship, orientation);
    } else {
      isPossible = false;
    }

    around = [];
  } while (!isPossible);
};

const placeAllShipsRandom = (ships, gameboard) => {
  ships.forEach((ship) => placeRandom(gameboard, ship));
};

export {
  attackRandom, placeAllShipsRandom, showAttack, DEFAULT_SHIPS,
};
