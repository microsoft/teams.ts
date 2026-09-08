import { AxiosError } from 'axios';

import {
  StreamCancelledError,
  StreamNotAllowedError,
  StreamTimedOutError,
  TerminalStreamError,
} from '../types';

import { HttpStream } from './http-stream';

describe('HttpStream', () => {
  let client: any;
  let ref: any;
  let logger: any;

  beforeEach(() => {
    client = {
      conversations: {
        createActivity: jest.fn(),
        updateActivity: jest.fn(),
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
    client.conversations.createActivity.mockImplementation(
      async (_conversationId: any, activity: any) => {
        calls++;
        if (calls <= successAfter) {
          throw new Error('timeout');
        }

        return { ...activity, id: `activity-${calls}` };
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
    expect(client.conversations.createActivity).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(200);
    // next flush will be after 500ms, so no new calls yet
    expect(client.conversations.createActivity).toHaveBeenCalledTimes(1);
    stream.emit('Message 13');

    await jest.advanceTimersByTimeAsync(300);
    // 500ms passed since first emit, second flush drains entire queue
    expect(client.conversations.createActivity).toHaveBeenCalledTimes(2);
    stream.emit('Message 14');

    await jest.advanceTimersByTimeAsync(500);
    // another 500ms passed, third flush picks up Message 14
    expect(client.conversations.createActivity).toHaveBeenCalledTimes(3);

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].text).toBe('Message 1');
    expect(calls[1][1].text).toBe('Message 1Message 2Message 3Message 4Message 5Message 6Message 7Message 8Message 9Message 10Message 11Message 12Message 13');
    expect(calls[2][1].text).toBe('Message 1Message 2Message 3Message 4Message 5Message 6Message 7Message 8Message 9Message 10Message 11Message 12Message 13Message 14');
  });


  test('stream error handled gracefully', async () => {
    mockCreate(1);
    const stream = new HttpStream(client, ref, logger);

    stream.emit('Test message');
    expect(client.conversations.createActivity).toHaveBeenCalledTimes(1);

    // retry after 500ms
    await jest.advanceTimersByTimeAsync(500);

    expect(client.conversations.createActivity).toHaveBeenCalledTimes(2);
    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].text).toBe('Test message');
    expect(calls[1][1].text).toBe('Test message');
    const res = await stream.close();
    expect(res).toBeDefined();
  });

  test('update sends typing activity', async () => {

    const stream = new HttpStream(client, ref, logger);

    stream.update('Thinking...');

    // resolve promise microtask queue
    await jest.runAllTicks();

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].type).toBe('typing');
    expect(calls[0][1].text).toBe('Thinking...');
    expect(calls[0][1].channelData?.streamType).toBe('informative');
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

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls.length).toBe(2);
    expect(calls[0][1].type).toBe('typing');
    expect(calls[1][1].text).toContain('Final message');

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

  test('stream canceled on 403', async () => {
    const stream = new HttpStream(client, ref, logger);
    const axiosError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message: 'Content stream was canceled by user' } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });
    client.conversations.createActivity.mockRejectedValue(axiosError);

    stream.emit('Test message');
    await jest.runAllTimersAsync();

    expect(stream.canceled).toBe(true);
  });

  test('emit blocked after cancel', () => {
    const stream = new HttpStream(client, ref, logger);
    (stream as any)._canceled = true;

    expect(() => stream.emit('Should fail')).toThrow(StreamCancelledError);
  });

  test('send blocked after cancel', async () => {
    const stream = new HttpStream(client, ref, logger);
    (stream as any)._canceled = true;

    await expect((stream as any).send({ type: 'typing', text: 'test' })).rejects.toThrow(
      StreamCancelledError
    );
  });

  test('close returns undefined when canceled', async () => {
    const stream = new HttpStream(client, ref, logger);
    (stream as any)._canceled = true;
    // Set index so we get past the "no content" early return
    (stream as any).index = 1;

    const result = await stream.close();
    expect(result).toBeUndefined();
    expect(logger.debug).toHaveBeenCalledWith('stream canceled, nothing to close');
  });

  test('stream canceled after successful message', async () => {
    const stream = new HttpStream(client, ref, logger);
    let callCount = 0;
    const axiosError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message: 'Content stream was canceled by user' } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });

    client.conversations.createActivity.mockImplementation(async (_conversationId: any, activity: any) => {
      callCount++;
      if (callCount === 1) {
        return { ...activity, id: 'activity-1' };
      }
      throw axiosError;
    });

    // First emit succeeds
    stream.emit('First message');
    await jest.runAllTimersAsync();
    expect(stream.canceled).toBe(false);
    expect(callCount).toBe(1);

    // Second emit triggers 403
    stream.emit('Second message');
    await jest.runAllTimersAsync();
    expect(stream.canceled).toBe(true);
    expect(callCount).toBe(2);

    // Further emits throw
    expect(() => stream.emit('Should fail')).toThrow(StreamCancelledError);
  });

  test('close sends final message with streamType final after update', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    stream.update('Thinking...');
    stream.emit('first message');
    stream.emit('last message');
    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    await closePromise;

    expect(client.conversations.createActivity).toHaveBeenLastCalledWith(
      expect.any(String),
      expect.objectContaining({
        type: 'message',
        text: 'first messagelast message',
        channelData: expect.objectContaining({
          streamType: 'final',
        }),
      })
    );
  });

  test('retains the last emitted textFormat on intermediate typing chunks and the final message', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    // First message carries no textFormat.
    stream.emit({ type: 'message', text: 'hello ' });
    await jest.runAllTimersAsync();

    // A later message sets textFormat; last-message-wins semantics apply (matches
    // finalActivity's attachments / entities / suggestedActions behavior).
    stream.emit({ type: 'message', text: 'world', textFormat: 'extendedmarkdown' });
    await jest.runAllTimersAsync();

    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    await closePromise;

    const calls = client.conversations.createActivity.mock.calls;

    // First intermediate chunk (sent before textFormat was ever emitted) has none.
    expect(calls[0][1].type).toBe('typing');
    expect(calls[0][1].textFormat).toBeUndefined();

    // Second intermediate chunk, sent after the textFormat-carrying message, retains it.
    expect(calls[1][1].type).toBe('typing');
    expect(calls[1][1].textFormat).toBe('extendedmarkdown');

    // Final message also carries the last emitted textFormat.
    const finalCall = calls[calls.length - 1];
    expect(finalCall[1].type).toBe('message');
    expect(finalCall[1].textFormat).toBe('extendedmarkdown');
  });

  test('informative update carries its own textFormat, independent of finalActivity', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    // An informative update with its own textFormat, sent before any message is emitted
    // (so finalActivity is still undefined). Its format must come from the update itself.
    stream.emit({
      type: 'typing',
      text: 'Checking the release status...',
      channelData: { streamType: 'informative' },
      textFormat: 'extendedmarkdown',
    });
    await jest.runAllTimersAsync();

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].type).toBe('typing');
    expect(calls[0][1].channelData?.streamType).toBe('informative');
    expect(calls[0][1].textFormat).toBe('extendedmarkdown');
  });

  test('update(text, textFormat) sends an informative chunk with that format', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    stream.update('Thinking...', 'extendedmarkdown');
    await jest.runAllTimersAsync();

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].type).toBe('typing');
    expect(calls[0][1].channelData?.streamType).toBe('informative');
    expect(calls[0][1].textFormat).toBe('extendedmarkdown');
  });

  test('update(text) and update(text, null) omit textFormat (Teams default)', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    stream.update('no format');
    await jest.runAllTimersAsync();
    stream.update('explicit null', null);
    await jest.runAllTimersAsync();

    const calls = client.conversations.createActivity.mock.calls;
    expect(calls[0][1].type).toBe('typing');
    expect(calls[0][1].textFormat).toBeUndefined();
    expect(calls[1][1].textFormat).toBeUndefined();
  });

  test('sendFinal (timeout fallback) retains the last emitted textFormat', async () => {
    const stream = new HttpStream(client, ref, logger);
    let createCalls = 0;
    const updates: any[] = [];

    const timeoutError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message: 'Content stream finished due to exceeded streaming time.' } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });

    client.conversations.createActivity.mockImplementation(
      async (_conversationId: any, activity: any) => {
        createCalls++;
        if (createCalls === 2) {
          throw timeoutError;
        }
        return { ...activity, id: 'stream-1' };
      }
    );
    client.conversations.updateActivity.mockImplementation(
      async (_conversationId: any, id: any, activity: any) => {
        updates.push({ id, text: activity.text, textFormat: activity.textFormat });
        return { ...activity, id };
      }
    );

    stream.emit({ type: 'message', text: 'Final answer', textFormat: 'extendedmarkdown' });
    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    await closePromise;

    expect(stream.timedOut).toBe(true);
    expect(updates).toHaveLength(1);
    expect(updates[0].text).toBe('Final answer');
    expect(updates[0].textFormat).toBe('extendedmarkdown');
  });

  test('close waits for flush to complete before sending final message', async () => {
    mockCreate();

    const stream = new HttpStream(client, ref, logger);

    (stream as any)._flushing = true;
    (stream as any).id = 'activity-1';
    (stream as any).text = 'Response text';
    (stream as any).index = 1;

    const closePromise = stream.close();

    await jest.advanceTimersByTimeAsync(100);

    // Verify close() is still waiting
    const callsBeforeFlush = client.conversations.createActivity.mock.calls.length;
    expect(callsBeforeFlush).toBe(0);

    // Simulate flush completing
    (stream as any)._flushing = false;
    await jest.runAllTimersAsync();

    await closePromise;

    // Now create() should have been called
    const createCalls = client.conversations.createActivity.mock.calls.length;
    expect(createCalls).toBe(1);
  });

  test('clearText clears accumulated text and pending text deltas', async () => {
    mockCreate();
    const stream = new HttpStream(client, ref, logger);

    // First emit's flush synchronously drains the queue (text='hello') before
    // awaiting send. Subsequent sync emits queue while flush is awaiting.
    stream.emit('hello');
    stream.emit(' world');
    stream.emit('!');

    expect((stream as any).text).toBe('hello');
    expect((stream as any).queue.length).toBe(2);

    stream.clearText();

    expect((stream as any).text).toBe('');
    expect((stream as any).queue.length).toBe(0);

    await jest.runAllTimersAsync();
  });

  test('clearText preserves queued non-message activities', async () => {
    mockCreate();
    const stream = new HttpStream(client, ref, logger);

    stream.emit('hello');                // immediate flush starts; text='hello'
    stream.update('Still thinking...');  // typing activity, queued while flushing
    stream.emit(' world');               // message activity, queued while flushing

    expect((stream as any).text).toBe('hello');
    expect((stream as any).queue.length).toBe(2);

    stream.clearText();

    expect((stream as any).text).toBe('');
    const remaining = (stream as any).queue as Array<{ type: string }>;
    expect(remaining.length).toBe(1);
    expect(remaining[0].type).toBe('typing');

    await jest.runAllTimersAsync();
  });

  test('clearText then emit card sends card-only final activity', async () => {
    mockCreate();
    const stream = new HttpStream(client, ref, logger);

    // Stream some text so id gets assigned by the typing chunk.
    stream.emit('text we want to discard');
    await jest.advanceTimersByTimeAsync(0);

    stream.clearText();

    const cardAttachment = {
      contentType: 'application/vnd.microsoft.card.adaptive',
      content: { type: 'AdaptiveCard' },
    };
    stream.emit({ type: 'message', attachments: [cardAttachment] } as any);

    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    await closePromise;

    const createCalls = client.conversations.createActivity.mock.calls;
    const finalCall = createCalls[createCalls.length - 1];
    expect(finalCall[1].type).toBe('message');
    expect(finalCall[1].text).toBe('');
    expect(finalCall[1].attachments).toEqual([cardAttachment]);
    expect(finalCall[1].channelData?.streamType).toBe('final');
  });

  const errorCases: Array<[string, new (...args: any[]) => Error]> = [
    ['Content stream finished due to exceeded streaming time.', StreamTimedOutError],
    ['Content stream was canceled by user.', StreamCancelledError],
    ['Content stream is not allowed', StreamNotAllowedError],
    ['Content stream is not allowed on an already completed streamed message', TerminalStreamError],
    ['Message size too large', TerminalStreamError],
    ['Request streamed content should contain the previously streamed content', TerminalStreamError],
  ];

  test.each(errorCases)('send maps 403 message "%s" to the correct error', async (message, expected) => {
    const stream = new HttpStream(client, ref, logger);
    const axiosError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });
    client.conversations.createActivity.mockRejectedValue(axiosError);

    await expect((stream as any).send({ type: 'typing', text: 'hi' })).rejects.toHaveProperty(
      'name',
      expected.name
    );
  });

  test('send 403 with empty body raises a terminal stream error', async () => {
    const stream = new HttpStream(client, ref, logger);
    const axiosError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: {},
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });
    client.conversations.createActivity.mockRejectedValue(axiosError);

    await expect((stream as any).send({ type: 'typing', text: 'hi' })).rejects.toBeInstanceOf(
      TerminalStreamError
    );
  });

  test('final send timeout updates the original message in place', async () => {
    const stream = new HttpStream(client, ref, logger);
    let createCalls = 0;
    const updates: any[] = [];

    const timeoutError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message: 'Content stream finished due to exceeded streaming time.' } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });

    client.conversations.createActivity.mockImplementation(
      async (_conversationId: any, activity: any) => {
        createCalls++;
        // The final streamed send (create #2, carries streamInfo) is the first to time out.
        if (createCalls === 2) {
          throw timeoutError;
        }
        return { ...activity, id: 'stream-1' };
      }
    );
    client.conversations.updateActivity.mockImplementation(
      async (_conversationId: any, id: any, activity: any) => {
        updates.push({
          id,
          text: activity.text,
          hasStreamInfo: (activity.entities ?? []).some((e: any) => e.type === 'streaminfo'),
          streamType: activity.channelData?.streamType,
        });
        return { ...activity, id };
      }
    );

    stream.emit('Final answer');
    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    const result = await closePromise;

    // After the timeout, close() updates the original message in place rather than
    // posting a duplicate: exactly one update, reusing the id, with no stream markers.
    expect(stream.timedOut).toBe(true);
    expect(updates).toHaveLength(1);
    expect(updates[0].id).toBe('stream-1');
    expect(updates[0].text).toBe('Final answer');
    expect(updates[0].hasStreamInfo).toBe(false);
    expect(updates[0].streamType).toBeUndefined();
    expect(result).toBeDefined();
  });

  test('stream timeout during streaming updates the original message in place', async () => {
    const stream = new HttpStream(client, ref, logger);
    let createCalls = 0;
    const updates: any[] = [];

    const timeoutError = new AxiosError('Forbidden', '403', undefined, undefined, {
      status: 403,
      data: { error: { message: 'Content stream finished due to exceeded streaming time.' } },
      headers: {},
      statusText: 'Forbidden',
      config: {} as any,
    });

    client.conversations.createActivity.mockImplementation(
      async (_conversationId: any, activity: any) => {
        createCalls++;
        // First chunk streams fine; the second chunk send trips the 2-minute limit.
        if (createCalls === 2) {
          throw timeoutError;
        }
        return { ...activity, id: 'stream-1' };
      }
    );
    client.conversations.updateActivity.mockImplementation(
      async (_conversationId: any, id: any, activity: any) => {
        updates.push({
          id,
          text: activity.text,
          hasStreamInfo: (activity.entities ?? []).some((e: any) => e.type === 'streaminfo'),
        });
        return { ...activity, id };
      }
    );

    stream.emit('chunk 1 ');
    await jest.runAllTimersAsync();

    // The second chunk send times out; the error is swallowed and the stream is marked timed out.
    stream.emit('chunk 2');
    await jest.runAllTimersAsync();

    expect(stream.timedOut).toBe(true);

    const closePromise = stream.close();
    await jest.runAllTimersAsync();
    const result = await closePromise;

    // close() takes the timed-out branch and updates the original message in place.
    expect(updates).toHaveLength(1);
    expect(updates[0].id).toBe('stream-1');
    expect(updates[0].text).toBe('chunk 1 chunk 2');
    expect(updates[0].hasStreamInfo).toBe(false);
    expect(result).toBeDefined();
  });

  test('emit after close reopens the stream for the next message', async () => {
    const stream = new HttpStream(client, ref, logger);
    mockCreate();

    const closeResults: any[] = [];
    stream.events.on('close', (activity) => {
      closeResults.push(activity);
    });

    // First streamed message.
    stream.emit('First streamed message');
    let closePromise = stream.close();
    await jest.runAllTimersAsync();
    const firstResult = await closePromise;

    expect(firstResult).toBeDefined();
    expect(stream.closed).toBe(true);

    // close() is idempotent until the next emit/update.
    const repeatedResult = await stream.close();
    expect(repeatedResult).toBe(firstResult);
    expect(stream.closed).toBe(true);

    // Emitting again reopens the stream on the same instance.
    stream.emit('Second streamed message');
    expect(stream.closed).toBe(false);
    closePromise = stream.close();
    await jest.runAllTimersAsync();
    const secondResult = await closePromise;

    expect(secondResult).toBeDefined();
    expect(stream.closed).toBe(true);

    expect(firstResult!.id).not.toBe(secondResult!.id);
    expect(closeResults.map((r) => r.id)).toEqual([firstResult!.id, secondResult!.id]);
  });

  describe('replyToId threading', () => {
    test('threads every streamed activity under the inbound message when ref.activityId is set', async () => {
      const threadedRef = { ...ref, activityId: 'inbound-activity-id' };
      const stream = new HttpStream(client, threadedRef, logger);
      mockCreate();

      stream.update('Thinking...'); // informative update
      stream.emit('hello '); // streaming chunk
      stream.emit('world');
      const closePromise = stream.close(); // final message
      await jest.runAllTimersAsync();
      await closePromise;

      const calls = client.conversations.createActivity.mock.calls;
      expect(calls.length).toBeGreaterThan(0);

      // informative, streaming, and final sends are all threaded to the inbound message
      for (const call of calls) {
        expect(call[1].replyToId).toBe('inbound-activity-id');
      }

      // and specifically the final message
      expect(client.conversations.createActivity).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({
          type: 'message',
          channelData: expect.objectContaining({ streamType: 'final' }),
          replyToId: 'inbound-activity-id',
        })
      );
    });
  });
});
