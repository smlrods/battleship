import Gameboard from "./gameboard";

export default function Player(name, turn) {
  let gameboard = Gameboard();
  let _enemy = null;

  const setEnemy = (gameboard) => {
    if(!_enemy) {
      _enemy = gameboard;
    }
  }

  const attack = function (x, y) {
    if(this.turn) {
      this.turn = false;
      _enemy.gameboard.receiveAttack(x, y);
      _enemy.turn = true;
    }
  }

  return { gameboard, setEnemy, attack, turn}
}
