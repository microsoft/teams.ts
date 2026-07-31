import { context as otelContext, propagation } from '@opentelemetry/api';

import { isUserBackedAgenticIdentity, type Activity, type AgenticIdentity } from '@microsoft/teams.api';

/**
 * Values accepted by the Agent365 baggage bridge. `null`, `undefined`, blank
 * strings, and non-finite numbers are ignored.
 */
export type Agent365BaggageValue = string | number | null | undefined;

/**
 * Optional identity fields that carry personal data. Never populated unless the
 * app opts into them by name; identifier-only fields are always populated.
 */
export type Agent365BaggageInclude =
  | 'senderName'
  | 'senderEmail'
  | 'agentName'
  | 'agentEmail'
  | 'agentDescription';

/**
 * Agent365-compatible baggage keys populated by the SDK. Exported so app code
 * can read or extend the same shape when creating scopes with an OpenTelemetry distro.
 */
export const Agent365BaggageKeys = {
  /**
   * Microsoft 365 tenant identifier for the operation.
   */
  tenantId: 'microsoft.tenant.id',

  /**
   * Teams conversation identifier used as the Agent365 conversation/session correlation id.
   */
  conversationId: 'gen_ai.conversation.id',

  /**
   * Link or service URL associated with the Teams conversation item.
   */
  conversationItemLink: 'microsoft.conversation.item.link',

  /**
   * Teams channel identifier, such as `msteams`.
   */
  channelName: 'microsoft.channel.name',

  /**
   * Optional channel link supplied by the app when it has one.
   */
  channelLink: 'microsoft.channel.link',

  /**
   * Agent or bot identifier. Agentic app instance id is preferred when present.
   */
  agentId: 'gen_ai.agent.id',

  /**
   * Agent or bot display name. Only set when `include` contains `agentName`.
   */
  agentName: 'gen_ai.agent.name',

  /**
   * Agent365 user identifier for the user-backed AgenticIdentity the operation acts as.
   */
  agenticUserId: 'microsoft.agent.user.id',

  /**
   * Agent365 blueprint identifier backing the agentic app.
   */
  agentBlueprintId: 'microsoft.a365.agent.blueprint.id',

  /**
   * Caller display name. Only set when `include` contains `senderName`.
   */
  userName: 'user.name',

  /**
   * Logical operation source for downstream Agent365 telemetry correlation.
   */
  operationSource: 'service.name',

  /**
   * Caller user identifier. Azure AD object id is preferred when present.
   */
  userId: 'user.id',

  /**
   * Caller email address. Only set when `include` contains `senderEmail`.
   */
  userEmail: 'user.email',

  /**
   * Agent description or role metadata. Only set when `include` contains `agentDescription`.
   */
  agentDescription: 'gen_ai.agent.description',

  /**
   * Agent365 user email address. Only set when `include` contains `agentEmail`.
   */
  agenticUserEmail: 'microsoft.agent.user.email',
} as const;

/**
 * A set of Agent365 baggage entries keyed by baggage key. Prefer
 * {@link Agent365BaggageKeys}; arbitrary keys are allowed for values the SDK
 * does not model.
 */
export type Agent365BaggageEntries = Readonly<Record<string, Agent365BaggageValue>>;

/**
 * Configures how the SDK derives Agent365 baggage from Teams activities and
 * sends. Supply once via `App` options; it applies to every flow the SDK owns.
 */
export interface IAgent365BaggageOptions {
  /**
   * Personal-data fields to include beyond the identifier-only defaults.
   * Defaults to `[]`. Add literals such as `senderName` to opt into each field.
   */
  readonly include?: readonly Agent365BaggageInclude[];

  /**
   * Sets the `service.name` baggage value identifying the logical source of the
   * operation.
   */
  readonly operationSource?: Agent365BaggageValue;

  /**
   * Sets `microsoft.channel.link`. The SDK does not synthesize this from inbound
   * activity data.
   */
  readonly channelLink?: Agent365BaggageValue;

  /**
   * Additional baggage entries merged in after SDK-derived values.
   */
  readonly additionalBaggage?: Agent365BaggageEntries;
}

/**
 * Runs `fn` with the supplied Agent365 baggage layered onto the active context.
 * Supplied values win over existing baggage. Use in proactive flows to open an
 * identity scope before creating the span it should describe.
 *
 * @param values the baggage entries to set. Blank and non-finite values are skipped.
 * @param fn the function to run inside the scope. Its return value is passed through.
 */
export function withAgent365Baggage<T>(values: Agent365BaggageEntries, fn: () => T): T {
  return runWithBaggage(values, fn);
}

/**
 * @internal
 * The identity a flow contributes, keyed by where its values come from. Mapping
 * to baggage keys and gating personal data happen in {@link toBaggageEntries}.
 */
interface IAgent365Source {
  readonly tenantId?: Agent365BaggageValue;
  readonly conversationId?: Agent365BaggageValue;
  readonly conversationItemLink?: Agent365BaggageValue;
  readonly channelName?: Agent365BaggageValue;
  readonly agentId?: Agent365BaggageValue;
  readonly agenticUserId?: Agent365BaggageValue;
  readonly agentBlueprintId?: Agent365BaggageValue;
  readonly userId?: Agent365BaggageValue;
  readonly senderName?: Agent365BaggageValue;
  readonly senderEmail?: Agent365BaggageValue;
  readonly agentName?: Agent365BaggageValue;
  readonly agentEmail?: Agent365BaggageValue;
  readonly agentDescription?: Agent365BaggageValue;
}

/**
 * Baggage key for each opt-in personal-data field.
 */
const INCLUDE_BAGGAGE_KEYS: Record<Agent365BaggageInclude, string> = {
  senderName: Agent365BaggageKeys.userName,
  senderEmail: Agent365BaggageKeys.userEmail,
  agentName: Agent365BaggageKeys.agentName,
  agentEmail: Agent365BaggageKeys.agenticUserEmail,
  agentDescription: Agent365BaggageKeys.agentDescription,
};

/**
 * @internal
 * Resolves the baggage entries an inbound activity contributes.
 */
export function agent365BaggageFromActivity(
  activity: Activity,
  options: IAgent365BaggageOptions
): Agent365BaggageEntries {
  return toBaggageEntries({
    tenantId: activity.recipient?.tenantId
      ?? activity.conversation?.tenantId
      ?? activity.channelData?.tenant?.id,
    conversationId: activity.conversation?.id,
    conversationItemLink: activity.serviceUrl,
    channelName: activity.channelId,
    agentId: activity.recipient?.agenticAppId ?? activity.recipient?.id,
    agenticUserId: activity.recipient?.agenticUserId,
    agentBlueprintId: activity.recipient?.agenticAppBlueprintId,
    userId: activity.from?.aadObjectId ?? activity.from?.id,
    senderName: activity.from?.name,
    senderEmail: activity.from?.email,
    agentName: activity.recipient?.name,
    agentEmail: activity.recipient?.email,
    agentDescription: activity.recipient?.userRole,
  }, options);
}

/**
 * Identity a proactive Agent365 telemetry scope runs as. Per-operation only;
 * host-wide policy is bound by {@link createAgent365Scope}.
 */
export interface IAgent365Scope {
  /**
   * The agentic identity scope the operation runs under. Construct this object
   * directly with the app blueprint, app, user, and tenant identifiers needed
   * for the operation. Omit for app-only work; the agent id then falls back to
   * the opener's `agentId`.
   */
  readonly agenticIdentity?: AgenticIdentity;

  /**
   * The conversation the operation targets, when it has one.
   */
  readonly conversationId?: string;

  /**
   * The human the operation runs on behalf of, when there is one. The agentic
   * user id belongs on `agenticIdentity`, not here.
   */
  readonly userId?: string;

  /**
   * Display name of the human the operation runs on behalf of. Personal data:
   * only populated when the opener's `include` lists `senderName`.
   */
  readonly senderName?: string;

  /**
   * Email of the human the operation runs on behalf of. Personal data: only
   * populated when the opener's `include` lists `senderEmail`.
   */
  readonly senderEmail?: string;

  /**
   * Display name of the agent. Personal data: only populated when the opener's
   * `include` lists `agentName`.
   */
  readonly agentName?: string;

  /**
   * Email of the agentic user the operation acts as. Personal data: only
   * populated when the opener's `include` lists `agentEmail`.
   */
  readonly agentEmail?: string;

  /**
   * Description of the agent. Personal data: only populated when the opener's
   * `include` lists `agentDescription`.
   */
  readonly agentDescription?: string;

  /**
   * Extra baggage entries merged in last. These bypass the `include` gate, since
   * the caller names each entry explicitly.
   */
  readonly additionalBaggage?: Agent365BaggageEntries;
}

/**
 * Host-wide defaults bound into a scope opener by {@link createAgent365Scope}:
 * values an {@link IAgent365Scope} cannot know per call, plus the personal-data policy.
 */
export interface IAgent365ScopeOptions extends IAgent365BaggageOptions {
  /**
   * Sets `microsoft.conversation.item.link` for scopes that do not carry their
   * own. Typically the API client's service URL.
   */
  readonly serviceUrl?: Agent365BaggageValue;

  /**
   * Fallback `gen_ai.agent.id` used when a scope has no `agenticIdentity`. Typically
   * the app's client id.
   */
  readonly agentId?: Agent365BaggageValue;

  /**
   * Sets `microsoft.channel.name`. Proactive work has no inbound activity to
   * derive this from.
   */
  readonly channelName?: Agent365BaggageValue;
}

/**
 * Opens an Agent365 telemetry scope for proactive work. Returned by
 * {@link createAgent365Scope} with host-wide policy applied, so call sites
 * supply identity only.
 */
export type Agent365ScopeOpener = <T>(scope: IAgent365Scope, fn: () => T) => T;

/**
 * Builds a reusable {@link Agent365ScopeOpener} bound to one set of options.
 * Pass the same options given to `App`'s `telemetry.agent365` so proactive
 * baggage matches reactive baggage, and build one per host to share.
 *
 * ```ts
 * const withScope = createAgent365Scope({ operationSource: 'nightly-digest' });
 * await withScope({ agenticIdentity, conversationId }, () => runJob());
 * ```
 *
 * @param options host-wide baggage defaults and personal-data policy. Pass
 * `false` to disable the bridge, which returns an opener that runs `fn`
 * without touching the ambient context.
 */
export function createAgent365Scope(
  options?: IAgent365ScopeOptions | false
): Agent365ScopeOpener {
  if (options === false) {
    return (_scope, fn) => fn();
  }

  const bound = options ?? {};

  return (scope, fn) => {
    const agenticIdentity = scope.agenticIdentity;
    const userBackedIdentity = agenticIdentity && isUserBackedAgenticIdentity(agenticIdentity)
      ? agenticIdentity
      : undefined;

    return withAgent365Baggage(
      {
        ...toBaggageEntries(
          {
            tenantId: agenticIdentity?.tenantId,
            conversationId: scope.conversationId,
            conversationItemLink: bound.serviceUrl,
            channelName: bound.channelName,
            agentId: agenticIdentity?.agenticAppId ?? bound.agentId,
            agenticUserId: userBackedIdentity?.agenticUserId,
            agentBlueprintId: agenticIdentity?.agenticAppBlueprintId,
            userId: scope.userId,
            senderName: scope.senderName,
            senderEmail: scope.senderEmail,
            agentName: scope.agentName,
            agentEmail: scope.agentEmail,
            agentDescription: scope.agentDescription,
          },
          bound
        ),
        ...scope.additionalBaggage,
      },
      fn
    );
  };
}

/**
 * Maps a resolved source onto baggage keys and gates personal data behind
 * `include`. `additionalBaggage` merges last.
 */
function toBaggageEntries(
  source: IAgent365Source,
  options: IAgent365BaggageOptions
): Agent365BaggageEntries {
  const entries: Record<string, Agent365BaggageValue> = {
    [Agent365BaggageKeys.tenantId]: source.tenantId,
    [Agent365BaggageKeys.conversationId]: source.conversationId,
    [Agent365BaggageKeys.conversationItemLink]: source.conversationItemLink,
    [Agent365BaggageKeys.channelName]: source.channelName,
    [Agent365BaggageKeys.agentId]: source.agentId,
    [Agent365BaggageKeys.agenticUserId]: source.agenticUserId,
    [Agent365BaggageKeys.agentBlueprintId]: source.agentBlueprintId,
    [Agent365BaggageKeys.userId]: source.userId,
    [Agent365BaggageKeys.channelLink]: options.channelLink,
    [Agent365BaggageKeys.operationSource]: options.operationSource,
  };

  for (const include of options.include ?? []) {
    entries[INCLUDE_BAGGAGE_KEYS[include]] = source[include];
  }

  return { ...entries, ...options.additionalBaggage };
}

function runWithBaggage<T>(values: Agent365BaggageEntries, fn: () => T): T {
  let baggage = propagation.getActiveBaggage() ?? propagation.createBaggage();
  let changed = false;

  for (const [key, value] of Object.entries(values)) {
    const baggageKey = key.trim();
    const baggageValue = normalizeBaggageValue(value);

    if (!baggageKey || baggageValue === undefined) {
      continue;
    }

    baggage = baggage.setEntry(baggageKey, { value: baggageValue });
    changed = true;
  }

  if (!changed) {
    return fn();
  }

  return otelContext.with(propagation.setBaggage(otelContext.active(), baggage), fn);
}

function normalizeBaggageValue(value: Agent365BaggageValue): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (typeof value === 'number' && !Number.isFinite(value)) {
    return undefined;
  }

  const normalized = `${value}`.trim();
  return normalized ? normalized : undefined;
}
