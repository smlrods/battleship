import Ship from "../ship";


test('Hit test', () => {
  const someShip = Ship(3);
  expect(someShip.hit()).toBe(1);
  expect(someShip.hit()).toBe(2);
  expect(someShip.hit()).toBe(3);
  expect(someShip.hit()).toBe(null);
});

test('IsSunk Test', () => {
  const someShip = Ship(3);
  expect(someShip.isSunk()).toBe(false);
  expect(someShip.hit()).toBe(1);
  expect(someShip.hit()).toBe(2);
  expect(someShip.hit()).toBe(3);
  expect(someShip.isSunk()).toBe(true);
});
