import highlights from "./highlight"
import showTilesWithShips from "./showTilesWShips"
const placeShips = (direction,board,list) =>{
    console.log('hi')
    const shipLengths = {
        Carrier:5,
        Battleship:4,
        Destroyer:3,
        Cruiser:3,
        PatrolBoat:2
    }
    
    highlights(shipLengths[list[0]],direction.obtainDirection())
    const tiles = document.querySelectorAll('td')
    tiles.forEach((tile)=>{
        tile.addEventListener('click',function(){
            let coords = tile.dataset.coordArray.split(',').map(Number);
            let ship = list[0]
            let placed = board.placeShip(ship,coords,direction.obtainDirection())
            if(placed !==false){
                list.shift()
                console.log(direction.obtainDirection())
                highlights(shipLengths[list[0]],direction.obtainDirection())
                showTilesWithShips(board)

            }
        })
    })
}
export default placeShips