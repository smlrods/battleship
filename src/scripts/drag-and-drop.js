import { renderBoard, showShadowOfShips } from './interfaceDOM';
import catImage from '../images/cat.gif';
import { DEFAULT_SHIPS, placeAllShipsRandom } from './randomplays';
import Ship from './ship';

const shipsBoard = (size = 10) => {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');

    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');
      col.classList.add('board-square');
      col.id = `${i}${j}`;

      col.addEventListener('dragenter', dragEnter);
      col.addEventListener('dragover', dragOver);
      col.addEventListener('dragleave', dragLeave);
      col.addEventListener('drop', (event) => drop(event));

      row.appendChild(col);
    }

    board.appendChild(row);
  }

  return board;
};

const renderShips = () => {
  const shipsBoard = document.createElement('div');
  shipsBoard.classList.add('shipsBoard');

  const title = document.createElement('p');
  title.textContent = 'Drag the ships to the board, and then click to rotate';

  const shipsL4Section = createShips(4, 1);
  shipsL4Section.classList.add('shipsRow');

  const shipsL3Section = createShips(3, 2);
  shipsL3Section.classList.add('shipsRow');

  const shipsL2Section = createShips(2, 3);
  shipsL2Section.classList.add('shipsRow');

  const shipsL1Section = createShips(1, 4);
  shipsL1Section.classList.add('shipsRow');

  shipsBoard.appendChild(title);
  shipsBoard.appendChild(shipsL4Section);
  shipsBoard.appendChild(shipsL3Section);
  shipsBoard.appendChild(shipsL2Section);
  shipsBoard.appendChild(shipsL1Section);

  return shipsBoard;
};

const createShips = (size, amount) => {
  const ships = document.createElement('div');
  for (let i = 1; i < amount + 1; i++) {
    const ship = document.createElement('div');

    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);

    for (let j = 0; j < size; j++) {
      const part = document.createElement('div');

      part.addEventListener('click', (event) => {
        const ship = event.target.parentElement;
        const square = ship.parentElement;
        const squareX = +square.id[0];
        const squareY = +square.id[1];

        const shipLength = +ship.id[4];

        if (ship.classList.contains('horizontal') && shipLength + squareX - 1 < 10) {
          const shipSquaresVertical = [];

          for (let x = squareX + 1; x < squareX + shipLength; x++) {
            shipSquaresVertical.push(document.getElementById(`${x}${squareY}`));
          }

          const isPossible = shipSquaresVertical.some((square) => square.classList.contains('hasShip'));

          if (!isPossible) {
            event.target.parentElement.classList.remove('horizontal');
            event.target.parentElement.classList.add('vertical');

            for (let y = squareY; y < squareY + shipLength; y++) {
              document.getElementById(`${squareX}${y}`).classList.remove('hasShip');
            }

            for (let x = squareX; x < squareX + shipLength; x++) {
              document.getElementById(`${x}${squareY}`).classList.add('hasShip');
            }
          }
        } else if (ship.classList.contains('vertical') && shipLength + squareY - 1 < 10) {
          const shipSquaresHorizontal = [];

          for (let y = squareY + 1; y < squareY + shipLength; y++) {
            shipSquaresHorizontal.push(document.getElementById(`${squareX}${y}`));
          }

          const isPossible = shipSquaresHorizontal.some((square) => square.classList.contains('hasShip'));

          if (!isPossible) {
            event.target.parentElement.classList.remove('vertical');
            event.target.parentElement.classList.add('horizontal');

            for (let x = squareX; x < squareX + shipLength; x++) {
              document.getElementById(`${x}${squareY}`).classList.remove('hasShip');
            }

            for (let y = squareY; y < squareY + shipLength; y++) {
              document.getElementById(`${squareX}${y}`).classList.add('hasShip');
            }
          }
        }
      });
      ship.appendChild(part);
    }

    ship.classList.add(`ship${size}`, 'ship', 'horizontal');
    ship.id = `ship${size}${i}`;

    ship.setAttribute('draggable', true);

    ships.appendChild(ship);
  }

  return ships;
};

const dragStart = (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);

  const ship = event.target;
  const shipLength = +ship.id[4];
  const square = ship.parentElement;
  const squareX = +square.id[0];
  const squareY = +square.id[1];

  setTimeout(() => {
    ship.classList.add('dragging');
  });

  if (square.classList.contains('board-square')) {
    square.classList.remove('startShip');

    if (ship.classList.contains('horizontal')) {
      for (let y = squareY; y < squareY + shipLength; y++) {
        document.getElementById(`${squareX}${y}`).classList.remove('hasShip');
      }
    } else if (ship.classList.contains('vertical')) {
      for (let x = squareX; x < squareX + shipLength; x++) {
        document.getElementById(`${x}${squareY}`).classList.remove('hasShip');
      }
    }
  }
};

const dragEnd = (event) => {
  const ship = event.target;
  const shipLength = +ship.id[4];
  const square = ship.parentElement;
  const squareX = +square.id[0];
  const squareY = +square.id[1];

  ship.classList.remove('dragging');

  if (square.classList.contains('board-square')) {
    square.classList.add('startShip');

    if (ship.classList.contains('horizontal')) {
      for (let y = squareY; y < squareY + shipLength; y++) {
        document.getElementById(`${squareX}${y}`).classList.add('hasShip');
      }
    } else if (ship.classList.contains('vertical')) {
      for (let x = squareX; x < squareX + shipLength; x++) {
        document.getElementById(`${x}${squareY}`).classList.add('hasShip');
      }
    }
  }
};

const dragEnter = (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
};

const dragOver = (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
};

const dragLeave = (event) => {
  event.target.classList.remove('drag-over');
};

const drop = (event) => {
  event.target.classList.remove('drag-over');

  if (!event.target.classList.contains('board-square')) return;

  const id = event.dataTransfer.getData('text/plain');
  const ship = document.getElementById(id);

  const shipLength = +id[4];

  const square = event.target;
  const squareX = +square.id[0];
  const squareY = +square.id[1];
  const finalShipY = document.getElementById(`${squareX}${squareY + shipLength - 1}`);
  const finalShipX = document.getElementById(`${squareX + shipLength - 1}${squareY}`);

  if (finalShipY
    && ship.classList.contains('horizontal')) {
    const shipSquaresHorizontal = [square];

    for (let y = squareY; y < squareY + shipLength; y++) {
      shipSquaresHorizontal.push(document.getElementById(`${squareX}${y}`));
    }

    const isPossible = shipSquaresHorizontal.some((square) => square.classList.contains('hasShip'));

    if (!isPossible) {
      square.appendChild(ship);
    }
  } else if (finalShipX
            && ship.classList.contains('vertical')) {
    const shipSquaresVertical = [square];

    for (let x = squareX; x < squareX + shipLength; x++) {
      shipSquaresVertical.push(document.getElementById(`${x}${squareY}`));
    }

    const isPossible = shipSquaresVertical.some((square) => square.classList.contains('hasShip'));

    if (!isPossible) {
      square.appendChild(ship);
    }
  }
};

const placeShips = (player, computer) => {
  const main = document.createElement('div');
  main.id = 'placeships';

  const shipsSection = document.createElement('div');
  const ships = renderShips();

  shipsSection.appendChild(ships);

  const boardSection = document.createElement('div');
  const board = shipsBoard();

  boardSection.appendChild(board);

  const btn = document.createElement('button');
  btn.textContent = 'START';

  btn.addEventListener('click', () => {
    const ships = document.querySelectorAll('.startShip');
    if (ships.length == 10) {
      ships.forEach((square) => {
        const ship = square.firstChild;
        const shipLength = +ship.id[4];
        const x = +square.id[0];
        const y = +square.id[1];

        if (ship.classList.contains('horizontal')) {
          player.gameboard.placeShip(x, y, Ship(shipLength));
        } else if (ship.classList.contains('vertical')) {
          player.gameboard.placeShip(x, y, Ship(shipLength), true);
        }
      });

      placeAllShipsRandom(DEFAULT_SHIPS, computer.gameboard);

      main.remove();
      const body = document.querySelector('body');
      const content = document.createElement('div');
      const infos = document.createElement('div');
      const playerTitle = document.createElement('p');
      const computerTitle = document.createElement('p');

      playerTitle.textContent = 'Player';
      computerTitle.textContent = 'Computer';

      content.id = 'content';
      infos.id = 'infos';

      const playerIcon = new Image();
      playerIcon.src = catImage;

      infos.appendChild(playerTitle);
      infos.appendChild(playerIcon);
      infos.appendChild(computerTitle);

      body.appendChild(infos);
      content.appendChild(renderBoard(computer, player, true));
      content.appendChild(renderBoard(player, computer));
      body.appendChild(content);
      showShadowOfShips(document.querySelectorAll('.board')[0], player);
    }
  });

  main.appendChild(shipsSection);
  main.appendChild(boardSection);
  main.appendChild(btn);

  return main;
};

export { placeShips };
