import { IListStorage } from './storage';

/**
 * An in-memory list storage.
 */
export class ListLocalStorage<T = any> implements IListStorage<T> {
    protected readonly _list: T[];

    constructor(data: T[] = []) {
        this._list = [...data];
    }

    get(key: number): T | undefined {
        return this._list[key];
    }

    set(key: number, value: T): void {
        this._list[key] = value;
    }

    delete(key: number): void {
        this._list.splice(key, 1);
    }

    push(value: T): void {
        this._list.push(value);
    }

    pop(): T | undefined {
        return this._list.pop();
    }

    values(): T[] {
        return [...this._list];
    }

    length(): number {
        return this._list.length;
    }

    where(predicate: (value: T, index: number) => boolean): T[] {
        return this._list.filter(predicate);
    }
}
