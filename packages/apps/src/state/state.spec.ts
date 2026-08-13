import { ILogger, IStorage, LocalStorage } from '@microsoft/teams.common';

import { TurnStateContainer } from './container';
import { createStateLoader, TurnStateLoader } from './loader';
import { TurnState, TurnStateSealedError } from './turn-state';

class TestStorage implements IStorage<string, string> {
  readonly data = new Map<string, string>();
  readonly get = jest.fn((key: string) => this.data.get(key));
  readonly set = jest.fn((key: string, value: string) => {
    this.data.set(key, value);
  });
  readonly delete = jest.fn((key: string) => {
    this.data.delete(key);
  });
}

describe('TurnState', () => {
  it('tracks only effective mutations as dirty', () => {
    const state = new TurnState({ existing: 1 });

    expect(state.isDirty).toBe(false);
    expect(state.delete('missing')).toBe(false);
    expect(state.isDirty).toBe(false);

    state.set('existing', 1);
    expect(state.isDirty).toBe(true);
  });

  it('uses snapshot iterators so mutation during iteration is safe', () => {
    const state = new TurnState({ first: 1, second: 2 });
    const visited: string[] = [];

    for (const [key] of state) {
      visited.push(key);
      state.delete(key);
    }

    expect(visited).toEqual(['first', 'second']);
    expect(state.isEmpty).toBe(true);
  });

  it('blocks access after sealing while preserving metadata and persistence snapshots', () => {
    const state = new TurnState({ value: 1 });
    state.seal();

    expect(state.isSealed).toBe(true);
    expect(state.size).toBe(1);
    expect(state.toRecord()).toEqual({ value: 1 });
    expect(() => state.get('value')).toThrow(TurnStateSealedError);
    expect(() => state.set('value', 2)).toThrow(TurnStateSealedError);
    expect(() => state.has('value')).toThrow(TurnStateSealedError);
  });
});

describe('TurnStateLoader', () => {
  it('uses the cross-SDK key format and round-trips both scopes', async () => {
    const storage = new TestStorage();
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1', 'user-1');

    state.conversation.set('shared', 1);
    state.user?.set('personal', 2);
    await loader.save(state);

    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      expect.any(String)
    );
    expect(storage.set).toHaveBeenCalledWith(
      'ts:user:conversation-1:user-1',
      expect.any(String)
    );

    const loaded = await loader.load('conversation-1', 'user-1');
    expect(loaded.conversation.get('shared')).toBe(1);
    expect(loaded.user?.get('personal')).toBe(2);
    expect(loaded.conversation.isDirty).toBe(false);
    expect(loaded.user?.isDirty).toBe(false);
  });

  it('performs no writes for clean scopes and deletes dirty empty scopes', async () => {
    const storage = new TestStorage();
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1');

    await loader.save(state);
    expect(storage.set).not.toHaveBeenCalled();
    expect(storage.delete).not.toHaveBeenCalled();

    state.conversation.set('value', 1);
    state.conversation.clear();
    await loader.save(state);
    expect(storage.delete).toHaveBeenCalledWith('ts:conv:conversation-1');
  });

  it('treats malformed and expired values as absent', async () => {
    const storage = new TestStorage();
    storage.data.set('ts:conv:malformed', '{');
    storage.data.set(
      'ts:conv:expired',
      JSON.stringify({ ts: Date.now() / 1000 - 30, data: { value: 1 } })
    );
    const loader = new TurnStateLoader(storage, { ttl: 10 });

    expect((await loader.load('malformed')).conversation.isEmpty).toBe(true);
    expect((await loader.load('expired')).conversation.isEmpty).toBe(true);
  });

  it('omits user state when no user ID is available', async () => {
    const storage = new TestStorage();
    const state = await new TurnStateLoader(storage).load('conversation-1');

    expect(state.user).toBeUndefined();
    expect(storage.get).toHaveBeenCalledTimes(1);
  });

  it('deletes backing state before clearing memory and allows later persistence', async () => {
    const storage = new TestStorage();
    const loader = new TurnStateLoader(storage);
    const state = new TurnStateContainer(
      new TurnState({ shared: 1 }),
      'conversation-1',
      (conversationId, userId) => loader.delete(conversationId, userId),
      new TurnState({ personal: 2 }),
      'user-1'
    );

    await state.delete();
    expect(state.conversation.isEmpty).toBe(true);
    expect(state.conversation.isDirty).toBe(false);
    expect(state.user?.isDirty).toBe(false);

    state.conversation.set('new', 3);
    await loader.save(state);
    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      expect.any(String)
    );
  });
});

describe('createStateLoader', () => {
  const logger = {
    warn: jest.fn(),
  } as unknown as ILogger;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('disables state for omitted and false options', () => {
    const storage = new TestStorage();
    expect(createStateLoader(undefined, storage, logger)).toBeUndefined();
    expect(createStateLoader(false, storage, logger)).toBeUndefined();
  });

  it('warns when state resolves to process-local storage', () => {
    createStateLoader(true, new LocalStorage(), logger);
    expect(logger.warn).toHaveBeenCalledTimes(1);
  });

  it('uses dedicated state storage without warning', () => {
    const stateStorage = new TestStorage();
    const loader = createStateLoader(
      { storage: stateStorage, keyPrefix: 'custom' },
      new LocalStorage(),
      logger
    );

    expect(loader?.conversationKey('id')).toBe('custom:conv:id');
    expect(logger.warn).not.toHaveBeenCalled();
  });
});
