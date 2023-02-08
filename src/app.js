import "./styles.css"
import placementTable from "./placement"
import placeShips from "./place";
import gameBoard from "./factoryFunctions/gameboard";
import rotate from "./rotate";
import direction from "./factoryFunctions/direction";
const appController = (function(){
    placementTable()
    const board = gameBoard()
    const ships = [
        'Carrier',
        'Battleship',
        'Destroyer',
        'Cruiser',
        'PatrolBoat']
    const way = direction()
    placeShips(way,board,ships)
    rotate(way,ships)
}) ();
