import showChecks from "./showChecks"
import announceWinner from "./announceWinner"
const attack = (eboard,pboard)=>{
    const enemyTiles = document.querySelectorAll('.enemy')
    let tiles = []
    for(let i =0;i<10;i++){
        for(let z =0;z<10;z++){
            let array = [i,z]
            tiles.push(array)
        }
    }
    enemyTiles.forEach((tile)=>{
        tile.addEventListener('click',function(){
            let coords = tile.dataset.eCoordArray.split(',').map(Number);
            let attacked = eboard.receiveAttack(coords)
            if(attacked === false){

            }else{
                showChecks(eboard,'.enemy')
                let index = Math.floor(Math.random() * tiles.length);
                let arr = tiles[index]
                tiles.splice(index,1)
                pboard.receiveAttack(arr)
                showChecks(pboard,'.player')


            }
            if(eboard.isDefeat()){
                announceWinner('Player')
            }if(pboard.isDefeat()){
                announceWinner('Computer')
            }
        })
    })
}
export default attack