import { ListLocalStorage } from './list-local-storage';

describe('ListLocalStorage', () => {
    it('should get undefined for empty index', () => {
        const storage = new ListLocalStorage();
        expect(storage.get(0)).toBeUndefined();
    });

    it('should push and get values', () => {
        const storage = new ListLocalStorage<number>();
        storage.push(1);
        storage.push(2);
        expect(storage.get(0)).toEqual(1);
        expect(storage.get(1)).toEqual(2);
        expect(storage.length()).toEqual(2);
    });

    it('should set and overwrite values', () => {
        const storage = new ListLocalStorage<number>([1, 2, 3]);
        storage.set(1, 42);
        expect(storage.get(1)).toEqual(42);
        expect(storage.values()).toEqual([1, 42, 3]);
    });

    it('should delete values by index', () => {
        const storage = new ListLocalStorage<number>([1, 2, 3]);
        storage.delete(1);
        expect(storage.values()).toEqual([1, 3]);
        expect(storage.length()).toEqual(2);
    });

    it('should pop values', () => {
        const storage = new ListLocalStorage<number>([1, 2, 3]);
        expect(storage.pop()).toEqual(3);
        expect(storage.values()).toEqual([1, 2]);
        expect(storage.length()).toEqual(2);
    });

    it('should return all values', () => {
        const storage = new ListLocalStorage<number>([1, 2, 3]);
        expect(storage.values()).toEqual([1, 2, 3]);
    });

    it('should filter values with where', () => {
        const storage = new ListLocalStorage<number>([1, 2, 3, 4]);
        const even = storage.where((v) => v % 2 === 0);
        expect(even).toEqual([2, 4]);
    });

    it('should handle mixed operations', () => {
        const storage = new ListLocalStorage<string>();
        storage.push('a');
        storage.push('b');
        storage.push('c');
        expect(storage.values()).toEqual(['a', 'b', 'c']);
        storage.set(1, 'B');
        expect(storage.get(1)).toEqual('B');
        storage.delete(0);
        expect(storage.values()).toEqual(['B', 'c']);
        storage.pop();
        expect(storage.values()).toEqual(['B']);
        expect(storage.length()).toEqual(1);
    });
}); 