import { ConsoleLogger } from '@microsoft/teams.common';

import { App, AppOptions } from '../app';
import { HttpMethod, HttpRouteHandler, IHttpServerAdapter } from '../http';
import { createTestApp } from '../test-utils';
import { IPlugin } from '../types';

import {
  ReplyFrame,
  SocketActivityEnvelope,
  SocketConnectionContext,
  SocketConnectionHandlers,
} from './types';

export { App };

jest.mock('./socket-connection', () => {
  const state: {
    contexts: SocketConnectionContext[];
    connections: FakeConnection[];
    autoReadyQueue: boolean[];
    startErrorQueue: Error[];
    expiresInSeconds?: number;
    startCalls: number;
    stopCalls: number;
  } = {
    contexts: [],
    connections: [],
    autoReadyQueue: [],
    startErrorQueue: [],
    startCalls: 0,
    stopCalls: 0,
  };

  class FakeConnection {
    readonly handlers: SocketConnectionHandlers;
    readonly expiresInSeconds?: number;
    readonly autoReady: boolean;
    started = 0;
    stopped = 0;
    private resolveReady?: () => void;

    constructor(
      context: SocketConnectionContext,
      handlers: SocketConnectionHandlers
    ) {
      state.contexts.push(context);
      this.handlers = handlers;
      this.expiresInSeconds = state.expiresInSeconds;
      this.autoReady = state.autoReadyQueue.shift() ?? true;
      state.connections.push(this);
    }

    async start(signal?: AbortSignal): Promise<void> {
      this.started++;
      state.startCalls++;
      const error = state.startErrorQueue.shift();
      if (error) throw error;
      if (this.autoReady) {
        this.handlers.onReady({
          botKey: 'bot1',
          connectionId: `connection-${state.startCalls}`,
        });
        return;
      }
      await new Promise<void>((resolve, reject) => {
        const onAbort = () => {
          signal?.removeEventListener('abort', onAbort);
          reject(new Error('Socket Mode connect aborted'));
        };
        this.resolveReady = () => {
          signal?.removeEventListener('abort', onAbort);
          this.handlers.onReady({
            botKey: 'bot1',
            connectionId: `connection-${state.startCalls}`,
          });
          resolve();
        };
        if (signal?.aborted) {
          onAbort();
        } else {
          signal?.addEventListener('abort', onAbort, { once: true });
        }
      });
    }

    async stop(): Promise<void> {
      this.stopped++;
      state.stopCalls++;
    }

    fireReady(): void {
      this.resolveReady?.();
    }

    drop(error?: Error): void {
      this.handlers.onClosed(error);
    }
  }

  return { SignalRSocketConnection: FakeConnection, __state: state };
});

export type FakeConnection = {
  readonly handlers: SocketConnectionHandlers;
  readonly expiresInSeconds?: number;
  readonly autoReady: boolean;
  readonly started: number;
  readonly stopped: number;
  fireReady(): void;
  drop(error?: Error): void;
};

export const connectionState = (
  jest.requireMock('./socket-connection') as {
    __state: {
      contexts: SocketConnectionContext[];
      connections: FakeConnection[];
      autoReadyQueue: boolean[];
      startErrorQueue: Error[];
      expiresInSeconds?: number;
      startCalls: number;
      stopCalls: number;
    };
  }
).__state;

export class CapturingAdapter implements IHttpServerAdapter {
  readonly routes = new Map<string, HttpRouteHandler>();
  readonly startedPorts: Array<number | string> = [];
  stopCalls = 0;

  registerRoute(
    method: HttpMethod,
    path: string,
    handler: HttpRouteHandler
  ): void {
    this.routes.set(`${method} ${path}`, handler);
  }

  async start(port: number | string): Promise<void> {
    this.startedPorts.push(port);
  }

  async stop(): Promise<void> {
    this.stopCalls++;
  }
}

export const quietLogger = () =>
  new ConsoleLogger('test', { level: 'error' });

export function resetConnectionState(): void {
  connectionState.contexts = [];
  connectionState.connections = [];
  connectionState.autoReadyQueue = [];
  connectionState.startErrorQueue = [];
  connectionState.expiresInSeconds = undefined;
  connectionState.startCalls = 0;
  connectionState.stopCalls = 0;
}

export function createSocketTestApp(
  options: Partial<AppOptions<IPlugin>> = {}
): App {
  return createTestApp({
    clientId: 'bot1',
    logger: quietLogger(),
    socketMode: { geos: [''] },
    ...options,
  });
}

export async function dispatch(
  envelope: SocketActivityEnvelope,
  connectionIndex = connectionState.connections.length - 1
): Promise<ReplyFrame | undefined> {
  return connectionState.connections[connectionIndex].handlers.onActivity(
    envelope
  );
}

export const serviceUrl = 'https://smba.example/teams';

function activityBase(type: string, id: string) {
  return {
    type,
    id,
    from: { id: 'user-1' },
    conversation: { id: 'conversation-1' },
    recipient: { id: 'bot1' },
    channelId: 'msteams',
    serviceUrl,
  };
}

export function messageActivity(overrides: Record<string, unknown> = {}) {
  return {
    ...activityBase('message', 'message-1'),
    text: 'hello',
    ...overrides,
  };
}

export function invokeActivity(
  name: string,
  value: unknown = {},
  overrides: Record<string, unknown> = {}
) {
  return {
    ...activityBase('invoke', 'invoke-1'),
    name,
    value,
    ...overrides,
  };
}

export function eventActivity(
  name: string,
  overrides: Record<string, unknown> = {}
) {
  return {
    ...activityBase('event', 'event-1'),
    name,
    ...overrides,
  };
}

export function envelope(
  activity: Record<string, unknown>,
  envelopeId = `envelope-${String(activity.id ?? 'activity')}`
): SocketActivityEnvelope {
  return {
    type: activity.type as string,
    envelopeId,
    ackRequired: activity.type !== 'invoke',
    payload: activity,
  };
}

export async function ticks(count = 8): Promise<void> {
  for (let i = 0; i < count; i++) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}
