import { context as otelContext, propagation } from '@opentelemetry/api';

import type { Activity } from '@microsoft/teams.api';

import { APP_BAGGAGE_KEYS } from './constants';

/**
 * Builds Agent365-compatible OpenTelemetry baggage for Teams app operations.
 *
 * Use the typed setters for known Agent365 keys, {@link set} for additional
 * keys, and {@link withTeamsBaggage} to execute work in the callback-scoped
 * OpenTelemetry context that carries the built baggage.
 */
export class TeamsBaggageBuilder {
  private readonly entries = new Map<string, string>();

  /**
   * Creates an Agent365 baggage builder. Pass an inbound Teams activity to
   * prepopulate activity-derived baggage; omit it to start empty and add values
   * with typed setters or {@link set}.
   */
  constructor(activity?: Activity) {
    if (activity) {
      this.fromActivity(activity);
    }
  }

  /**
   * Sets `microsoft.tenant.id`, the Microsoft 365 tenant identifier.
   */
  tenantId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.tenantId, value);
  }

  /**
   * Sets `gen_ai.conversation.id`, the Teams conversation identifier.
   */
  conversationId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.conversationId, value);
  }

  /**
   * Sets `microsoft.conversation.item.link`, the link or service URL associated
   * with the conversation item.
   */
  conversationItemLink(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.conversationItemLink, value);
  }

  /**
   * Sets `microsoft.channel.name`, the Teams channel identifier or name.
   */
  channelName(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.channelName, value);
  }

  /**
   * Sets `microsoft.channel.link`, the channel link when a caller can provide
   * one. This value is not derived automatically from inbound activities.
   */
  channelLink(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.channelLink, value);
  }

  /**
   * Sets `gen_ai.agent.id`, the agent or bot identifier.
   */
  agentId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agentId, value);
  }

  /**
   * Sets `gen_ai.agent.name`, the agent or bot display name.
   */
  agentName(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agentName, value);
  }

  /**
   * Sets `microsoft.agent.user.id`, the Agent365 user identifier.
   */
  agenticUserId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agenticUserId, value);
  }

  /**
   * Sets `microsoft.a365.agent.blueprint.id`, the Agent365 app blueprint
   * identifier.
   */
  agentBlueprintId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agentBlueprintId, value);
  }

  /**
   * Sets `user.name`, the caller display name.
   */
  userName(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.userName, value);
  }

  /**
   * Sets `service.name`, the logical operation source for downstream Agent365
   * telemetry correlation.
   */
  operationSource(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.operationSource, value);
  }

  /**
   * Sets `server.address` and, when provided, `server.port` for an invoked agent
   * server.
   */
  invokeAgentServer(
    address: string | number | null | undefined,
    port?: string | number | null | undefined
  ): this {
    this.set(APP_BAGGAGE_KEYS.serverAddress, address);
    return this.set(APP_BAGGAGE_KEYS.serverPort, port);
  }

  /**
   * Sets `user.id`, the caller Azure AD object identifier when available.
   */
  userId(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.userId, value);
  }

  /**
   * Sets `user.email`, the caller email address when available.
   */
  userEmail(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.userEmail, value);
  }

  /**
   * Sets `gen_ai.agent.description`, the agent description or user-role
   * metadata when available.
   */
  agentDescription(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agentDescription, value);
  }

  /**
   * Sets `microsoft.agent.user.email`, the Agent365 user email address when
   * available.
   */
  agenticUserEmail(value: string | number | null | undefined): this {
    return this.set(APP_BAGGAGE_KEYS.agenticUserEmail, value);
  }

  /**
   * Sets an arbitrary baggage key. Use this escape hatch for Agent365 keys that
   * are not yet covered by a typed setter.
   *
   * Blank keys and null, undefined, or blank values are ignored.
   */
  set(key: string, value: string | number | null | undefined): this {
    const baggageKey = key.trim();
    const baggageValue = normalizeBaggageValue(value);

    if (!baggageKey || baggageValue === undefined) {
      return this;
    }

    this.entries.set(baggageKey, baggageValue);
    return this;
  }

  /**
   * Populates the builder with baggage values derived from an inbound Teams
   * activity. Existing entries are overwritten by derived non-blank values.
   */
  fromActivity(activity: Activity): this {
    const tenantId = activity.recipient?.tenantId ?? activity.channelData?.tenant?.id;
    const agentId = activity.recipient?.agenticAppId ?? activity.recipient?.id;

    return this
      .tenantId(tenantId)
      .conversationId(activity.conversation?.id)
      .conversationItemLink(activity.serviceUrl)
      .channelName(activity.channelId)
      .userId(activity.from?.aadObjectId)
      .userName(activity.from?.name)
      .userEmail(activity.from?.email)
      .agentId(agentId)
      .agentName(activity.recipient?.name)
      .agenticUserId(activity.recipient?.agenticUserId)
      .agentBlueprintId(activity.recipient?.agenticAppBlueprintId)
      .agenticUserEmail(activity.recipient?.email)
      .agentDescription(activity.recipient?.userRole);
  }

  /**
   * Runs a callback in an OpenTelemetry context that carries the built baggage.
   *
   * The previous active context is restored by OpenTelemetry after the callback
   * completes. If a consumer has configured an async context manager, async work
   * spawned by the callback remains in the scoped context according to that
   * context manager's behavior.
   */
  run<T>(callback: () => T): T {
    let baggage = propagation.getActiveBaggage() ?? propagation.createBaggage();

    for (const [key, value] of this.entries) {
      baggage = baggage.setEntry(key, { value });
    }

    const baggageContext = propagation.setBaggage(otelContext.active(), baggage);
    return otelContext.with(baggageContext, callback);
  }
}

/**
 * Runs a callback in an OpenTelemetry context carrying baggage derived from an
 * inbound Teams activity.
 *
 * Pass `undefined` to run with only the currently active baggage when no
 * activity is available.
 */
export function withTeamsBaggage<T>(
  activity: Activity | undefined,
  callback: () => T
): T;

/**
 * Runs a callback in an OpenTelemetry context carrying baggage derived from an
 * inbound Teams activity plus additional values configured on the builder.
 *
 * The configure callback runs before the baggage scope is activated, and should
 * use the typed setters or {@link TeamsBaggageBuilder.set} to add values.
 */
export function withTeamsBaggage<T>(
  activity: Activity | undefined,
  configure: (builder: TeamsBaggageBuilder) => void,
  callback: () => T
): T;

export function withTeamsBaggage<T>(
  activity: Activity | undefined,
  configureOrCallback: ((builder: TeamsBaggageBuilder) => void) | (() => T),
  callback?: () => T
): T {
  const builder = new TeamsBaggageBuilder(activity);

  if (!callback) {
    return builder.run(configureOrCallback as () => T);
  }

  const configure = configureOrCallback as (builder: TeamsBaggageBuilder) => void;
  configure(builder);
  return builder.run(callback);
}

function normalizeBaggageValue(value: string | number | null | undefined): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (typeof value === 'number' && !Number.isFinite(value)) {
    return undefined;
  }

  const normalized = String(value).trim();
  return normalized || undefined;
}
