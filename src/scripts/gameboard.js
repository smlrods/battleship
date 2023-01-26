export default function Gameboard() {
  const _createBoard = (size) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i].push(
          {
            attacked: false,
            ship: null,
          },
        );
      }
    }
    return board;
  };

  const board = _createBoard(10);

  const _ships = [];

  const placeShip = (x, y, ship, orientation = false) => {
    if (x + ship.getLength() - 1 > 9
        || y + ship.getLength() - 1 > 9) return false;

    if (orientation) {
      const squares = [];
      for (let i = x; i < ship.getLength() + x; i++) {
        squares.push(board[i][y]);
      }

      const isPossible = squares.some((square) => square.ship != null);
      if (!isPossible) {
        squares.forEach((square) => square.ship = ship);

        _ships.push(ship);
        return true;
      }
    } else {
      const squares = [];

      for (let i = y; i < ship.getLength() + y; i++) {
        squares.push(board[x][i]);
      }

      const isPossible = squares.some((square) => square.ship != null);
      if (!isPossible) {
        squares.forEach((square) => square.ship = ship);

        _ships.push(ship);
        return true;
      }
    }

    return false;
  };

  const receiveAttack = (x, y) => {
    if (!board[x][y].attacked) {
      board[x][y].attacked = true;

      if (board[x][y].ship) {
        board[x][y].ship.hit();
      } else if (board[x][y].ship === null) {
        board[x][y] = false;
      }

      return true;
    }
    return false;
  };

  const allSunk = () => _ships.every((ship) => ship.isSunk() == true);

  return {
    placeShip, board, receiveAttack, allSunk,
  };
}
