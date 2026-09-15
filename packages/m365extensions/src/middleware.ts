import {
  type Activity as AgentsActivity,
  ActivityTypes,
} from '@microsoft/agents-activity';
import type { Middleware, TurnContext } from '@microsoft/agents-hosting';
import type { Activity as TeamsActivity, InvokeResponse } from '@microsoft/teams.api';
import type { App } from '@microsoft/teams.apps';

import { _agentSdkContextStore } from './context';
import { TeamsToken } from './token';

const TEAMS_CHANNEL_ID = 'msteams';

/**
 * Predicate that lets a turn skip teams.ts and stay entirely on the host
 * Agents SDK app, even when it arrives on the Teams channel.
 *
 * Return `true` to bypass teams.ts (e.g. to keep `signin/*` invokes on the
 * Agents SDK auth flow); the middleware then calls `next()` without routing.
 */
export type ShouldBypassTeams = (context: TurnContext) => boolean;

/**
 * Whether an activity arrived on the Microsoft Teams channel.
 *
 * Accepts either a plain channel id (e.g. `"msteams"`, or a sub-channel like
 * `"msteams:..."`) or the object form and compares only the base channel.
 */
export function isTeamsChannel(activity: { channelId?: string | { channel?: string } | null }): boolean {
  const channelId = activity.channelId;
  if (!channelId) {
    return false;
  }

  const channel = typeof channelId === 'string'
    ? channelId.split(':', 1)[0]
    : channelId.channel;

  return channel === TEAMS_CHANNEL_ID;
}

/**
 * Agents SDK middleware that routes matching Teams activities to a teams.ts
 * {@link App}, and lets everything else fall through to the host app.
 *
 * For each turn it: ignores non-Teams channels; honors {@link ShouldBypassTeams};
 * and, for a Teams turn, hands off to teams.ts only when the app has a matching
 * route (via `App.hasMatchingRoute`) — otherwise calling `next()` so the host
 * app can handle it. Invoke responses produced by teams.ts are propagated back
 * through the Agents SDK pipeline. Constructed for you by {@link useTeamsSdk}.
 */
export class TeamsMiddleware implements Middleware {
  private readonly _teamsApp: App<any>;
  private readonly _shouldBypassTeams?: ShouldBypassTeams;

  constructor(teamsApp: App<any>, shouldBypassTeams?: ShouldBypassTeams) {
    this._teamsApp = teamsApp;
    this._shouldBypassTeams = shouldBypassTeams;
  }

  async onTurn(context: TurnContext, next: () => Promise<void>): Promise<void> {
    if (!isTeamsChannel(context.activity)) {
      await next();
      return;
    }

    if (this._shouldBypassTeams?.(context)) {
      await next();
      return;
    }

    await this._teamsApp.initialize();

    const coreActivity = context.activity as unknown as TeamsActivity;
    if (!this._teamsApp.hasMatchingRoute(coreActivity)) {
      await next();
      return;
    }

    const event = {
      body: coreActivity,
      token: TeamsToken.fromActivity(context.activity),
    };

    let invokeResponse: InvokeResponse | undefined;
    await _agentSdkContextStore.run(context, async () => {
      invokeResponse = await this._teamsApp.process(event);
    });

    if (context.activity.type === ActivityTypes.Invoke) {
      await this._propagateInvokeResponse(context, invokeResponse);
    }
  }

  private async _propagateInvokeResponse(
    context: TurnContext,
    invokeResponse: InvokeResponse | undefined
  ): Promise<void> {
    if (!invokeResponse || invokeResponse.status === undefined) {
      return;
    }

    const res = {
      type: ActivityTypes.InvokeResponse,
      value: {
        status: invokeResponse.status,
        body: invokeResponse.body,
      },
    } as unknown as AgentsActivity;

    await context.sendActivity(res);
  }
}
