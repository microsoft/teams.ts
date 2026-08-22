import type {
  AgenticIdentity,
  ApiClientSettings,
  CloudEnvironment,
  StripMentionsTextOptions,
  TokenProvider,
} from '@microsoft/teams.api';
import type {
  Client as HttpClient,
  ClientOptions as HttpClientOptions,
  ILogger,
  IStorage,
} from '@microsoft/teams.common';

import type { IAgent365BaggageOptions } from './diagnostics/agent365-baggage';
import type { IHttpServerAdapter } from './http/adapter';
import type { OAuthSettings } from './oauth';
import type { StateOptions } from './state';
import type { IPlugin } from './types';

/**
 * Options for proactive app sends and replies.
 */
export type AppSendOptions = {
  /**
   * Agentic identity scope to use when acquiring tokens for this send.
   */
  readonly agenticIdentity?: AgenticIdentity;
};

/**
 * Options for creating an Agent 365 operation identity from app configuration.
 */
export type AppGetAgenticIdentityOptions = {
  /**
   * ID of the agentic app represented by this identity, when available/needed.
   * Omit or use `null` for blueprint-level scopes.
   */
  readonly agenticAppId?: string | null;

  /**
   * Entra object ID of the user-backed agentic identity, when the operation
   * acts on behalf of a user. Omit or use `null` for app-backed or
   * blueprint-level scopes.
   */
  readonly agenticUserId?: string | null;

  /**
   * Tenant ID for token acquisition. Defaults to the app's resolved credentials
   * or configured `tenantId`.
   */
  readonly tenantId?: string;

  /**
   * ID of the Agentic App Blueprint that backs the agentic app. Defaults to the
   * app client ID resolved from credentials/configuration.
   */
  readonly agenticAppBlueprintId?: string;
};

/**
 * App initialization options.
 */
export type AppOptions<TPlugin extends IPlugin> = {
  /**
   * client id - Your application's client identifier
   * Uses environment variable CLIENT_ID if not explicitly provided
   */
  readonly clientId?: string;

  /**
   * client secret - Your application's secret to be able to send messages
   * as your bot.
   * Uses environment variable CLIENT_SECRET if not explicitly provided
   * If not available, uses ManagedIdentity to authenticate
   */
  readonly clientSecret?: string;

  /**
   * Application ID URI from the Azure portal. Used for user authentication.
   * Matches webApplicationInfo.resource in the app manifest.
   */
  readonly applicationIdUri?: string;

  /**
   * tenantId - The tenantId where your app is registered
   * Uses environment variable TENANT_ID if not explicitly provided
   * If your app has MultiTenant auth enabled (this value should not be provided).
   * (Note: That MultiTenant auth has been deprecated, so only legacy apps will have this
   * value enabled)
   */
  readonly tenantId?: string;

  /**
   * An override to perform token fetching yourself, instead of letting the SDK
   * acquire tokens from `clientSecret` or a managed identity.
   *
   * Pass a function — `(scope, tenantId?) => string` — if the app only ever
   * authenticates as itself, or an object implementing `ITokenProvider` if it
   * also acts with an AgenticIdentity.
   */
  readonly token?: TokenProvider;

  /**
   * managed identity client id - A managed identity client id.
   * Uses environment variable MANAGED_IDENTITY_CLIENT_ID if not explicitly provided
   * If:
   *   - Same as client id, uses User Managed Identity for auth
   *   - "system", uses System Managed Identity in a Federated Identity Credentials
   *   - Different from client id or system, uses UMI in a Federated Identity Credentials
   */
  managedIdentityClientId?: 'system' | (string & {});

  /**
   * http client or client options used to make api requests
   */
  readonly client?: HttpClient | HttpClientOptions | (() => HttpClient);

  /**
   * logger instance to use
   */
  readonly logger?: ILogger;

  /**
   * storage instance to use
   *
   * @deprecated Configure `state.storage` for turn state. Applications that
   * need general persistence should own and use their storage provider directly.
   */
  readonly storage?: IStorage;

  /**
   * Enables per-turn conversation and user state.
   *
   * Pass `true` to use the app storage with the default key prefix, or provide
   * options to configure dedicated storage and a custom key prefix. State is
   * disabled when omitted or `false`.
   */
  readonly state?: boolean | StateOptions;

  /**
   * plugins to extend the apps functionality
   */
  readonly plugins?: Array<TPlugin>;

  /**
   * HTTP server adapter for handling bot requests
   */
  readonly httpServerAdapter?: IHttpServerAdapter;

  /**
   * Legacy app-wide OAuth settings.
   *
   * @deprecated Register connections with `app.addOAuthFlow(...)`. This option
   * remains supported for existing context OAuth helpers.
   */
  readonly oauth?: OAuthSettings;

  /**
   * OAuth connections to register when the app is created.
   *
   * Connection names are matched case-insensitively and must be non-empty and
   * unique. Retrieve a declaratively registered flow with
   * `app.getOAuthFlow(connectionName)` to configure lifecycle callbacks.
   * The legacy default connection remains available when omitted; listing that
   * connection configures the same flow rather than creating a duplicate.
   */
  readonly oauthFlows?: ReadonlyArray<string>;

  /**
   * Activity options.
   */
  readonly activity?: AppActivityOptions;

  /**
   * Dangerously allow incoming HTTP requests without Teams service token validation.
   * Uses environment variable DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS if not explicitly provided.
   */
  readonly dangerouslyAllowUnauthenticatedRequests?: boolean;

  /**
   * @deprecated Use dangerouslyAllowUnauthenticatedRequests instead.
   */
  readonly skipAuth?: boolean;

  /**
   * URL path for the Teams messaging endpoint
   * @default '/api/messages'
   */
  readonly messagingEndpoint?: `/${string}`;

  /**
   * Base Service URL for BotBackend
   * Uses environment variable SERVICE_URL  if not provided
   * and defaults to https://smba.trafficmanager.net/teams
   */
  readonly serviceUrl?: string;

  /**
   * API client settings used for overriding (e.g. oauthUrl).
   * Cloud, tokenProvider, and agenticIdentity are managed internally.
   */
  readonly apiClientSettings?: Pick<ApiClientSettings, 'oauthUrl'>;

  /**
   * Cloud environment for sovereign cloud support.
   * Accepts a CloudEnvironment object or uses CLOUD environment variable.
   * Valid env var values: "Public", "USGov", "USGovDoD", "China".
   * Defaults to PUBLIC (commercial cloud).
   */
  readonly cloud?: CloudEnvironment;

  /**
   * Telemetry settings.
   */
  readonly telemetry?: AppTelemetryOptions;
};

/**
 * Telemetry settings applied across every flow the SDK owns.
 */
export type AppTelemetryOptions = {
  /**
   * Configures the Agent365 baggage the SDK derives from inbound activities.
   *
   * Identifier-only baggage (tenant, conversation, channel, agent, and caller
   * ids) is populated by default; personal-data fields require an explicit
   * `include` entry. Pass `false` to disable the bridge entirely.
   *
   * This covers only the inbound flow. Proactive work should open its own scope
   * with `createAgent365Scope`, which takes the same options.
   */
  readonly agent365?: IAgent365BaggageOptions | false;
};

/**
 * Options controlling inbound activity normalization.
 */
export type AppActivityOptions = {
  /**
   * Mention normalization options.
   */
  readonly mentions?: {
    /**
     * Automatically remove `<at>...</at>` mention
     * from inbound activity `text`
     */
    readonly stripText?: boolean | StripMentionsTextOptions;
  };
};
