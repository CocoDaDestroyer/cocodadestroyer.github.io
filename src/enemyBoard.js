const enemyBoard = ()=>{
    const tileTable = document.createElement('table');
    tileTable.setAttribute('class','center');
    for (let i = 0;i<10;i++){
        const tableRow = document.createElement('tr');
        for(let z =0;z<10;z++){
            let tableCell = document.createElement('td');
            tableCell.setAttribute('class','tile');
            tableCell.classList.add('enemy')
            tableRow.appendChild(tableCell);
            tableCell.dataset.eCoordArray = `${z},${i}`;
        }
        tileTable.appendChild(tableRow);
    }
    const table = document.querySelector('#enemyTable')
    const enemyHeading = document.createElement('h3')
    enemyHeading.textContent = 'Enemy Board'
    table.appendChild(enemyHeading)
    table.appendChild(tileTable);
}
export default enemyBoard