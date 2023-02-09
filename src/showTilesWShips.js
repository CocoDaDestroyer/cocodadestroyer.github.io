import coordsWithShips from "./tilesWithShips";

const showTilesWithShips = (gameBoard,type) => {
  const coords = coordsWithShips(gameBoard);

  const tiles = document.querySelectorAll(type);
  const coordSet = new Set(coords.map(coord => coord.toString()));
  if(type === '.place'){
    tiles.forEach((tile) => {
      if (coordSet.has(tile.dataset.coordArray)) {
        tile.classList.remove("hovered");
        tile.classList.add("shiptile");
      }
    });
  }else if(type === '.player'){
    tiles.forEach((tile) => {
      if (coordSet.has(tile.dataset.pCoordArray)) {
        tile.classList.remove("hovered");
        tile.classList.add("shiptile");
      }
    });
  }
};

export default showTilesWithShips;