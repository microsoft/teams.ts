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
});
