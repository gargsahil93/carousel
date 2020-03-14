import FoodModel from "./FoodModel";

window.onload = () => {
    let model = new FoodModel();
    let makeTile = (item) => {
        if (!item) return '';
        return `
            <div class="tile">
                <div class="tile-image" style="background-image: url(${item.img})">
                    ${item.name}
                </div>
                <div class="tile-price">${item.price}</div>
            </div>
        `;
    };
    let items = model.getFilteredItems();
    let centerIndex = 1;
    let renderView = () => {
        let leftTile = makeTile(items[centerIndex-1]);
        let centerTile = makeTile(items[centerIndex]);
        let rightTile = makeTile(items[centerIndex+1]);
        document.getElementById('left-tile').innerHTML = leftTile;
        document.getElementById('center-tile').innerHTML = centerTile;
        document.getElementById('right-tile').innerHTML = rightTile;
    };
    renderView();

    let initListeneres = () => {
        document.getElementById('left-navigate').addEventListener('click', () => {
            centerIndex--;
            if (centerIndex === -1) {
                centerIndex = 0;
            }
            renderView(centerIndex);
        });
        document.getElementById('right-navigate').addEventListener('click', () => {
            centerIndex++;
            if (centerIndex === items.length) {
                centerIndex = items.length - 1;
            }
            renderView(centerIndex);
        });
        document.getElementById('search').addEventListener('click', () => {
            let searchStr = document.getElementById('search-box').value;
            let tags = searchStr.split(',');
            model.filter(tags);
            items = model.getFilteredItems();
            if (items.length > 2) centerIndex = 1;
            else centerIndex = 0;
            renderView();
        });
        document.getElementById('clear').addEventListener('click', () => {
            document.getElementById('search-box').value = '';
            model.filter();
            items = model.getFilteredItems();
            centerIndex = 1;
            renderView();
        });
    };
    initListeneres();

}