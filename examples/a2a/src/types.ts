import type { AgentCard } from '@a2a-js/sdk';

/**
 * Per-bot configuration. `description` goes into this bot's AgentCard —
 * the peer's LLM reads it to decide whether to hand off here.
 */
export type Config = {
  readonly name: string;
  readonly description: string;
  readonly selfUrl: string;
  readonly peerName: string;
  readonly peerUrl: string;
};

/**
 * Context captured from the inbound Teams activity for the duration of one
 * agent turn, so the `handoff_to_peer` tool callback can build a
 * HandoffMessage without threading the identity through every call.
 */
export type TurnIdentity = {
  readonly aadObjectId: string;
  readonly userName: string;
  readonly tenantId: string;
  readonly serviceUrl: string;
};


/**
 * Payload carried in the A2A DataPart when one bot hands a user off to the
 * other. The receiver uses aadObjectId + tenantId + serviceUrl to create a
 * 1:1 conversation with the user and message them proactively.
 */
export type HandoffMessage = {
  readonly kind: 'handoff';
  readonly from: string;
  readonly userName: string;
  readonly aadObjectId: string;
  readonly tenantId: string;
  readonly serviceUrl: string;
  readonly summary: string;
};

export function isHandoffMessage(value: unknown): value is HandoffMessage {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === 'handoff' &&
    typeof v.from === 'string' &&
    typeof v.userName === 'string' &&
    typeof v.aadObjectId === 'string' && v.aadObjectId.length > 0 &&
    typeof v.tenantId === 'string' && v.tenantId.length > 0 &&
    typeof v.serviceUrl === 'string' && v.serviceUrl.length > 0 &&
    typeof v.summary === 'string'
  );
}

export function buildAgentCard(config: Config): AgentCard {
  const url = `${config.selfUrl.replace(/\/+$/, '')}/a2a`;
  return {
    name: config.name,
    description: config.description,
    version: '1.0.0',
    protocolVersion: '0.3.0',
    url,
    preferredTransport: 'JSONRPC',
    capabilities: {},
    defaultInputModes: ['application/json'],
    defaultOutputModes: ['text/plain'],
    skills: [
      {
        id: 'handoff',
        name: 'Handoff',
        description: `Accepts handoffs of users from peer bots. Specialty: ${config.description}`,
        tags: ['a2a', 'teams', 'handoff'],
      },
    ],
  };
}
