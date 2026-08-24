import { ILogger, IStorage } from '@microsoft/teams.common';

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

  it('keeps mutable reads clean until the value is explicitly set', () => {
    const state = new TurnState({
      feature: { count: 1 },
    });
    const feature = state.get<{ count: number }>('feature');

    if (feature) {
      feature.count++;
    }
    expect(state.isDirty).toBe(false);

    state.set('feature', feature);
    expect(state.isDirty).toBe(true);
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
    await loader.save(state, 'conversation-1', 'user-1');

    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      '{"shared":1}'
    );
    expect(storage.set).toHaveBeenCalledWith(
      'ts:user:conversation-1:user-1',
      '{"personal":2}'
    );

    const loaded = await loader.load('conversation-1', 'user-1');
    expect(loaded.conversation.get('shared')).toBe(1);
    expect(loaded.user?.get('personal')).toBe(2);
    expect(loaded.conversation.isDirty).toBe(false);
    expect(loaded.user?.isDirty).toBe(false);
  });

  it('encodes IDs as distinct storage-key segments', () => {
    const loader = new TurnStateLoader(new TestStorage());

    expect(loader.conversationKey('a:b/c')).toBe('ts:conv:a%3Ab%2Fc');
    expect(loader.userKey('a:b', 'c')).toBe('ts:user:a%3Ab:c');
    expect(loader.userKey('a', 'b:c')).toBe('ts:user:a:b%3Ac');
    expect(loader.userKey('conversation', 'user!\'()* \u2603')).toBe(
      'ts:user:conversation:user%21%27%28%29%2A%20%E2%98%83'
    );
  });

  it('performs no writes for clean scopes and deletes dirty empty scopes', async () => {
    const storage = new TestStorage();
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1');

    await loader.save(state, 'conversation-1');
    expect(storage.set).not.toHaveBeenCalled();
    expect(storage.delete).not.toHaveBeenCalled();

    state.conversation.set('value', 1);
    state.conversation.clear();
    await loader.save(state, 'conversation-1');
    expect(storage.delete).toHaveBeenCalledWith('ts:conv:conversation-1');
    expect(state.conversation.isDirty).toBe(false);

    await loader.save(state, 'conversation-1');
    expect(storage.delete).toHaveBeenCalledTimes(1);
  });

  it('cleans successful scopes while leaving a failed scope dirty for retry', async () => {
    const storage = new TestStorage();
    const userKey = 'ts:user:conversation-1:user-1';
    storage.set.mockImplementation((key, value) => {
      if (key === userKey) {
        throw new Error('user save failed');
      }
      storage.data.set(key, value);
    });
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1', 'user-1');
    state.conversation.set('shared', 1);
    state.user?.set('personal', 2);

    await expect(
      loader.save(state, 'conversation-1', 'user-1')
    ).rejects.toThrow('user save failed');

    expect(state.conversation.isDirty).toBe(false);
    expect(state.user?.isDirty).toBe(true);

    storage.set.mockImplementation((key, value) => {
      storage.data.set(key, value);
    });
    storage.set.mockClear();
    await loader.save(state, 'conversation-1', 'user-1');

    expect(storage.set).toHaveBeenCalledTimes(1);
    expect(storage.set).toHaveBeenCalledWith(userKey, '{"personal":2}');
    expect(state.user?.isDirty).toBe(false);
  });

  it.each(['not json', '[]', 'null', '1'])(
    'treats invalid stored value %p as absent',
    async (value) => {
      const storage = new TestStorage();
      storage.data.set('ts:conv:invalid', value);
      const loader = new TurnStateLoader(storage);

      expect((await loader.load('invalid')).conversation.isEmpty).toBe(true);
    }
  );

  it('warns without logging malformed persisted data', async () => {
    const storage = new TestStorage();
    const logger = {
      warn: jest.fn(),
    } as unknown as ILogger;
    storage.data.set('ts:conv:invalid', 'sensitive malformed value');
    const loader = new TurnStateLoader(storage, {}, logger);

    expect((await loader.load('invalid')).conversation.isEmpty).toBe(true);
    expect(logger.warn).toHaveBeenCalledWith(
      'Ignoring malformed persisted turn state; expected a JSON object string.'
    );
    expect(logger.warn).not.toHaveBeenCalledWith(
      expect.stringContaining('sensitive malformed value')
    );
  });

  it('rejects state that cannot be serialized as JSON', async () => {
    const storage = new TestStorage();
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1');
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    state.conversation.set('circular', circular);

    await expect(loader.save(state, 'conversation-1')).rejects.toThrow(TypeError);
    expect(storage.set).not.toHaveBeenCalled();
  });

  it('omits user state when no user ID is available', async () => {
    const storage = new TestStorage();
    const state = await new TurnStateLoader(storage).load('conversation-1');

    expect(state.user).toBeUndefined();
    expect(storage.get).toHaveBeenCalledTimes(1);
  });

  it('isolates each loaded turn and the serialized saved value', async () => {
    const storage = new TestStorage();
    storage.data.set(
      'ts:conv:conversation-1',
      '{"feature":{"count":1}}'
    );
    const loader = new TurnStateLoader(storage);
    const first = await loader.load('conversation-1');
    const firstFeature = first.conversation.get<{ count: number }>('feature');
    if (firstFeature) {
      firstFeature.count = 2;
    }

    const second = await loader.load('conversation-1');
    expect(
      second.conversation.get<{ count: number }>('feature')
    ).toEqual({ count: 1 });

    first.conversation.set('feature', firstFeature);
    await loader.save(first, 'conversation-1');
    if (firstFeature) {
      firstFeature.count = 3;
    }
    expect(storage.data.get('ts:conv:conversation-1')).toBe(
      '{"feature":{"count":2}}'
    );
  });

  it('deletes backing state before clearing memory and allows later persistence', async () => {
    const storage = new TestStorage();
    storage.data.set('ts:conv:conversation-1', '{"shared":1}');
    storage.data.set('ts:user:conversation-1:user-1', '{"personal":2}');
    const loader = new TurnStateLoader(storage);
    const state = await loader.load('conversation-1', 'user-1');

    await state.delete();
    expect(storage.data.has('ts:conv:conversation-1')).toBe(false);
    expect(storage.data.has('ts:user:conversation-1:user-1')).toBe(false);
    expect(state.conversation.isEmpty).toBe(true);
    expect(state.conversation.isDirty).toBe(false);
    expect(state.user?.isDirty).toBe(false);

    state.conversation.set('new', 3);
    await loader.save(state, 'conversation-1', 'user-1');
    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      '{"new":3}'
    );
  });

  it('rejects deletion for a manually constructed container', async () => {
    const state = new TurnStateContainer(new TurnState({ shared: 1 }));

    await expect(state.delete()).rejects.toThrow(
      'State deletion is not available for a container that was not loaded by the app.'
    );
    expect(state.conversation.get('shared')).toBe(1);
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
    expect(createStateLoader(undefined, logger)).toBeUndefined();
    expect(createStateLoader(false, logger)).toBeUndefined();
  });

  it('uses dedicated process-local storage by default and warns', () => {
    const loader = createStateLoader(true, logger);

    expect(loader).toBeDefined();
    expect(logger.warn).toHaveBeenCalledTimes(1);
  });

  it('uses dedicated state storage without warning', () => {
    const stateStorage = new TestStorage();
    const loader = createStateLoader(
      { storage: stateStorage, keyPrefix: 'custom' },
      logger
    );

    expect(loader?.conversationKey('id')).toBe('custom:conv:id');
    expect(logger.warn).not.toHaveBeenCalled();
  });
});
