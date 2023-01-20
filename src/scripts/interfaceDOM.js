const renderBoard = (player, enemy, size=10) => {
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');
      col.classList.add('board-square');
      col.addEventListener('click', () => {
        if (player.turn) {
          if (!enemy.gameboard.board[i][j].attacked) {
            player.attack(i, j);
            if (enemy.gameboard.board[i][j].ship) {
              col.classList.add('attacked');
            } else {
              col.classList.add('missed');
            }
          }
        }
      });
      row.appendChild(col);
    }
    board.appendChild(row);
  }
  return board;
}

export { renderBoard }
