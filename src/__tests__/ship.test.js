import ship from "../factoryFunctions/ship"
describe('ships property tests',()=>{
    const shipTest = ship('Destroyer')
    test("id",()=>{
        expect(shipTest.id).toBe('Destroyer')
    })
    test("length",()=>{
        expect(shipTest.length).toBe(3)
    })
    test("direction",()=>{
        expect(shipTest.getDirection()).toBe('Horizontal')
    })
    test("change direction",()=>{
        shipTest.changeDirection()
        expect(shipTest.getDirection()).toBe('Vertical')
    })
})
describe('ship health',()=>{
    const shipTest = ship('Carrier')
    shipTest.hit()
    shipTest.hit()
    shipTest.hit()
    shipTest.hit()
    shipTest.hit()
    test('hit function',()=>{
        expect(shipTest.getHits()).toBe(5)
    })
    test('sink function', ()=>{
        expect(shipTest.isSunk()).toBe(true)
    })
})
