import { LocalStorage } from './local-storage';

describe('LocalStorage', () => {
  it('should get undefined', () => {
    const storage = new LocalStorage();
    expect(storage.get('test')).toBeUndefined();
  });

  it('should set/get/delete key/value', () => {
    const storage = new LocalStorage();
    storage.set('testing', '123');
    expect(storage.get('testing')).toEqual('123');
    storage.delete('testing');
    expect(storage.get('testing')).toBeUndefined();
  });

  describe('max', () => {
    it('should remove oldest key to retain max length', () => {
      const storage = new LocalStorage(undefined, { max: 3 });

      storage.set('a', 1);
      storage.set('b', 2);
      storage.set('c', 3);

      expect(storage.get('a')).toEqual(1);
      expect(storage.get('b')).toEqual(2);
      expect(storage.get('c')).toEqual(3);
      expect(storage.keys).toStrictEqual(['a', 'b', 'c']);
      expect(storage.size).toEqual(3);

      storage.set('d', 4);

      expect(storage.get('a')).toBeUndefined();
      expect(storage.get('b')).toEqual(2);
      expect(storage.get('c')).toEqual(3);
      expect(storage.get('d')).toEqual(4);
      expect(storage.keys).toStrictEqual(['b', 'c', 'd']);
      expect(storage.size).toEqual(3);
      expect(storage.toString()).toEqual(
        JSON.stringify(
          [
            { key: 'b', value: 2 },
            { key: 'c', value: 3 },
            { key: 'd', value: 4 },
          ],
          null,
          2
        )
      );
    });
  });
});
