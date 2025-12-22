import { HttpStream } from './stream';

describe('HttpStream', () => {
  let client: any;
  let ref: any;
  let logger: any;

  beforeEach(() => {
    client = {
      conversations: {
        activities: jest.fn().mockReturnValue({
          create: jest.fn(),
          update: jest.fn(),
        }),
      },
    };

    ref = {
      bot: { id: 'bot', name: 'Bot' },
      conversation: { id: 'conversation-id' },
    };

    logger = {
      debug: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      child: () => logger,
    };
  });

  jest.useFakeTimers();

  function mockCreate(successAfter = 0) {
    let calls = 0;
    client.conversations.activities().create.mockImplementation(
      async (_activity: any) => {
        calls++;
        if (calls <= successAfter) {
          throw new Error('timeout');
        }

        return { _activity, id: `activity-${calls}` };
      }
    );
    return () => calls;
  }

  test('stream multiple emits with timer', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    for (let i = 0; i < 12; i++) {
      stream.emit(`Message ${i + 1}`);
    }

    // Initial emit triggers immediate flush
    expect(client.conversations.activities().create).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(200);
    // next flush will be after 500ms, so no new calls yet
    expect(client.conversations.activities().create).toHaveBeenCalledTimes(1);
    stream.emit('Message 13');

    await jest.advanceTimersByTimeAsync(300);
    // 500ms passed since first emit, second flush should happen
    expect(client.conversations.activities().create).toHaveBeenCalledTimes(2);
    stream.emit('Message 14');

    await jest.advanceTimersByTimeAsync(500);
    // another 500ms passed, third flush should happen
    expect(client.conversations.activities().create).toHaveBeenCalledTimes(3);

    const calls = client.conversations.activities().create.mock.calls;
    expect(calls[0][0].text).toBe('Message 1');
    expect(calls[1][0].text).toBe('Message 1Message 2Message 3Message 4Message 5Message 6Message 7Message 8Message 9Message 10Message 11');
    expect(calls[2][0].text).toBe('Message 1Message 2Message 3Message 4Message 5Message 6Message 7Message 8Message 9Message 10Message 11Message 12Message 13Message 14');
  });


  test('stream error handled gracefully', async () => {
    mockCreate(1);
    const stream = new HttpStream(client, ref, logger);

    stream.emit('Test message');
    expect(client.conversations.activities().create).toHaveBeenCalledTimes(1);

    // retry after 500ms
    await jest.advanceTimersByTimeAsync(500);

    expect(client.conversations.activities().create).toHaveBeenCalledTimes(2);
    const calls = client.conversations.activities().create.mock.calls;
    expect(calls[0][0].text).toBe('Test message');
    expect(calls[1][0].text).toBe('Test message');
    const res = await stream.close();
    expect(res).toBeDefined();
  });

  test('update sends typing activity', async () => {

    const stream = new HttpStream(client, ref, logger);

    stream.update('Thinking...');

    // resolve promise microtask queue
    await jest.runAllTicks();

    const calls = client.conversations.activities().create.mock.calls;
    expect(calls[0][0].type).toBe('typing');
    expect(calls[0][0].text).toBe('Thinking...');
    expect(calls[0][0].channelData?.streamType).toBe('informative');
    expect(stream['index']).toBe(0);
  });

  test('stream all timeouts fail handled gracefully', async () => {
    const getCallCount = mockCreate(10);

    const stream = new HttpStream(client, ref, logger);

    stream.emit('Test message with all timeouts');

    // run all timers to exhaust retries
    await jest.runAllTimersAsync();
    expect(getCallCount()).toBe(5);

    const res = await stream.close();
    expect(res).toBeUndefined();
  });

  test('sequence of update and emit', async () => {

    const stream = new HttpStream(client, ref, logger);

    stream.update('Preparing...');
    stream.emit('Final message');

    await jest.advanceTimersByTimeAsync(500);

    const calls = client.conversations.activities().create.mock.calls;
    expect(calls.length).toBe(2);
    expect(calls[0][0].type).toBe('typing');
    expect(calls[1][0].text).toContain('Final message');

  });

  test('close times out if queue never flushes and id not set', async () => {
    const stream = new HttpStream(client, ref, logger);

    stream.emit('Message that will not flush');

    // promise not resolved yet, so no id set
    const res = stream.close();

    // Fast-forward timers to trigger timeout
    await jest.runAllTimersAsync();
    expect(logger.warn).toHaveBeenCalledWith(
      'Timeout while waiting for id and queue to flush'
    );
    const result = await res;
    expect(result).toBeUndefined();
  });
});
