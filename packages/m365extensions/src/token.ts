import type { Activity } from '@microsoft/agents-activity';
import type { IToken } from '@microsoft/teams.api';

const ONE_HOUR_MS = 60 * 60 * 1000;
const DEFAULT_BUFFER_MS = 5 * 60 * 1000;
const DEFAULT_SERVICE_URL = 'https://smba.trafficmanager.net/teams';
const CALLER_ID_BOT = 'urn:botframework:aadappid';
const CALLER_ID_AZURE = 'urn:botframework:azure';

/**
 * Strip any trailing `/` characters from a string without a regular expression.
 *
 * Uses a linear scan instead of `.replace(/\/+$/, '')` so the operation cannot
 * exhibit polynomial backtracking on adversarial input (e.g. a service URL with
 * many trailing slashes) — see the CodeQL `polynomial-redos` alert.
 */
function stripTrailingSlashes(value: string): string {
  let end = value.length;
  while (end > 0 && value.charCodeAt(end - 1) === 47 /* '/' */) {
    end -= 1;
  }
  return value.slice(0, end);
}

/**
 * A short-lived token describing the bot identity for a single inbound Teams
 * activity, derived from the activity's `recipient`/`conversation`/`serviceUrl`.
 *
 * teams.ts uses this (via {@link IToken}) to mint the outbound credentials for
 * API calls made while handling the turn, so the bridge does not need its own
 * long-lived credential — it reuses the host Agents SDK app's identity.
 */
export class TeamsToken implements IToken {
  readonly appId: string;
  readonly appDisplayName?: string;
  readonly tenantId?: string;
  readonly serviceUrl: string;
  readonly from: IToken['from'];
  readonly fromId: string;
  readonly expiration: number;

  constructor(options: {
    appId: string;
    appDisplayName?: string;
    tenantId?: string;
    serviceUrl?: string;
  }) {
    this.appId = options.appId;
    this.appDisplayName = options.appDisplayName;
    this.tenantId = options.tenantId;
    this.serviceUrl = stripTrailingSlashes(options.serviceUrl ?? '') || DEFAULT_SERVICE_URL;
    this.from = this.appId ? 'bot' : 'azure';
    this.fromId = this.from === 'bot' ? `${CALLER_ID_BOT}:${this.appId}` : CALLER_ID_AZURE;
    this.expiration = Date.now() + ONE_HOUR_MS;
  }

  static fromActivity(activity: Activity): TeamsToken {
    return new TeamsToken({
      appId: activity.recipient?.id ?? '',
      appDisplayName: activity.recipient?.name,
      tenantId: activity.conversation?.tenantId,
      serviceUrl: activity.serviceUrl,
    });
  }

  isExpired(bufferMs: number = DEFAULT_BUFFER_MS): boolean {
    return this.expiration < Date.now() + bufferMs;
  }

  toString(): string {
    return `teams-sdk-synthetic://app/${this.appId}`;
  }
}
