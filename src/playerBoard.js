const playerBoard = ()=>{
    const tileTable = document.createElement('table');
    tileTable.setAttribute('class','center');
    for (let i = 0;i<10;i++){
        const tableRow = document.createElement('tr');
        for(let z =0;z<10;z++){
            let tableCell = document.createElement('td');
            tableCell.setAttribute('class','tile');
            tableCell.classList.add('player')
            tableRow.appendChild(tableCell);
            tableCell.dataset.pCoordArray = `${z},${i}`;
        }
        tileTable.appendChild(tableRow);
    }
    const table = document.querySelector('#playerTable')
    const playerHeading = document.createElement('h3')
    playerHeading.textContent = 'Player Board'
    table.appendChild(playerHeading)
    table.appendChild(tileTable);
}
export default playerBoard