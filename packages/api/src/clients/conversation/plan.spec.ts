import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { Client as HttpClient } from '@microsoft/teams.common';

import { IMessageActivityInput, ITypingActivityInput } from '../../activities';
import { PlanType } from '../../models';

import { ConversationClient } from './index';

class TestHttpClient extends HttpClient {
  get instance() {
    return this.http;
  }
}

function setup(data?: unknown, status = 202, errorCode?: string) {
  const requests: InternalAxiosRequestConfig[] = [];
  const http = new TestHttpClient();
  http.instance.defaults.adapter = async (config) => {
    requests.push(config);
    const response = { data, status, statusText: '', headers: {}, config };
    if (errorCode) {
      response.data = { error: { code: errorCode, message: 'Plan failed' } };
      throw new AxiosError('Plan failed', errorCode, config, undefined, response);
    }
    return response;
  };
  return { client: new ConversationClient('https://example.com', http), requests };
}

function activity(
  planType: PlanType,
  type: 'typing' | 'message' = 'typing'
): ITypingActivityInput | IMessageActivityInput {
  return {
    type, replyToId: 'prompt', entities: [{ type: 'planInfo', planType }],
  };
}

describe('Plan transport', () => {
  const methods = ['createActivity', 'replyToActivity'] as const;

  it.each(methods.flatMap((method) =>
    (['start', 'continue', 'stop', 'error'] as const).map((operation) => ({ method, operation }))
  ))('acknowledges $operation via $method without inventing a message ID', async ({ method, operation }) => {
    const { client, requests } = setup(null);
    const input = activity(operation);
    const result = method === 'replyToActivity'
      ? await client.replyToActivity('chat', 'prompt', input)
      : await client[method]('chat', input);

    expect(result).toEqual({ id: 'DO_NOT_USE_PLACEHOLDER_ID' });
    expect(requests).toHaveLength(1);
    expect(requests[0].method).toBe('post');
    expect(JSON.parse(requests[0].data)).toEqual(input);
  });

  it.each(methods.flatMap((method) =>
    [undefined, ''].map((data) => ({ method, data }))
  ))('acknowledges an empty control response via $method: $data', async ({ method, data }) => {
    const { client } = setup(data);
    const input = activity('stop');
    const result = method === 'replyToActivity'
      ? await client.replyToActivity('chat', 'prompt', input)
      : await client.createActivity('chat', input);
    expect(result).toEqual({ id: 'DO_NOT_USE_PLACEHOLDER_ID' });
  });

  it.each(methods.flatMap((method) =>
    [false, true].map((informative) => ({ method, informative }))
  ))('returns non-Plan typing responses unchanged via $method (informative: $informative)', async ({ method, informative }) => {
    const { client, requests } = setup(null);
    const input: ITypingActivityInput = { type: 'typing' };
    if (informative) {
      input.entities = [{ type: 'streaminfo', streamType: 'informative', streamSequence: 1 }];
    }
    const result = method === 'replyToActivity'
      ? await client.replyToActivity('chat', 'prompt', input)
      : await client.createActivity('chat', input);
    expect(result).toBeNull();
    expect(JSON.parse(requests[0].data)).toEqual({
      ...input, ...(method === 'replyToActivity' ? { replyToId: 'prompt' } : {}),
    });
  });

  it.each(methods)('returns the completion response from %s', async (method) => {
    const { client } = setup({ id: 'answer' }, 201);
    const input = activity('complete', 'message');
    const result = method === 'replyToActivity'
      ? await client.replyToActivity('chat', 'prompt', input)
      : await client[method]('chat', input);
    expect(result).toEqual({ id: 'answer' });
  });

  it('does not expose an activity ID from a control response', async () => {
    const { client } = setup({ id: 'not-a-message' }, 201);
    expect(await client.createActivity('chat', activity('stop')))
      .toEqual({ id: 'DO_NOT_USE_PLACEHOLDER_ID' });
  });

  it.each<PlanType>(['start', 'complete'])('leaves targeted %s validation to the service', async (operation) => {
    const { client, requests } = setup(undefined, 400, 'UnsupportedOperation');
    const input = activity(operation, operation === 'complete' ? 'message' : 'typing');
    const error = { response: { status: 400, data: { error: { code: 'UnsupportedOperation' } } } };
    await expect(client.createTargetedActivity('chat', input)).rejects.toMatchObject(error);
    await expect(client.updateTargetedActivity('chat', 'answer', input)).rejects.toMatchObject(error);
    expect(requests).toHaveLength(2);
    expect(requests.map((request) => request.method)).toEqual(['post', 'put']);
    for (const request of requests) {
      expect(request.url).toContain('?isTargetedActivity=true');
      expect(JSON.parse(request.data)).toEqual(input);
    }
  });

  it.each(methods)('preserves a targeted recipient through %s', async (method) => {
    const { client, requests } = setup({ id: 'answer' }, 201);
    const input = activity('complete', 'message');
    input.recipient = { id: 'user', role: 'user', isTargeted: true };
    const result = method === 'replyToActivity'
      ? client.replyToActivity('chat', 'prompt', input)
      : client.createActivity('chat', input);
    await expect(result).resolves.toEqual({ id: 'answer' });
    expect(requests).toHaveLength(1);
    expect(JSON.parse(requests[0].data)).toEqual(input);
  });

  it.each(methods.flatMap((method) =>
    [undefined, '', null].map((data) => ({ method, data }))
  ))('returns an empty stream completion response unchanged via $method: $data', async ({ method, data }) => {
    const { client } = setup(data);
    const input = activity('complete', 'message');
    input.id = 'stream-id';
    input.entities?.push({ type: 'streaminfo', streamId: 'stream-id', streamType: 'final' });
    const result = method === 'replyToActivity'
      ? await client.replyToActivity('chat', 'prompt', input)
      : await client.createActivity('chat', input);
    expect(result).toEqual(data);
  });

  it.each(methods.flatMap((method) =>
    [undefined, '', null, {}].map((data) => ({ method, data }))
  ))('returns a completion response without validating its ID via $method: $data', async ({ method, data }) => {
    const { client } = setup(data);
    const input = activity('complete', 'message');
    const result = method === 'replyToActivity'
      ? client.replyToActivity('chat', 'prompt', input)
      : client.createActivity('chat', input);
    await expect(result).resolves.toEqual(data);
  });

  it('supplies the reply prompt without mutating the caller', async () => {
    const { client, requests } = setup();
    const input = activity('stop');
    input.replyToId = 'original';
    await client.replyToActivity('chat', 'new-prompt', input);
    expect(input.replyToId).toBe('original');
    expect(JSON.parse(requests[0].data).replyToId).toBe('new-prompt');
  });

  it.each(['PlanNotFound', 'PlanConflict'])('preserves %s without retry', async (code) => {
    const { client, requests } = setup(undefined, 409, code);
    await expect(client.createActivity('chat', activity('stop'))).rejects.toMatchObject({
      response: { status: 409, data: { error: { code, message: 'Plan failed' } } },
    });
    expect(requests).toHaveLength(1);
  });

  it('leaves Plan field validation to the service without changing the payload', async () => {
    const { client, requests } = setup();
    const input: ITypingActivityInput = {
      type: 'typing',
      replyToId: 'prompt',
      entities: [{
        type: 'planInfo',
        planType: 'start',
        steps: [{ id: 'lookup', version: 1.5, title: 'Lookup', status: 'active' }],
      }],
    };
    await client.createActivity('chat', input);
    expect(requests).toHaveLength(1);
    expect(JSON.parse(requests[0].data)).toEqual(input);
  });

  it.each(methods)('leaves duplicate Plan entity validation to the service via %s', async (method) => {
    const { client, requests } = setup(undefined, 400, 'ServiceError');
    const input = activity('complete', 'message');
    input.entities?.push({ type: 'planInfo', planType: 'stop' });
    const result = method === 'replyToActivity'
      ? client.replyToActivity('chat', 'prompt', input)
      : client.createActivity('chat', input);
    await expect(result).rejects.toMatchObject({
      response: { status: 400, data: { error: { code: 'ServiceError' } } },
    });
    expect(requests).toHaveLength(1);
    expect(JSON.parse(requests[0].data)).toEqual(input);
  });
});
