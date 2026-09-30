import { Role } from '@a2a-js/sdk';
import type { AgentCard, SendMessageRequest } from '@a2a-js/sdk';
import { Client, ClientFactory, JsonRpcTransportFactory } from '@a2a-js/sdk/client';

import { ILogger } from '@microsoft/teams.common';

import { Config, HandoffMessage } from './types';


/**
 * Outbound A2A. Resolves the peer's AgentCard once (so the agent can read its
 * live description into its tool description), and ships HandoffMessage
 * payloads as DataParts.
 *
 */
export class A2APeerClient {
  private readonly _config: Config;
  private readonly _log: ILogger;
  private _cachedClient?: Client;
  private _cachedCard?: AgentCard;
  private _initPromise?: Promise<AgentCard>;

  constructor(config: Config, log: ILogger) {
    this._config = config;
    this._log = log;
  }

  /**
   * Fetches the peer's AgentCard via the well-known endpoint and constructs
   * the underlying A2A client. Cached after the first successful call.
   */
  async getPeerCard(): Promise<AgentCard> {
    if (this._cachedCard) return this._cachedCard;
    if (!this._initPromise) this._initPromise = this._resolve();
    return this._initPromise;
  }

  /**
   * Sends a handoff payload as a DataPart to the peer's A2A endpoint.
   */
  async sendHandoff(payload: HandoffMessage): Promise<void> {
    if (!this._cachedClient) await this.getPeerCard();
    const client = this._cachedClient!;

    const params: SendMessageRequest = {
      tenant: '',
      message: {
        messageId: cryptoRandomId(),
        contextId: '',
        taskId: '',
        role: Role.ROLE_USER,
        parts: [
          {
            content: { $case: 'data', value: payload },
            metadata: undefined,
            filename: '',
            mediaType: 'application/json',
          },
        ],
        metadata: undefined,
        extensions: [],
        referenceTaskIds: [],
      },
      configuration: {
        acceptedOutputModes: ['text/plain'],
        taskPushNotificationConfig: undefined,
        returnImmediately: false,
      },
      metadata: undefined,
    };

    try {
      await client.sendMessage(params);
    } catch (err) {
      throw new Error(
        `Peer ${this._config.peerName} rejected handoff: ${(err as Error).message ?? 'unknown'}`
      );
    }
  }

  private async _resolve(): Promise<AgentCard> {
    const baseUrl = this._config.peerUrl.replace(/\/+$/, '');
    this._log.info(`Resolving peer AgentCard at ${baseUrl}`);
    const factory = new ClientFactory({
      transports: [new JsonRpcTransportFactory()],
    });
    const client = await factory.createFromUrl(baseUrl);
    const card = await client.getAgentCard();
    this._cachedClient = client;
    this._cachedCard = card;
    return card;
  }
}

function cryptoRandomId(): string {
  // Node 22+ exposes crypto.randomUUID globally.
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
