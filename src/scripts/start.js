import { placeShips } from './drag-and-drop';
import Player from './player';

export default function startGame() {
  // Create new players
  const player = Player('player', true);
  const computer = Player('computer', false);
  player.setEnemy(computer);
  computer.setEnemy(player);

  const body = document.querySelector('body');

  body.appendChild(placeShips(player, computer));
}
