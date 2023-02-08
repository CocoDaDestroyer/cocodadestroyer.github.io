import ship from "./ship"
const square = (coordArr)=>{
    const coords =coordArr
    var shipType = null
    const addShip = (object)=>{
        shipType = object
    }
    const getShip = ()=>{
        return shipType
    }
    var checkStatus = null
    const check = ()=>{
        if(shipType === null){
            checkStatus = 'white'
        }else{
            checkStatus = 'red'
            getShip().hit()
        }
    }
    const getCheckStatus = ()=>{
        return checkStatus
    }
    return{coords,ship,addShip,getShip,checkStatus,check,getCheckStatus}
}
export default square