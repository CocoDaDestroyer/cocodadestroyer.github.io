import highlights from "./highlight"

const rotate =(direction,list)=>{
    const shipLengths = {
        Carrier:5,
        Battleship:4,
        Destroyer:3,
        Cruiser:3,
        PatrolBoat:2
    }
    const rotateBtn = document.querySelector('.rotate-btn')
    rotateBtn.addEventListener('click',function(){
        direction.changeDirection()
        highlights(shipLengths[list[0]],direction.obtainDirection())
    })
}
export default rotate