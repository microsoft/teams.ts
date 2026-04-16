/**
 * Bundles all cloud-specific service endpoints for a given Azure environment.
 * Use predefined instances (PUBLIC, US_GOV, US_GOV_DOD, CHINA)
 * or construct a custom one via withOverrides().
 */
export type CloudEnvironment = {
  /** The Azure AD login endpoint (e.g. "https://login.microsoftonline.com") */
  readonly loginEndpoint: string;
  /** The default multi-tenant login tenant (e.g. "botframework.com") */
  readonly loginTenant: string;
  /** The Bot Framework OAuth scope (e.g. "https://api.botframework.com/.default") */
  readonly botScope: string;
  /** The Bot Framework token service base URL (e.g. "https://token.botframework.com") */
  readonly tokenServiceUrl: string;
  /** The OpenID metadata URL for token validation */
  readonly openIdMetadataUrl: string;
  /** The token issuer for Bot Framework tokens (e.g. "https://api.botframework.com") */
  readonly tokenIssuer: string;
  /** The Microsoft Graph token scope (e.g. "https://graph.microsoft.com/.default") */
  readonly graphScope: string;
  /** Allowed service URL hostnames for this cloud environment */
  readonly allowedServiceUrls: readonly string[];
};

/** Microsoft public (commercial) cloud. */
export const PUBLIC: CloudEnvironment = Object.freeze({
  loginEndpoint: 'https://login.microsoftonline.com',
  loginTenant: 'botframework.com',
  botScope: 'https://api.botframework.com/.default',
  tokenServiceUrl: 'https://token.botframework.com',
  openIdMetadataUrl: 'https://login.botframework.com/v1/.well-known/openidconfiguration',
  tokenIssuer: 'https://api.botframework.com',
  graphScope: 'https://graph.microsoft.com/.default',
  allowedServiceUrls: ['smba.trafficmanager.net', 'smba.onyx.prod.teams.trafficmanager.net', 'smba.infra.gcc.teams.microsoft.com'],
});

/** US Government Community Cloud High (GCCH). */
export const US_GOV: CloudEnvironment = Object.freeze({
  loginEndpoint: 'https://login.microsoftonline.us',
  loginTenant: 'MicrosoftServices.onmicrosoft.us',
  botScope: 'https://api.botframework.us/.default',
  tokenServiceUrl: 'https://tokengcch.botframework.azure.us',
  openIdMetadataUrl: 'https://login.botframework.azure.us/v1/.well-known/openidconfiguration',
  tokenIssuer: 'https://api.botframework.us',
  graphScope: 'https://graph.microsoft.us/.default',
  allowedServiceUrls: ['smba.infra.gov.teams.microsoft.us'],
});

/** US Government Department of Defense (DoD). */
export const US_GOV_DOD: CloudEnvironment = Object.freeze({
  loginEndpoint: 'https://login.microsoftonline.us',
  loginTenant: 'MicrosoftServices.onmicrosoft.us',
  botScope: 'https://api.botframework.us/.default',
  tokenServiceUrl: 'https://apiDoD.botframework.azure.us',
  openIdMetadataUrl: 'https://login.botframework.azure.us/v1/.well-known/openidconfiguration',
  tokenIssuer: 'https://api.botframework.us',
  graphScope: 'https://dod-graph.microsoft.us/.default',
  allowedServiceUrls: ['smba.infra.dod.teams.microsoft.us'],
});

/** China cloud (21Vianet). */
export const CHINA: CloudEnvironment = Object.freeze({
  loginEndpoint: 'https://login.partner.microsoftonline.cn',
  loginTenant: 'microsoftservices.partner.onmschina.cn',
  botScope: 'https://api.botframework.azure.cn/.default',
  tokenServiceUrl: 'https://token.botframework.azure.cn',
  openIdMetadataUrl: 'https://login.botframework.azure.cn/v1/.well-known/openidconfiguration',
  tokenIssuer: 'https://api.botframework.azure.cn',
  graphScope: 'https://microsoftgraph.chinacloudapi.cn/.default',
  allowedServiceUrls: ['frontend.botapi.msg.infra.teams.microsoftonline.cn'],
});

/**
 * Creates a new CloudEnvironment by applying non-null overrides on top of a base.
 * Returns the base instance if no override values differ.
 */
export function withOverrides(
  base: CloudEnvironment,
  overrides: Partial<CloudEnvironment>
): CloudEnvironment {
  return Object.freeze({
    loginEndpoint: overrides.loginEndpoint ?? base.loginEndpoint,
    loginTenant: overrides.loginTenant ?? base.loginTenant,
    botScope: overrides.botScope ?? base.botScope,
    tokenServiceUrl: overrides.tokenServiceUrl ?? base.tokenServiceUrl,
    openIdMetadataUrl: overrides.openIdMetadataUrl ?? base.openIdMetadataUrl,
    tokenIssuer: overrides.tokenIssuer ?? base.tokenIssuer,
    graphScope: overrides.graphScope ?? base.graphScope,
    allowedServiceUrls: overrides.allowedServiceUrls ?? base.allowedServiceUrls,
  });
}

const CLOUD_ENVIRONMENTS: Record<string, CloudEnvironment> = {
  public: PUBLIC,
  usgov: US_GOV,
  usgovdod: US_GOV_DOD,
  china: CHINA,
};

/**
 * Resolves a cloud environment name (case-insensitive) to its corresponding instance.
 * Valid names: "Public", "USGov", "USGovDoD", "China".
 */
export function cloudFromName(name: string): CloudEnvironment {
  const env = CLOUD_ENVIRONMENTS[name.toLowerCase()];
  if (!env) {
    throw new Error(
      `Unknown cloud environment: '${name}'. Valid values are: Public, USGov, USGovDoD, China.`
    );
  }
  return env;
}
