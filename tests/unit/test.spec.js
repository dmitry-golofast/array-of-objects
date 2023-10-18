import TreeStore from '@/TreeStore';

describe('TreeStore', () => {
    it('Должен вернуть все элементы', () => {
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
        const treeStore = new TreeStore(items);

        const allItems = treeStore.getAll();
        expect(allItems).toHaveLength(items.length);
    });

    it('Должен вернуть элемент по ID', () => {
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
        const treeStore = new TreeStore(items);

        const item = treeStore.getItem(2);
        expect(item.id).toBe(2);
    });
});
