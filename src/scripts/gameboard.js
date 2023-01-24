export default function Gameboard() {

  const _createBoard = (size) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i].push(
          {
            attacked: false,
            ship: null
          }
        );
      }
    }
    return board;
  }

  const board = _createBoard(10);

  const _ships = [];

  const placeShip = (x, y, ship, orientation=false) => {
    if (x + ship.getLength() > 9 || y + ship.getLength() > 9 && ship.getLength() > 1) return false;

    _ships.push(ship);

    if (orientation) {
      for (let i = x; i < ship.getLength() + x; i++) {
        board[i][y].ship = ship;
      } 
    } else {
      for (let i = y; i < ship.getLength() + y; i++) {
        board[x][i].ship = ship;
      } 
    }


    return true;
  }

  const receiveAttack = (x, y) => {

    if (!board[x][y].attacked) {
      board[x][y].attacked = true;

      if (board[x][y].ship) {
          board[x][y].ship.hit();
      } else {
        if(board[x][y] === null) {
          board[x][y] = false
        } 
      }
    }
  }

  const allSunk = () => {
    return _ships.every((ship) => ship.isSunk() == true);
  }

  return { placeShip, board, receiveAttack, allSunk }
};
