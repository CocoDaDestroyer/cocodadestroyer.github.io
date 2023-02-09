import enemyBoard from "./enemyBoard"
import gameBoard from "./factoryFunctions/gameboard"
import playerBoard from "./playerBoard"
import showChecks from "./showChecks"
import showTilesWithShips from './showTilesWShips'
import attack from "./attack"
const startGame = (board) =>{
    const placeTable = document.querySelector('#placementTable')
    placeTable.style.display = 'none'
    enemyBoard()
    const eBoard = gameBoard()
    eBoard.placeShip('Carrier',[3,4],'Horizontal')
    eBoard.placeShip('Battleship',[5,1],'Vertical')
    eBoard.placeShip('Destroyer',[6,8],'Vertical')
    eBoard.placeShip('Cruiser',[1,1],'Horizontal')
    eBoard.placeShip('PatrolBoat',[7,4],'Horizontal')
    showChecks(eBoard,'.enemy')
    playerBoard()
    showTilesWithShips(board,'.player','pCoordArray')
    attack(eBoard,board)

}
export default startGame