import "./styles.css"
import placementTable from "./placement"
import placeShips from "./place";
import gameBoard from "./factoryFunctions/gameboard";
import rotate from "./rotate";
import direction from "./factoryFunctions/direction";
const appController = (function(){
    placementTable()
    const playerBoard = gameBoard()
    const ships = [
        'Carrier',
        'Battleship',
        'Destroyer',
        'Cruiser',
        'PatrolBoat']
    const way = direction()
    placeShips(way,playerBoard,ships)
    rotate(way,ships)
}) ();
