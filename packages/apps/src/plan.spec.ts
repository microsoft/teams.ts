import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import {
  Client, ConversationReference, IMessageActivityInput, ITokenProvider, MessageActivity, MessageActivityInput,
  PlanInfoEntity, PlanType, Step,
} from '@microsoft/teams.api';
import { Client as HttpClient, ClientOptions, ConsoleLogger, LocalStorage } from '@microsoft/teams.common';

import { ActivitySender } from './activity-sender';
import { GraphClient } from './api';
import { ActivityContext } from './contexts/activity';
import { IActivitySentEvent } from './events';
import { HttpStream } from './http/http-stream';
import { Plan } from './plan';
import { StreamTimedOutError } from './types';

class TestHttpClient extends HttpClient {
  get instance() {
    return this.http;
  }

  override clone(options?: ClientOptions): HttpClient {
    const clone = new TestHttpClient({ ...this.options, ...options });
    clone.instance.defaults.adapter = this.instance.defaults.adapter;
    return clone;
  }
}

type Response = { data?: unknown; status?: number; code?: string; message?: string };

function setup(tokenProvider?: ITokenProvider) {
  const ref: ConversationReference = {
    activityId: 'prompt',
    bot: { id: 'bot', role: 'bot' },
    user: { id: 'user', role: 'user' },
    conversation: { id: 'chat', conversationType: 'groupChat' },
    channelId: 'msteams',
    serviceUrl: 'https://example.com',
  };
  const requests: InternalAxiosRequestConfig[] = [];
  const responses: Response[] = [];
  const http = new TestHttpClient({ headers: { 'X-Application': 'kept' } });
  http.instance.defaults.adapter = async (config) => {
    requests.push(config);
    const payload = JSON.parse(config.data);
    const plan = payload.entities?.find((entity: { type: string }) => entity.type === 'planInfo');
    const next = responses.shift() ?? (
      plan && plan.planType !== 'complete' ? { data: null, status: 202 } : { data: { id: 'answer' }, status: 201 }
    );
    const response = { config, headers: {}, statusText: '', data: next.data, status: next.status ?? 201 };
    if (next.code) {
      response.data = { error: { code: next.code, message: next.message ?? 'Plan failed' } };
    }
    if (response.status >= 400) {
      const code = response.status >= 500 ? AxiosError.ERR_BAD_RESPONSE : AxiosError.ERR_BAD_REQUEST;
      throw new AxiosError('Request failed', code, config, undefined, response);
    }
    return response;
  };
  const api = new Client('https://different.example.com', http, {
    tokenProvider,
    ...(tokenProvider ? {
      agenticIdentity: { agenticAppBlueprintId: 'blueprint', agenticAppId: 'agent', tenantId: 'tenant' },
    } : {}),
  });
  const logger = new ConsoleLogger('plan-test', { level: 'error' });
  const sender = new ActivitySender(logger, (serviceUrl) => api.fromServiceUrl({ serviceUrl }));
  const stream = () => new HttpStream(api.fromServiceUrl({ serviceUrl: ref.serviceUrl }), ref, logger);
  return { ref, api, logger, sender, requests, responses, stream };
}

const lookup: Step = { id: 'lookup', version: 1, title: 'Lookup', status: 'active' };
const complete: PlanInfoEntity = { type: 'planInfo', planType: 'complete' };

describe('Plan', () => {
  it('requires a prompt activity ID', () => {
    const { api, ref, requests } = setup();
    expect(() => new Plan(api, ref, '')).toThrow('A Plan requires a prompt replyToId.');
    expect(requests).toHaveLength(0);
  });

  it.each([
    ['start', 'start'], ['update', 'continue'], ['stop', 'stop'], ['error', 'error'],
  ] as const)('sends %s as a prompt-bound typing control', async (method, operation) => {
    const { api, ref, requests } = setup();
    const plan = new Plan(api, ref, 'original-prompt');
    const onSent = jest.fn<void, [IActivitySentEvent]>();
    plan.events.on('sent', onSent);
    const result = method === 'start' || method === 'update'
      ? await plan[method]([lookup])
      : await plan[method]();
    expect(result).toBeUndefined();
    expect(onSent).toHaveBeenCalledTimes(1);
    expect(onSent).toHaveBeenCalledWith({
      ...ref,
      activity: expect.objectContaining({
        id: 'DO_NOT_USE_PLACEHOLDER_ID', type: 'typing', replyToId: 'original-prompt',
      }),
    });
    expect(requests).toHaveLength(1);
    expect(requests[0].url).toBe('https://example.com/v3/conversations/chat/activities');
    expect(JSON.parse(requests[0].data)).toEqual({
      type: 'typing', replyToId: 'original-prompt', from: { id: 'bot', role: 'bot' },
      conversation: ref.conversation,
      entities: [{
        type: 'planInfo', planType: operation,
        ...(['start', 'continue'].includes(operation) ? { steps: [lookup] } : {}),
      }],
    });
  });

  it('preserves step details and sends only the supplied updates', async () => {
    const { api, ref, requests } = setup();
    const plan = new Plan(api, ref, 'prompt');
    const steps: Step[] = [
      {
        ...lookup,
        description: 'Checking the report.',
        sources: [{ title: 'Report', url: 'https://example.com/report', icon: 'document' }],
      },
      { id: 'answer', version: 1, title: 'Draft answer', status: 'proposed', sources: [] },
    ];
    const updates: Step[] = [{ ...lookup, version: 2, title: 'Sources checked', status: 'completed' }];
    await plan.start(steps);
    await plan.update(updates);

    expect(JSON.parse(requests[0].data).entities).toStrictEqual([
      { type: 'planInfo', planType: 'start', steps },
    ]);
    expect(JSON.parse(requests[1].data).entities).toStrictEqual([
      { type: 'planInfo', planType: 'continue', steps: updates },
    ]);
  });

  it.each(['start', 'update'] as const)('preserves an explicit empty step list for %s', async (method) => {
    const { api, ref, requests } = setup();
    await new Plan(api, ref, 'prompt')[method]([]);
    expect(JSON.parse(requests[0].data).entities).toStrictEqual([
      { type: 'planInfo', planType: method === 'start' ? 'start' : 'continue', steps: [] },
    ]);
  });

  it('completes with the answer ID and a single completion entity', async () => {
    const { api, ref, requests } = setup();
    const plan = new Plan(api, ref, 'prompt');
    const onSent = jest.fn<void, [IActivitySentEvent]>();
    plan.events.on('sent', onSent);
    const result = await plan.completePlan('Done');
    expect(result.id).toBe('answer');
    expect(onSent).toHaveBeenCalledTimes(1);
    expect(onSent).toHaveBeenCalledWith({ ...ref, activity: result });
    expect(onSent.mock.calls[0][0].activity).toBe(result);
    expect(JSON.parse(requests[0].data)).toEqual({
      type: 'message', text: 'Done', replyToId: 'prompt',
      from: ref.bot, conversation: ref.conversation, entities: [complete],
    });
  });

  it.each([false, true])('preserves caller metadata without mutating it (existing completion: %s)', async (existing) => {
    const { api, ref, requests } = setup();
    const message = new MessageActivityInput('Done', {
      replyToId: 'other', textFormat: 'extendedmarkdown', summary: 'Fallback',
      value: { custom: 'kept' }, channelData: { feedbackLoop: { type: 'default' } },
      entities: JSON.parse('[{"type":"appMetadata","value":"kept"}]'),
      attachments: [{ contentType: 'application/vnd.microsoft.card.adaptive', content: { type: 'AdaptiveCard' } }],
    });
    if (existing) message.addEntity(complete);
    const original = JSON.stringify(message);
    await new Plan(api, ref, 'prompt').completePlan(message);
    const payload = JSON.parse(requests[0].data);
    expect(payload).toMatchObject({
      ...JSON.parse(original), replyToId: 'prompt',
      entities: [{ type: 'appMetadata', value: 'kept' }, complete],
    });
    expect(payload.entities).toEqual([{ type: 'appMetadata', value: 'kept' }, complete]);
    expect(JSON.stringify(message)).toBe(original);
  });

  it.each<PlanType>(['start', 'continue', 'stop', 'error'])('rejects a conflicting %s before sending', async (operation) => {
    const { api, ref, requests } = setup();
    const plan = new Plan(api, ref, 'prompt');
    const onSent = jest.fn<void, [IActivitySentEvent]>();
    plan.events.on('sent', onSent);
    const message: IMessageActivityInput = {
      type: 'message', text: 'Done', entities: [{ type: 'planInfo', planType: operation }],
    };
    await expect(plan.completePlan(message)).rejects.toThrow('non-complete');
    expect(requests).toHaveLength(0);
    expect(onSent).not.toHaveBeenCalled();
  });

  it('rejects duplicate completion entities', async () => {
    const { api, ref, requests } = setup();
    await expect(new Plan(api, ref, 'prompt').completePlan({
      type: 'message', text: 'Done', entities: [complete, complete],
    })).rejects.toThrow('at most one');
    expect(requests).toHaveLength(0);
  });

  it('snapshots both the saved reference and caller-owned steps', async () => {
    const { api, ref, requests } = setup();
    const plan = new Plan(api, ref, 'prompt');
    ref.bot = { ...ref.bot, id: 'changed' };
    ref.conversation = { ...ref.conversation, id: 'changed' };
    const steps = [{ ...lookup, sources: [{ title: 'Report', url: 'https://example.com/report' }] }];
    const pending = plan.start(steps);
    steps[0].title = 'changed';
    steps[0].sources[0].title = 'changed';
    await pending;
    expect(JSON.parse(requests[0].data)).toMatchObject({
      from: { id: 'bot' }, conversation: { id: 'chat' },
      entities: [{ steps: [{ title: 'Lookup', sources: [{ title: 'Report' }] }] }],
    });
  });

  it('preserves the scoped caller and HTTP configuration at the saved service URL', async () => {
    const getAppToken = jest.fn();
    const getAgenticAppToken = jest.fn().mockResolvedValue('agent-token');
    const { api, ref, requests } = setup({ getAppToken, getAgenticAppToken });
    await new Plan(api, ref, 'prompt').stop();
    expect(getAppToken).not.toHaveBeenCalled();
    expect(getAgenticAppToken).toHaveBeenCalledWith('https://botapi.skype.com/.default', 'agent', 'tenant');
    expect(requests[0].url).toContain('https://example.com/');
    expect(requests[0].headers.get('Authorization')).toBe('Bearer agent-token');
    expect(requests[0].headers.get('X-Application')).toBe('kept');
  });

  it('preserves a targeted prompt reference without local validation', async () => {
    const { api, ref, requests } = setup();
    ref.bot.isTargeted = true;
    await new Plan(api, ref, 'prompt').start([lookup]);
    expect(requests).toHaveLength(1);
    expect(JSON.parse(requests[0].data)).toMatchObject({
      from: ref.bot, replyToId: 'prompt',
      entities: [{ type: 'planInfo', planType: 'start', steps: [lookup] }],
    });
  });

  it('preserves an explicitly targeted completion recipient', async () => {
    const { api, ref, requests } = setup();
    const message = new MessageActivityInput('Private').withRecipient({ id: 'user', role: 'user' }, true);
    await new Plan(api, ref, 'prompt').completePlan(message);
    expect(requests).toHaveLength(1);
    expect(JSON.parse(requests[0].data)).toMatchObject({
      recipient: { id: 'user', role: 'user', isTargeted: true }, entities: [complete],
    });
  });

  it('preserves an ordinary explicit recipient', async () => {
    const { api, ref, requests } = setup();
    await new Plan(api, ref, 'prompt').completePlan(
      new MessageActivityInput('Explicit audience').withRecipient({ id: 'chosen', role: 'user' })
    );
    expect(requests[0].url).not.toContain('isTargetedActivity');
    expect(JSON.parse(requests[0].data).recipient).toEqual({ id: 'chosen', role: 'user' });
  });

  it('caches the factory by prompt and exposes it to routed handlers', async () => {
    const { api, ref, sender, logger, requests } = setup();
    const ctx = new ActivityContext({
      appId: 'app',
      activity: new MessageActivity('Question', { replyToId: 'parent' })
        .withId('prompt').withFrom(ref.user!).withRecipient(ref.bot)
        .withConversation(ref.conversation),
      api, ref, log: logger, activitySender: sender, connectionName: 'graph',
      appGraph: new GraphClient(), userGraph: new GraphClient(), storage: new LocalStorage(), next: jest.fn(),
    });
    expect(ctx.plan()).toBe(ctx.plan('prompt'));
    expect(ctx.plan()).not.toBe(ctx.plan('other'));
    expect(ctx.toInterface().plan()).toBe(ctx.plan());
    await ctx.plan().stop();
    await ctx.plan('other').stop();
    expect(requests.map((request) => JSON.parse(request.data).replyToId)).toEqual(['prompt', 'other']);
  });

  it('emits sent events with the saved reference without exposing it to mutation', async () => {
    const { api, ref, sender, logger, requests } = setup();
    const onSent = jest.fn<void, [IActivitySentEvent]>();
    const ctx = new ActivityContext({
      appId: 'app',
      activity: new MessageActivity('Question', {
        id: 'prompt', from: ref.user, recipient: ref.bot, conversation: ref.conversation,
      }),
      api, ref, log: logger, activitySender: sender, connectionName: 'graph',
      appGraph: new GraphClient(), userGraph: new GraphClient(), storage: new LocalStorage(), next: jest.fn(),
    });
    const plan = ctx.plan();
    plan.events.on('sent', onSent);
    const send = jest.spyOn(ctx, 'send');
    ctx.ref = {
      ...ref,
      serviceUrl: 'https://changed.example.com',
      bot: { id: 'changed-bot', role: 'bot' },
      conversation: { id: 'changed-chat', conversationType: 'groupChat' },
    };

    const result = await plan.completePlan('Done');

    expect(send).not.toHaveBeenCalled();
    expect(onSent).toHaveBeenCalledTimes(1);
    expect(onSent).toHaveBeenCalledWith({ ...ref, activity: result });
    expect(requests).toHaveLength(1);
    expect(requests[0].url).toBe('https://example.com/v3/conversations/chat/activities');
    expect(JSON.parse(requests[0].data)).toMatchObject({ from: ref.bot, conversation: ref.conversation });

    const event = onSent.mock.calls[0][0];
    event.bot.isTargeted = true;
    await ctx.plan().stop();

    expect(ctx.plan()).toBe(plan);
    expect(onSent).toHaveBeenCalledTimes(2);
    expect(onSent.mock.calls[1][0]).toEqual({ ...ref, activity: expect.anything() });
    expect(onSent.mock.calls[1][0].conversation).not.toBe(event.conversation);
    expect(requests).toHaveLength(2);
    expect(requests[1].url).toBe('https://example.com/v3/conversations/chat/activities');
    expect(JSON.parse(requests[1].data)).toMatchObject({ from: ref.bot, conversation: ref.conversation });
  });

  it.each([false, true])('routes an existing answer ID through POST (streamed: %s)', async (streamed) => {
    const { sender, ref, requests } = setup();
    const input = new MessageActivityInput('Done', { replyToId: 'prompt' }).withId('answer').addEntity(complete);
    if (streamed) input.addStreamFinal();
    expect((await sender.send(input, ref)).id).toBe('answer');
    expect(requests).toHaveLength(1);
    expect(requests[0].method).toBe('post');
    expect(JSON.parse(requests[0].data)).toMatchObject({ id: 'answer', replyToId: 'prompt' });
  });

  it.each([false, true])('uses existing targeted routing for Plan completions (existing ID: %s)', async (existingId) => {
    const { api, ref, sender, logger, requests } = setup();
    ref.bot.isTargeted = true;
    const ctx = new ActivityContext({
      appId: 'app',
      activity: new MessageActivity('Private question', {
        id: 'prompt', from: ref.user, recipient: ref.bot, conversation: ref.conversation,
      }),
      api, ref, log: logger, activitySender: sender, connectionName: 'graph',
      appGraph: new GraphClient(), userGraph: new GraphClient(), storage: new LocalStorage(), next: jest.fn(),
    });
    expect(ctx.plan()).toBeInstanceOf(Plan);
    const message = new MessageActivityInput('Private answer').addEntity(complete);
    if (existingId) {
      message.withId('answer').withRecipient({ id: 'user', role: 'user' }, true);
    }
    await ctx.send(message);
    await ctx.send('Ordinary private reply');
    expect(requests).toHaveLength(2);
    for (const request of requests) {
      expect(request.method).toBe('post');
      expect(request.url).toContain('?isTargetedActivity=true');
      expect(JSON.parse(request.data).recipient).toEqual({ id: 'user', role: 'user', isTargeted: true });
    }
    expect(JSON.parse(requests[0].data).entities).toContainEqual(complete);
  });

  it.each(['PlanNotFound', 'PlanConflict'])('propagates %s without restart, retry, or fallback', async (code) => {
    const { api, ref, requests, responses } = setup();
    const plan = new Plan(api, ref, 'prompt');
    const onSent = jest.fn<void, [IActivitySentEvent]>();
    plan.events.on('sent', onSent);
    responses.push({ code, status: 409 });
    await expect(plan.completePlan('Done')).rejects.toMatchObject({
      response: { status: 409, data: { error: { code } } },
    });
    expect(requests).toHaveLength(1);
    expect(onSent).not.toHaveBeenCalled();
  });
});

describe('Plan HTTP stream', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it.each([undefined, 'other-prompt'])('sends completion only on the final POST and preserves Plan metadata (replyToId: %s)', async (replyToId) => {
    const { stream: createStream, requests, ref } = setup();
    const stream = createStream();
    stream.emit('Here is ');
    stream.emit('the answer.');
    const final = new MessageActivityInput('', {
      entities: [complete], textFormat: 'extendedmarkdown',
      channelData: { feedbackLoop: { type: 'default' } },
      replyToId,
    });
    const original = JSON.stringify(final);
    stream.emit(final);
    const pending = stream.close();
    await jest.runAllTimersAsync();
    const result = await pending;
    expect(result?.id).toBe('answer');
    expect(result?.replyToId).toBe(replyToId ?? 'prompt');
    const payloads = requests.map((request) => JSON.parse(request.data));
    expect(requests.every((request) => request.method === 'post')).toBe(true);
    for (const chunk of payloads.slice(0, -1)) {
      expect(chunk.type).toBe('typing');
      expect(chunk.replyToId).toBe('prompt');
      expect(chunk.entities).not.toContainEqual(complete);
    }
    expect(payloads.at(-1)).toMatchObject({
      type: 'message', id: 'answer', text: 'Here is the answer.', textFormat: 'extendedmarkdown',
      replyToId: replyToId ?? 'prompt',
      channelData: { feedbackLoop: { type: 'default' } },
    });
    expect(payloads.at(-1).entities).toContainEqual(complete);
    expect(payloads.at(-1).entities).toContainEqual(expect.objectContaining({ type: 'streaminfo', streamType: 'final' }));
    expect(JSON.stringify(final)).toBe(original);
    expect(ref.activityId).toBe('prompt');
    expect(await stream.close()).toBe(result);
  });

  it('uses the same final-message construction with and without Plan metadata', async () => {
    const payloads: IMessageActivityInput[] = [];
    for (const withPlan of [false, true]) {
      const { stream: createStream, requests } = setup();
      const stream = createStream();
      const message = new MessageActivityInput('Answer', {
        summary: 'Summary', value: { custom: 'value' },
        recipient: { id: 'recipient', role: 'user' },
      });
      if (withPlan) message.addEntity(complete);
      stream.emit(message);
      await jest.runAllTimersAsync();
      await stream.close();
      const payload: IMessageActivityInput = JSON.parse(requests[requests.length - 1].data);
      payload.entities = payload.entities?.filter((entity) => entity.type !== 'planInfo');
      payloads.push(payload);
    }
    expect(payloads[1]).toEqual(payloads[0]);
  });

  it.each(['', null])('retains the stream ID after an empty completion response: %p', async (data) => {
    const { stream: createStream, responses, requests } = setup();
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    responses.push({ data, status: 202 });

    expect(await stream.close()).toMatchObject({ id: 'answer', text: 'Answer' });
    expect(requests).toHaveLength(2);
    expect(JSON.parse(requests[1].data)).toMatchObject({ id: 'answer', entities: expect.arrayContaining([complete]) });
  });

  it.each(['inherited', 'explicit'] as const)('does not locally reject %s targeted Plan streaming', async (audience) => {
    const { stream: createStream, ref, requests } = setup();
    if (audience === 'inherited') ref.bot.isTargeted = true;
    const stream = createStream();
    const first = new MessageActivityInput('Private answer').addEntity(complete);
    if (audience === 'explicit') first.withRecipient({ id: 'private-user', role: 'user' }, true);
    stream.emit(first);
    await jest.runAllTimersAsync();
    await stream.close();
    expect(requests).toHaveLength(2);
    const final = JSON.parse(requests[1].data);
    expect(final.entities).toContainEqual(complete);
    expect(final.from).toEqual(ref.bot);
  });

  it('reopens after Plan completion without retaining Plan metadata', async () => {
    const { stream: createStream, requests } = setup();
    const stream = createStream();
    stream.emit(new MessageActivityInput('Plan answer').addEntity(complete));
    await jest.runAllTimersAsync();
    await stream.close();
    stream.emit('Next answer');
    expect(stream.closed).toBe(false);
    await jest.runAllTimersAsync();
    await stream.close();
    expect(stream.closed).toBe(true);
    expect(requests).toHaveLength(4);
    expect(JSON.parse(requests[3].data).entities).not.toContainEqual(complete);
  });

  it.each([
    ['exceeded streaming time', 'timedOut'],
    ['stream canceled by user', 'canceled'],
  ] as const)('keeps existing close behavior after %s before any stream ID exists', async (message, status) => {
    const { stream: createStream, responses, requests } = setup();
    responses.push({ status: 403, code: 'ServiceError', message });
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    expect(stream[status]).toBe(true);
    await expect(stream.close()).resolves.toBeUndefined();
    expect(requests).toHaveLength(1);
  });

  it.each([false, true])('never falls back to PUT on timeout (during chunk: %s)', async (duringChunk) => {
    const { stream: createStream, requests, responses } = setup();
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    responses.push({ code: 'ServiceError', message: 'exceeded streaming time', status: 403 });
    if (duringChunk) {
      stream.emit(new MessageActivityInput(' continued').addEntity(complete));
      await jest.runAllTimersAsync();
    }
    await expect(stream.close()).rejects.toThrow(StreamTimedOutError);
    expect(requests).toHaveLength(2);
    expect(requests.every((request) => request.method === 'post')).toBe(true);
  });

  it('does not retry or fall back on HTTP 409 PlanConflict during completion', async () => {
    const { stream: createStream, requests, responses } = setup();
    const stream = createStream();
    const onClose = jest.fn();
    stream.events.on('close', onClose);
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    const message = 'The user stopped this plan. It can no longer be updated or completed.';
    responses.push({ code: 'PlanConflict', status: 409, message });
    const started = Date.now();
    const closing = stream.close();
    const rejection = expect(closing).rejects.toMatchObject({
      name: 'PlanConflictStreamError',
      code: AxiosError.ERR_BAD_REQUEST,
      response: { status: 409, data: { error: { code: 'PlanConflict', message } } },
      cause: expect.any(AxiosError),
    });

    await Promise.all([jest.runAllTimersAsync(), rejection]);

    await expect(closing).rejects.toBeInstanceOf(AxiosError);
    expect(Date.now()).toBe(started);
    expect(requests).toHaveLength(2);
    expect(requests.every((request) => request.method === 'post')).toBe(true);
    expect(JSON.parse(requests[1].data).type).toBe('message');
    expect(onClose).not.toHaveBeenCalled();
    expect(stream.canceled).toBe(false);
    expect(stream.timedOut).toBe(false);
  });

  it('uses the existing retry policy for PlanNotFound from a chunk', async () => {
    const { stream: createStream, requests, responses } = setup();
    responses.push({ code: 'PlanNotFound', status: 409 });
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    await expect(stream.close()).resolves.toMatchObject({ id: 'answer' });
    expect(requests).toHaveLength(3);
  });

  it.each<Response>([
    { code: 'PlanNotFound', status: 409 },
    { code: 'OtherConflict', status: 409 },
    { code: 'PlanConflict', status: 500 },
    { code: 'PlanConflict', status: 503 },
    { code: 'ServiceError', status: 500 },
    { data: { error: null }, status: 409 },
    { data: null, status: 409 },
    { data: 'not JSON', status: 409 },
    { status: 409 },
  ])('uses the existing retry policy on completion for %j', async (response) => {
    const { stream: createStream, requests, responses } = setup();
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    responses.push(response);
    const started = Date.now();
    const closing = stream.close();
    await Promise.all([
      jest.runAllTimersAsync(),
      expect(closing).resolves.toMatchObject({ id: 'answer' }),
    ]);
    expect(requests).toHaveLength(3);
    expect(Date.now() - started).toBe(500);
  });

  it('propagates completion errors when the existing retry limit is exhausted', async () => {
    const { stream: createStream, requests, responses } = setup();
    const stream = createStream();
    stream.emit(new MessageActivityInput('Answer').addEntity(complete));
    await jest.runAllTimersAsync();
    responses.push(...Array.from({ length: 5 }, () => ({ code: 'PlanConflict', status: 500 })));
    const rejection = expect(stream.close()).rejects.toMatchObject({
      response: { status: 500, data: { error: { code: 'PlanConflict' } } },
    });
    await Promise.all([jest.runAllTimersAsync(), rejection]);
    expect(requests).toHaveLength(6);
  });
});
