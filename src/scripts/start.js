import { placeShips } from "./drag-and-drop";
import { renderBoard } from "./interfaceDOM";
import Player from "./player";
import { DEFAULT_SHIPS, placeAllShipsRandom } from "./randomplays";
import Ship from "./ship";

export default function startGame() {
  // Create new players
  const player = Player('player', true);
  const computer = Player('computer', false);
  player.setEnemy(computer);
  computer.setEnemy(player);

  /*
  player.gameboard.placeShip(0,0, Ship(4));
  player.gameboard.placeShip(0,4, Ship(3));
  player.gameboard.placeShip(0,7, Ship(3));
  player.gameboard.placeShip(1,0, Ship(2));
  player.gameboard.placeShip(1,2, Ship(2));
  player.gameboard.placeShip(1,4, Ship(2));
  player.gameboard.placeShip(2,6, Ship(1));
  player.gameboard.placeShip(1,7, Ship(1));
  player.gameboard.placeShip(1,8, Ship(1));
  player.gameboard.placeShip(1,9, Ship(1));
  */

  // render player board
  // placeAllShipsRandom(DEFAULT_SHIPS, computer.gameboard);

  const body = document.querySelector('body');

  //body.appendChild(renderBoard(computer, player, true));
  //body.appendChild(renderBoard(player, computer));
  body.appendChild(placeShips(player, computer));
}
