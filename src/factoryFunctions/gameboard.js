import square from "./square";
import ship from "./ship";

const gameBoard = () => {
    const shipDict = {};
    const squareList = [];

    for (let i = 0; i < 10; i++) {
        for (let z = 0; z < 10; z++) {
            const squareThing = square([z, i]);
            squareList.push(squareThing);
        }
    }

    const placeShip = (type, coordArr, direction) => {
        const shipLengths = {
            Carrier:5,
            Battleship:4,
            Destroyer:3,
            Cruiser:3,
            PatrolBoat:2
        }
    
        if ((direction === 'Horizontal'&&coordArr[1] + shipLengths[type]-1 < 10&& coordArr[0] < 10)||(direction === 'Vertical' && coordArr[1]<10 && coordArr[0] + shipLengths[type]-1<10)) {
            const newShip = ship(type);
            const length = newShip.length;
            shipDict[type] = newShip;
    
            if (direction === "Horizontal") {
                for (let i = 0; i < length; i++) {
                    const index = (coordArr[1]+i)*10+coordArr[0];
                    const shipSquare = squareList[index];
                    if(shipSquare.getShip() ===null){
                        shipSquare.addShip(newShip);
                    }else{
                        return false
                    }
                }
            } else if (direction === "Vertical") {
                for (let i = 0; i < length; i++) {
                    const index = coordArr[1]*10+coordArr[0]+i;
                    const shipSquare = squareList[index];
                    if(shipSquare.getShip() ===null){
                        shipSquare.addShip(newShip);
                    }else{
                        return false
                    }
                }
            }
        }else{
            return false
        }
    };

    const getShip = type => {
        return shipDict[type];
    };

    const getShipOnSquare = coordArr => {
        const index = coordArr[0] + coordArr[1] * 10;
        const lookedSquare = squareList[index];
        return lookedSquare.getShip();
    };

    const receiveAttack = coordArr => {
        const index = coordArr[0] + coordArr[1] * 10;
        const attackedSquare = squareList[index];
        const status = attackedSquare.getCheckStatus();
        if (status === null) {
            attackedSquare.check()
        } else {
            return status;
        }
    };

    const isDefeat = () => {
        const shipList = Object.values(shipDict);
        return shipList.every(ship => ship.isSunk());
    };

    return { squareList, placeShip, getShip, receiveAttack, isDefeat, getShipOnSquare };
};

export default gameBoard;