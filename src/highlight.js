const highlights = (length, direction) => {
    function highlight(tile, length, direction) {
        let coords = tile.dataset.coordArray.split(',').map(Number);
        if (direction === 'Horizontal') {
            for (let i = 0; i < length; i++) {
                let newCoords = [coords[0] , coords[1]+i];
                let hoveredTile = document.querySelector(`td[data-coord-array="${newCoords}"]`);
                if (hoveredTile) {
                    hoveredTile.classList.add('hovered');
                }
            }
        }
        if (direction === 'Vertical') {
            for (let i = 0; i < length; i++) {
                let newCoords = [coords[0]+i, coords[1]];
                let hoveredTile = document.querySelector(`td[data-coord-array="${newCoords}"]`);
                if (hoveredTile) {
                    hoveredTile.classList.add('hovered');
                }
            }
        }
    }
    const tiles = document.querySelectorAll('td');
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', () => {
            tiles.forEach((tile) => {
                tile.classList.remove('hovered');
            });
            highlight(tile, length, direction);
        });
    });
};
export default highlights

