export default class FoodModel {
    constructor () {
        this.loadItems();
        this.filter();
    }
    loadItems () {
        this.items =  [
            {
                id : 1,
                name : 'Dal',
                price : 100,
                tags : ['liquid', 'indian', 'dal'],
                img : 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/10/dhaba-style-dal-fry-recipe-11.jpg'
            },
            {
                id : 2,
                name : 'Paneer',
                price : 200,
                tags : ['liquid', 'indian', 'milk', 'paneer'],
                img : 'https://www.whiskaffair.com/wp-content/uploads/2018/03/Paneer-Lababdar-5.jpg'
            },
            {
                id : 3,
                name : 'Pasta',
                price : 220,
                tags : ['liquid', 'italian', 'milk', 'pasta'],
                img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                id : 4,
                name : 'Bhindi',
                price : 150,
                tags : ['solid', 'indian', 'green', 'bhindi'],
                img : 'https://images-na.ssl-images-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg'
            },
            {
                id : 5,
                name : 'Burger',
                price : 120,
                tags : ['solid', 'american', 'fast', 'burger'],
                img : 'https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-260nw-705104968.jpg'
            }
        ];
    }
    filter (tags) {
        if (!tags || tags === [] || (tags.length === 1 && tags[0] === '')) {
            this.filteredItems = this.items;
        } else {
            this.filteredItems = [];
            this.items.forEach(item => {
                let contains = false;
                tags.forEach(tag => {
                    if (item.tags.includes(tag)) {
                        contains = true;
                    }
                });
                if (contains) this.filteredItems.push(item);
            });
        }
    }
    getFilteredItems () {
        return this.filteredItems;
    }
}