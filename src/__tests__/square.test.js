import square from "../factoryFunctions/square"
import ship from "../factoryFunctions/ship"
test("initial property tests",()=>{
    const squareTest = square([0,0])
    expect(squareTest.coords).toStrictEqual([0,0])
    expect(squareTest.getShip()).toBe(null)
    expect(squareTest.getCheckStatus()).toBe(null)
})

describe('square function tests',()=>{
    const squareTest = square([0,0])
    let carrier = ship('Carrier')
    squareTest.addShip(carrier)
    squareTest.check()
    test('addShip test',()=>{
        expect(squareTest.getShip().id).toBe('Carrier')
    })
    test('check test',()=>{
        expect(squareTest.getCheckStatus()).toBe('red')
    })
    test('hit works',()=>{
        expect(squareTest.getShip().getHits())
    })
})