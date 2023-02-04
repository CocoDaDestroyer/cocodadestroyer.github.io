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
        if (coordArr[0] < 6 && coordArr[1] < 6) {
            const newShip = ship(type);
            const length = newShip.length;
            shipDict[type] = newShip;

            if (direction === "Vertical") {
                for (let i = 0; i < length; i++) {
                    const index = coordArr[0] + coordArr[0] * 10 + i * 10;
                    const shipSquare = squareList[index];
                    shipSquare.addShip(newShip);
                }
            } else if (direction === "Horizontal") {
                for (let i = 0; i < length; i++) {
                    const index = coordArr[1] * 10 + coordArr[0] + i;
                    const shipSquare = squareList[index];
                    shipSquare.addShip(newShip);
                }
            }
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