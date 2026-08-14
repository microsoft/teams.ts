import { ILogger, IStorage, LocalStorage } from '@microsoft/teams.common';

import { TurnStateContainer } from './container';
import { createStateLoader, TurnStateLoader } from './loader';
import { TurnState, TurnStateSealedError } from './turn-state';

class TestStorage implements IStorage<string, Record<string, unknown>> {
  readonly data = new Map<string, Record<string, unknown>>();
  readonly get = jest.fn((key: string) => this.data.get(key));
  readonly set = jest.fn((key: string, value: Record<string, unknown>) => {
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
    await loader.save(state);

    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      { shared: 1 }
    );
    expect(storage.set).toHaveBeenCalledWith(
      'ts:user:conversation-1:user-1',
      { personal: 2 }
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

  it('treats invalid stored values as absent', async () => {
    const storage = new TestStorage();
    storage.data.set(
      'ts:conv:invalid',
      [] as unknown as Record<string, unknown>
    );
    const loader = new TurnStateLoader(storage);

    expect((await loader.load('invalid')).conversation.isEmpty).toBe(true);
  });

  it('passes storage options through unchanged on writes', async () => {
    const storage = new TestStorage();
    const storageOptions = {
      consistency: 'strong',
      partition: 'state',
    };
    const loader = new TurnStateLoader(storage, { storageOptions });
    const state = await loader.load('conversation-1');
    state.conversation.set('value', 1);

    await loader.save(state);

    expect(storage.set).toHaveBeenCalledWith(
      'ts:conv:conversation-1',
      { value: 1 },
      storageOptions
    );
  });

  it('omits user state when no user ID is available', async () => {
    const storage = new TestStorage();
    const state = await new TurnStateLoader(storage).load('conversation-1');

    expect(state.user).toBeUndefined();
    expect(storage.get).toHaveBeenCalledTimes(1);
  });

  it('isolates loaded and saved state from provider-owned object references', async () => {
    const storage = new TestStorage();
    storage.data.set('ts:conv:conversation-1', {
      feature: { count: 1 },
    });
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
    await loader.save(first);
    if (firstFeature) {
      firstFeature.count = 3;
    }
    expect(storage.data.get('ts:conv:conversation-1')).toEqual({
      feature: { count: 2 },
    });
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
      { new: 3 }
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
