import gameBoard from "../factoryFunctions/gameboard";

test("gameboard factory", () => {
  const gameBoardTest = gameBoard();
    gameBoardTest.placeShip("PatrolBoat", [0, 0], "Horizontal")
  const patrolBoatTest = gameBoardTest.getShip("PatrolBoat");
  expect(patrolBoatTest.id).toBe("PatrolBoat");
  expect(patrolBoatTest.length).toBe(2);
  expect(patrolBoatTest.direction).toBe("Horizontal");
  expect(patrolBoatTest.getDirection()).toBe("Horizontal");
  expect(patrolBoatTest.hits).toBe(0);
  expect(patrolBoatTest.getHits()).toBe(0);
});

test("gameboard to ship hit", () => {
  const gameBoardTest = gameBoard();
  gameBoardTest.placeShip("PatrolBoat", [0, 0], "Horizontal");
  gameBoardTest.receiveAttack([0, 0]);
  const patrolBoatTest = gameBoardTest.getShip("PatrolBoat");
  expect(patrolBoatTest.getHits()).toBe(1);
});

test("sink and defeat", () => {
  const gameBoardTest = gameBoard();
  gameBoardTest.placeShip("PatrolBoat", [0, 0], "Horizontal");
  gameBoardTest.receiveAttack([0, 0]);
  gameBoardTest.receiveAttack([1, 0]);
  const patrolBoatTest = gameBoardTest.getShip("PatrolBoat");
  expect(patrolBoatTest.isSunk()).toBe(true);
  expect(gameBoardTest.isDefeat()).toBe(true);
});