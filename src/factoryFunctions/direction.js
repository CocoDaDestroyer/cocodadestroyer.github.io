const direction = ()=>{
    let way = 'Horizontal'
    const changeDirection = ()=>{
        if(way ==='Horizontal'){
            way ='Vertical'
        }else{
            way = 'Horizontal'
        }
    }
    const obtainDirection = ()=>{
        return way
    }
    return {changeDirection,obtainDirection}
}
export default direction