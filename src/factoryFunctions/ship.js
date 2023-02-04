const shipLengths = {
    Carrier:5,
    Battleship:4,
    Destroyer:3,
    Cruiser:3,
    PatrolBoat:2
}
const ship = (type)=>{
    const id = type
    const length = shipLengths[type]
    let direction = 'Horizontal'
    const getDirection = ()=>direction
    const changeDirection = ()=>{
        direction === 'Horizontal' ?(direction = 'Vertical') :(direction = 'Horizontal')
    }
    let hits = 0
    const hit = ()=>{
        hits +=1
    }
    const getHits = ()=>hits
    const isSunk = ()=>{
        if(hits === length){
             return true
        }else{
            return false
        }
    }

    return{id,length,direction,hits,getDirection,changeDirection,hit,getHits,isSunk}
}
export default ship