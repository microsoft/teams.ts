import { EventEmitter, ILogger } from '@microsoft/teams.common';

import { EventManager } from './app.events';
import { IActivitySentEvent } from './events';
import { AppEvents, IPlugin } from './types';

describe('EventManager.onActivitySent', () => {
  const event = { activity: { id: 'sent-1' } } as unknown as IActivitySentEvent;

  const setup = (plugins: Partial<IPlugin>[]) => {
    const log = { error: jest.fn() } as unknown as ILogger & { error: jest.Mock };
    const events = new EventEmitter<AppEvents<IPlugin>>(log);
    const manager = new EventManager<IPlugin>(events, plugins as IPlugin[], log);
    return { log, events, manager };
  };

  it('still notifies later plugins and the activity.sent listeners when a plugin hook fails', async () => {
    const later = jest.fn();
    const listener = jest.fn();
    const { log, events, manager } = setup([
      { onActivitySent: jest.fn().mockRejectedValue(new Error('plugin failed')) },
      { onActivitySent: later },
    ]);
    events.on('activity.sent', listener);

    await expect(manager.onActivitySent(event)).resolves.toBeUndefined();

    expect(later).toHaveBeenCalledWith(event);
    expect(listener).toHaveBeenCalledWith(event);
    expect(log.error).toHaveBeenCalledWith('plugin onActivitySent failed', expect.objectContaining({ message: 'plugin failed' }));
  });

  it('waits for async activity.sent listeners and logs their rejections without rejecting', async () => {
    const { log, events, manager } = setup([]);
    events.on('activity.sent', async () => {
      await Promise.resolve();
      throw new Error('listener failed');
    });

    await expect(manager.onActivitySent(event)).resolves.toBeUndefined();

    expect(log.error).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ message: 'listener failed' }));
  });
});
