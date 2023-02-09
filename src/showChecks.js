const showChecks = (board,type) =>{
    const redChecks = []
    const whiteChecks = []
    for(let i = 0;i<board.squareList.length;i++){
        let square = board.squareList[i]
        if(square.getCheckStatus() ===null){
            
        }else if(square.getCheckStatus() ==='red'){
            redChecks.push(square.coords)
        }else if(square.getCheckStatus() ==='white'){
            whiteChecks.push(square.coords)
        }
    }
    const tiles = document.querySelectorAll(type)
    if(type === '.enemy'){
        tiles.forEach((tile)=>{
            tile.replaceChildren()
            let coord = tile.dataset.eCoordArray
            for(let i =0;i<redChecks.length;i++){
                if(redChecks[i].toString()===coord){
                    const redCircle = document.createElement('div')
                    redCircle.classList.add('red')
                    tile.appendChild(redCircle)
                }
            }
            for(let i =0;i<whiteChecks.length;i++){
                if(whiteChecks[i].toString()===coord){
                    const whiteCircle = document.createElement('div')
                    whiteCircle.classList.add('white')
                    tile.appendChild(whiteCircle)
                }
            }
        })
    }else if(type === '.player'){
        tiles.forEach((tile)=>{
            tile.replaceChildren()
            let coord = tile.dataset.pCoordArray
            for(let i =0;i<redChecks.length;i++){
                if(redChecks[i].toString()===coord){
                    const redCircle = document.createElement('div')
                    redCircle.classList.add('red')
                    tile.appendChild(redCircle)
                }
            }
            for(let i =0;i<whiteChecks.length;i++){
                if(whiteChecks[i].toString()===coord){
                    const whiteCircle = document.createElement('div')
                    whiteCircle.classList.add('white')
                    tile.appendChild(whiteCircle)
                }
            }
        })
    }
}
export default showChecks