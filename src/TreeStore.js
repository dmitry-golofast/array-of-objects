class TreeStore {
    constructor(items) {
        this.itemMap = {};
        items.forEach(item => {
            if (!this.itemMap[item.id]) {
                this.itemMap[item.id] = {
                    ...item,
                    children: [],
                };
            }
        });
        items.forEach(item => {
            if (item.parent !== 'root') {
                this.itemMap[item.parent].children.push(this.itemMap[item.id]);
            }
        });
    }

    getAll() {
        return Object.values(this.itemMap);
    }

    getItem(id) {
        return this.itemMap[id];
    }

    getChildren(id) {
        const item = this.itemMap[id];
        return item ? item.children : [];
    }

    getAllChildren(id) {
        const result = [];

        const traverse = (item) => {
            result.push(item);
            item.children.forEach(child => traverse(child));
        };

        const item = this.itemMap[id];
        if (item) {
            traverse(item);
        }

        return result;
    }

    getAllParents(id) {
        const result = [];

        const traverse = (item) => {
            result.unshift(item);
            if (item.parent !== 'root') {
                traverse(this.itemMap[item.parent]);
            }
        };

        const item = this.itemMap[id];
        if (item) {
            traverse(item);
        }

        return result;
    }
}

const items = [
    {id: 1, parent: 'root'},
    {id: 2, parent: 1, type: 'test'},
    {id: 3, parent: 1, type: 'test'},
    {id: 4, parent: 2, type: 'test'},
    {id: 5, parent: 2, type: 'test'},
    {id: 6, parent: 2, type: 'test'},
    {id: 7, parent: 4, type: null},
    {id: 8, parent: 4, type: null},
];

const ts = new TreeStore(items);

console.log(ts.getAll());
console.log(ts.getItem(2));
console.log(ts.getChildren(2));
console.log(ts.getAllChildren(2));
console.log(ts.getAllParents(7));

export default TreeStore;


