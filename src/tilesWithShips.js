const coordsWithShips = (gameBoard)=>{
    const squaresWithShips =[]
    for(let i = 0;i<gameBoard.squareList.length;i++){
        let square = gameBoard.squareList[i]
        if(square.getShip() ===null){
            
        }else{
            squaresWithShips.push(square.coords)
        }
    }
    return squaresWithShips
}
export default coordsWithShips