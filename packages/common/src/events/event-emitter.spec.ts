import { EventEmitter } from './event-emitter';

describe('EventEmitter', () => {
  it('should subscribe to event', (done) => {
    const ev = new EventEmitter();

    ev.on('testing', (value: string) => {
      expect(value).toEqual('123');
      done();
    });

    ev.emit('testing', '123');
  });

  it('should subscribe to event once', (done) => {
    const ev = new EventEmitter();

    ev.once('testing', (value: string) => {
      expect(value).toEqual('123');
      done();
    });

    ev.emit('testing', '123');
  });

  it('should unsubscribe to event', (done) => {
    const ev = new EventEmitter();
    const id = ev.on('testing', (value: string) => {
      expect(value).toEqual('123');
      ev.off(id);
      expect((ev as any).subscriptions.get('testing')).toHaveLength(0);
      done();
    });

    ev.emit('testing', '123');
  });

  it('should do nothing when subscription not found', () => {
    const ev = new EventEmitter();

    ev.once('testing', (_: string) => {});

    ev.off(100);
    expect((ev as any).subscriptions.size).toEqual(1);
    expect((ev as any).subscriptions.get('testing')).toHaveLength(1);
  });

  it('should do nothing when emit with no subscriptions', () => {
    const ev = new EventEmitter();

    ev.emit('testing', '123');
    const id = ev.on('testing', (_: string) => {});

    ev.off(id);
    expect((ev as any).subscriptions.get('testing')).toHaveLength(0);
  });

  describe('emitAsync', () => {
    const createLogger = () => ({ error: jest.fn() } as any);

    it('should wait for every async handler and run them concurrently', async () => {
      const ev = new EventEmitter();
      const calls: string[] = [];

      ev.on('testing', async (value: string) => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        calls.push(`slow:${value}`);
      });
      ev.on('testing', async (value: string) => {
        calls.push(`fast:${value}`);
      });

      await ev.emitAsync('testing', '123');

      // Concurrent, so the slow handler finishes last, but emitAsync waits
      // for both.
      expect(calls).toEqual(['fast:123', 'slow:123']);
    });

    it('should log a rejected handler and still run the others', async () => {
      const logger = createLogger();
      const ev = new EventEmitter(logger);
      const error = new Error('boom');
      const other = jest.fn();

      ev.on('testing', async () => {
        await Promise.resolve();
        throw error;
      });
      ev.on('testing', other);

      await expect(ev.emitAsync('testing', '123')).resolves.toBeUndefined();

      expect(other).toHaveBeenCalledWith('123');
      expect(logger.error).toHaveBeenCalledWith(
        'event handler failed for "testing"',
        error
      );
    });

    it('should log a synchronously thrown handler and still run the others', async () => {
      const logger = createLogger();
      const ev = new EventEmitter(logger);
      const error = new Error('sync boom');
      const other = jest.fn();

      ev.on('testing', () => {
        throw error;
      });
      ev.on('testing', other);

      await expect(ev.emitAsync('testing', '123')).resolves.toBeUndefined();

      expect(other).toHaveBeenCalledWith('123');
      expect(logger.error).toHaveBeenCalledWith(
        'event handler failed for "testing"',
        error
      );
    });

    it('should fall back to console when no logger is provided', async () => {
      const ev = new EventEmitter();
      const error = new Error('boom');
      const consoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(() => { });

      ev.on('testing', async () => {
        throw error;
      });

      await expect(ev.emitAsync('testing', '123')).resolves.toBeUndefined();

      expect(consoleError).toHaveBeenCalledWith(
        'event handler failed for "testing"',
        error
      );
      consoleError.mockRestore();
    });

    it('should await a once handler and still invoke the remaining handlers', async () => {
      const ev = new EventEmitter();
      const calls: string[] = [];

      ev.once('testing', async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        calls.push('once');
      });
      ev.on('testing', async () => {
        calls.push('on');
      });

      const pending = ev.emitAsync('testing', '123');
      // The slow one-shot handler has not resumed past its await yet.
      expect(calls).not.toContain('once');

      await pending;

      expect(calls.sort()).toEqual(['on', 'once']);
      expect((ev as any).subscriptions.get('testing')).toHaveLength(1);
    });

    it('should do nothing when there are no subscriptions', async () => {
      const ev = new EventEmitter();

      await expect(ev.emitAsync('testing', '123')).resolves.toBeUndefined();
    });
  });
});
