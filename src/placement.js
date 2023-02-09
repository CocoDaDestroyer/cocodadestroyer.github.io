const placementTable = () =>{

    const tileTable = document.createElement('table');
    tileTable.setAttribute('class','center');
    for (let i = 0;i<10;i++){
        const tableRow = document.createElement('tr');
        for(let z =0;z<10;z++){
            let tableCell = document.createElement('td');
            tableCell.setAttribute('class','tile');
            tableCell.classList.add('place')
            tableRow.appendChild(tableCell);
            tableCell.dataset.coordArray = `${z},${i}`;
        }
        tileTable.appendChild(tableRow);
    }
    const table = document.querySelector('#placementTable')
    const placementHeading = document.createElement('h3')
    placementHeading.textContent = 'Place Your Ships'
    const rotateBtn = document.createElement('button')
    rotateBtn.textContent = 'Rotate'
    rotateBtn.classList.add('rotate-btn')
    table.appendChild(placementHeading)
    table.appendChild(rotateBtn)
    table.appendChild(tileTable);
}
export default placementTable