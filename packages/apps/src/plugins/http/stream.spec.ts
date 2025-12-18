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
        return { id: `activity-${calls}` };
      }
    );
    return () => calls;
  }

  test('stream multiple emits with timer', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();
    console.log('Starting test stream multiple emits with timer');

    for (let i = 0; i < 12; i++) {
      stream.emit(`Message ${i + 1}`);
    }

    expect(client.conversations.activities().create).toHaveBeenCalledTimes(1);
    await jest.runAllTimersAsync();
    expect(client.conversations.activities().create.mock.calls.length).toBeGreaterThanOrEqual(2);
  });

  test('stream error handled gracefully', async () => {
    mockCreate(1);
    const stream = new HttpStream(client, ref, logger);

    stream.emit('Test message');
    await jest.runAllTimersAsync();

    expect(client.conversations.activities().create).toHaveBeenCalledTimes(2);
    const res = await stream.close();
    expect(res).toBeDefined();
  });

  test('update sends typing activity', async () => {
    const sent: any[] = [];
    client.conversations.activities().create.mockImplementation(
      async (activity: any) => {
        sent.push(activity);
        return { id: `activity-${sent.length}` };
      }
    );

    const stream = new HttpStream(client, ref, logger);

    stream.update('Thinking...');

    expect(sent[0].type).toBe('typing');
    expect(sent[0].text).toBe('Thinking...');
    expect(sent[0].channelData?.streamType).toBe('informative');
    expect(stream['index']).toBeGreaterThanOrEqual(0);
  });

  test('stream all timeouts fail handled gracefully', async () => {
    const unhandled = jest.fn();
    process.on('unhandledRejection', unhandled);
    let callCount = 0;

    client.conversations.activities().create.mockImplementation(
      async () => {
        callCount++;
        throw new Error('All operations timed out');
      }
    );

    const stream = new HttpStream(client, ref, logger);

    stream.emit('Test message with all timeouts');

    await jest.runAllTimersAsync();
    expect(callCount).toBe(6);
    process.off('unhandledRejection', unhandled);
  });

  test('sequence of update and emit', async () => {
    const sent: any[] = [];
    client.conversations.activities().create.mockImplementation(
      async (activity: any) => {
        sent.push(activity);
        return { id: `activity-${sent.length}` };
      }
    );

    const stream = new HttpStream(client, ref, logger);

    stream.update('Preparing...');
    stream.emit('Final message');

    await jest.runAllTimersAsync();
    expect(sent[0].type).toBe('typing');
    expect(sent[1].text).toContain('Final message');

  });
});
