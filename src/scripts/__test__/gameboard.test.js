import Gameboard from "../gameboard";
import Ship from "../ship";

test("Place ships", () => {
  const game = Gameboard();
  const x = 1;
  const y = 1;
  const ship = Ship(3);
  game.placeShip(x, y, ship);
  for (let i = y; i < y + 3; i++) {
    expect(game.board[x][i].ship).toEqual(ship);
  }
});

test("Place ships - same place", () => {
  const game = Gameboard();
  const x = 1;
  const y = 1;
  expect(game.placeShip(x, y, Ship(3))).toBe(true); 
  expect(game.placeShip(x, y, Ship(4))).toBe(false); 
});

test("Place ships - cases not possible", () => {
  const game = Gameboard();
  expect(game.placeShip(1, 9, Ship(2))).toBe(false);
  expect(game.placeShip(1, 9, Ship(1))).toBe(true);
});

test("Receive Attack - One attack", () => {
  const game = Gameboard();
  const ship = Ship(3);
  game.placeShip(1, 1, ship);
  game.receiveAttack(1, 1);

  expect(game.board[1][1].ship.getTimesHit()).toBe(1);

  game.receiveAttack(1, 2);
  expect(game.board[1][2].ship.getTimesHit()).toBe(2);
});

test("Receive Attack - Repeat same Attack", () => {
  const game = Gameboard();
  const ship = Ship(3);
  game.placeShip(1, 1, ship);
  game.receiveAttack(1, 1);
  game.receiveAttack(1, 1);
  expect(game.board[1][1].ship.getTimesHit()).toBe(1);
});

test("Receive Attack - Sunk ship ", () => {
  const game = Gameboard();
  const ship = Ship(3);
  game.placeShip(1, 1, ship);
  game.receiveAttack(1, 1);
  game.receiveAttack(1, 2);
  game.receiveAttack(1, 3);
  expect(game.board[1][1].ship.isSunk()).toBe(true);
});

test("Receive Attack - Missed attack", () => {
  const game = Gameboard();
  expect(game.board[1][1].attacked).toBe(false);
  game.receiveAttack(1, 1);
  expect(game.board[1][1].attacked).toBe(true);
});

test("Receive Attack - All ship been sunk", () => {
  const game = Gameboard();

  game.placeShip(1, 1, Ship(1));
  game.placeShip(1, 2, Ship(1));
  game.placeShip(1, 3, Ship(1));

  expect(game.allSunk()).toBe(false);

  game.receiveAttack(1, 1);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack(1, 2);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack(1, 3);
  expect(game.allSunk()).toBe(true);
});
