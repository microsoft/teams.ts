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

export type ShouldBypassTeams = (context: TurnContext) => boolean;

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
    const router: { select?: (activity: TeamsActivity) => unknown[] } | undefined = (this._teamsApp as any).router;
    const matched = router?.select?.(coreActivity);
    if (!matched || matched.length === 0) {
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
