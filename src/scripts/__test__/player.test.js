import Player from "../player";
import Ship from "../ship";
import randomplays from "../randomplays";

test("Create Player", () => {
  const player = Player('player', true);
  const computer = Player('computer', false);
  player.setEnemy(computer);
  computer.setEnemy(player);
  computer.gameboard.placeShip(1, 1, Ship(3));
  player.attack(1, 1);
  expect(computer.gameboard.board[1][1].ship.getTimesHit()).toBe(1);
  player.attack(1, 2);
  expect(computer.gameboard.board[1][3].ship.getTimesHit()).toBe(1);
});

test("Test computer plays", () => {
  let [x, y] = randomplays();

  const player = Player('player', false);
  const computer = Player('computer', true);

  player.setEnemy(computer);
  computer.setEnemy(player);

  computer.gameboard.placeShip(1, 1, Ship(3));
  player.gameboard.placeShip(1, 1, Ship(3));

  computer.attack(x, y);
  expect(player.gameboard.board[x][y].attacked).toBe(true);
});
