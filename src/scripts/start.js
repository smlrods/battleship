import { renderBoard } from "./interfaceDOM";
import Player from "./player";
import Ship from "./ship";

export default function startGame() {
  const player = Player('player', true);
  const computer = Player('computer', false);
  player.setEnemy(computer);
  computer.setEnemy(player);

  player.gameboard.placeShip(1, 1, Ship(6));
  player.gameboard.placeShip(2, 2, Ship(3));
  player.gameboard.placeShip(3, 3, Ship(3));
  player.gameboard.placeShip(4, 4, Ship(3));

  computer.gameboard.placeShip(1, 1, Ship(3));
  computer.gameboard.placeShip(2, 2, Ship(3));
  computer.gameboard.placeShip(3, 3, Ship(3));
  computer.gameboard.placeShip(4, 4, Ship(3));

  // render player board
  const body = document.querySelector('body');

  body.appendChild(renderBoard(player, computer));
  body.appendChild(renderBoard(computer, player));


}
