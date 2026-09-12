import { AgenticIdentity, IToken } from '@microsoft/teams.api';

import { GraphCredential } from './files/download';
import { FileActor } from './files/errors';

/**
 * Choose which identity reads a file's bytes, for the current inbound activity.
 *
 * An Agentic User reads as itself, never the app token: an app-only token sees what the app may read tenant-wide, a different set from what was shared with the agent, so it would 403 on exactly the files the agent was given.
 *
 * The token is resolved lazily, so a turn that never touches files never acquires one.
 */
export function selectFilesCredential(options: {
  agenticIdentity?: AgenticIdentity;
  tenantId?: string;
  /** Graph host root derived from the cloud environment, e.g. `https://graph.microsoft.com`. */
  graphBaseUrlRoot?: string;
  getAppGraphToken: (tenantId?: string) => Promise<IToken | null>;
  getAgenticGraphToken: (identity: AgenticIdentity, tenantId?: string) => Promise<IToken | null>;
}): GraphCredential {
  const { agenticIdentity, tenantId, graphBaseUrlRoot, getAppGraphToken, getAgenticGraphToken } = options;

  // Only the actor and how its token is fetched vary. Building the rest here means a new actor is one arm rather than a third copy of the whole credential, and cannot silently omit the host root.
  const as = (actor: FileActor, token: () => Promise<string | undefined>): GraphCredential => ({
    actor,
    token,
    baseUrlRoot: graphBaseUrlRoot,
  });

  if (agenticIdentity) {
    // The activity's tenant is passed alongside the identity: `AgenticIdentity.tenantId` is optional, and without this the acquisition would fall back to the app's *configured* tenant, which for a multi-tenant app is not necessarily the tenant this activity arrived from.
    return as('agenticUser', async () => (await getAgenticGraphToken(agenticIdentity, tenantId))?.toString());
  }

  // `tenantId` is passed through unresolved: `getAppGraphToken` resolves activity tenant, then the bot's configured
  // tenant, then `common`. Defaulting here short-circuits that chain and gives a single-tenant bot a `common` token
  // on this path only.
  return as('app', async () => (await getAppGraphToken(tenantId))?.toString());
}
