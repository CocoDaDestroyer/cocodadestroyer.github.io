import coordsWithShips from "./tilesWithShips";

const showTilesWithShips = (gameBoard) => {
  const coords = coordsWithShips(gameBoard);

  const tiles = document.querySelectorAll("td");
  const coordSet = new Set(coords.map(coord => coord.toString()));

  tiles.forEach((tile) => {
    if (coordSet.has(tile.dataset.coordArray)) {
      tile.classList.remove("hovered");
      tile.classList.add("shiptile");
    }
  });
};

export default showTilesWithShips;