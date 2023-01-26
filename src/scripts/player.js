import Gameboard from './gameboard';

export default function Player(name, turn) {
  const gameboard = Gameboard();
  let _enemy = null;

  const setEnemy = (gameboard) => {
    if (!_enemy) {
      _enemy = gameboard;
    }
  };

  const attack = function (x, y) {
    if (this.turn) {
      const isPossible = _enemy.gameboard.receiveAttack(x, y);
      if (isPossible) {
        this.turn = false;
        _enemy.turn = true;
      }
      return isPossible;
    }
  };

  return {
    gameboard, setEnemy, attack, turn,
  };
}
