import { ActivityTypes, Channels } from '@microsoft/agents-activity';
import {
  AgentApplication,
  CloudAdapter,
  getAuthConfigWithDefaults,
  MemoryStorage,
  RouteRank,
  TurnContext,
  type TurnState,
} from '@microsoft/agents-hosting';
import { startServer } from '@microsoft/agents-hosting-express';
import { cardAttachment, MessageActivityInput, type MessageReactionActivity } from '@microsoft/teams.api';
import { isTeamsChannel, useTeamsSdk } from '@microsoft/teams.m365extensions';

import { helpCard, taskFormCard, taskLauncherCard } from './cards';

const GRAPH_BASE_URL = 'https://graph.microsoft.com/v1.0';

type GraphUser = {
  displayName?: string;
  userPrincipalName?: string;
};

type GraphMessage = {
  subject?: string;
  receivedDateTime?: string;
};

type GraphResponse = GraphUser & {
  value?: GraphMessage[];
  error?: { message?: string };
};

function command(name: string): RegExp {
  const mention = '(?:<at\\b[^>]*>[\\s\\S]*?</at>|@\\S+)';
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^\\s*(?:${mention}\\s*)*${escaped}[ \\t]*(?:\\r?\\n[\\s\\S]*)?$`, 'i');
}

const AUTH_CONFIG = getAuthConfigWithDefaults({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  tenantId: process.env.TENANT_ID,
});
const ADAPTER = new CloudAdapter(AUTH_CONFIG);
const CONNECTION_MANAGER = ADAPTER.connectionManager;
const STORAGE = new MemoryStorage();

const AUTH_HANDLER_IDS = [
  ...new Set(
    Object.keys(process.env)
      .map((key) => /^AGENTAPPLICATION__USERAUTHORIZATION__HANDLERS__(.+?)__/i.exec(key)?.[1])
      .filter((id): id is string => id !== undefined)
  ),
];

const AGENT_SDK_APP = new AgentApplication<TurnState>({
  storage: STORAGE,
  adapter: ADAPTER,
});

AGENT_SDK_APP.onError(async (context, error) => {
  console.error('Unhandled error:', error);
  await context.sendActivity(`⚠️ ${error?.name ?? 'Error'}: ${error?.message ?? error}`);
});

function agentSdkOwnsSignIn(context: TurnContext): boolean {
  return (
    context.activity.type === ActivityTypes.Invoke &&
    (context.activity.name ?? '').toLowerCase().startsWith('signin/')
  );
}

const TEAMS_APP = useTeamsSdk(AGENT_SDK_APP, CONNECTION_MANAGER, {}, agentSdkOwnsSignIn);

TEAMS_APP.message(command('help'), async ({ send }) => {
  await send(new MessageActivityInput().addCard('adaptive', helpCard()));
});

TEAMS_APP.message(command('react'), async ({ send, api, activity }) => {
  const response = await send('React to this message! I\'ll add 👍 and remove it.');
  const convId = activity.conversation.id;
  try {
    await api.conversations.addReaction(convId, response.id, 'like');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await api.conversations.deleteReaction(convId, response.id, 'like');
  } catch (err) {
    console.error('react: reactions API call failed', err);
  }
});

TEAMS_APP.message(command('quote'), async ({ reply }) => {
  await reply('Quoting your message!');
});

TEAMS_APP.message(command('targeted'), async ({ send, activity }) => {
  const sender = activity.from;
  const targeted = new MessageActivityInput('👁️ This message is only visible to you.')
    .withRecipient({ id: sender.id, name: sender.name ?? '', role: 'user' }, true);
  await send(targeted);
});

TEAMS_APP.message(command('task'), async ({ send }) => {
  await send(new MessageActivityInput().addCard('adaptive', taskLauncherCard()));
});

TEAMS_APP.on('dialog.open', async () => {
  return {
    task: {
      type: 'continue',
      value: {
        title: 'Sample Task Module',
        card: cardAttachment('adaptive', taskFormCard()),
      },
    },
  };
});

TEAMS_APP.on('dialog.submit', async ({ activity, send }) => {
  const data = activity.value.data;
  await send(`[Teams SDK] Task module submitted. Data: ${JSON.stringify(data)}`);
  return { task: { type: 'message', value: 'Done.' } };
});

TEAMS_APP.on('messageReaction', async ({ activity, send }) => {
  const reactionActivity = activity as MessageReactionActivity;
  const added = reactionActivity.reactionsAdded ?? [];
  const removed = reactionActivity.reactionsRemoved ?? [];
  await send(
    `[Teams SDK] Reactions: added=[${added.map((reaction) => reaction.type).join(',')}] ` +
    `removed=[${removed.map((reaction) => reaction.type).join(',')}]`
  );
});

AGENT_SDK_APP.onMessage(command('help'), async (context: TurnContext) => {
  await context.sendActivity(
    '[Agent SDK] Commands: help, channel, whoami, mail, signout, ' +
    'agents sdk react, agents sdk proactive.\n' +
    'Teams-only extras (react, quote, targeted, task) need the Teams SDK routes.'
  );
});

AGENT_SDK_APP.onMessage(command('channel'), async (context: TurnContext) => {
  const via = isTeamsChannel(context.activity)
    ? 'Teams turn with no matching teams.ts route → fell through'
    : 'non-Teams channel → passed straight through';
  await context.sendActivity(`[Agent SDK] channelId=${context.activity.channelId} (${via})`);
});

AGENT_SDK_APP.onMessage(command('agents sdk react'), async (context: TurnContext) => {
  if (!isTeamsChannel(context.activity)) {
    await context.sendActivity(
      '[Agent SDK] \'agents sdk react\' needs the Teams reactions API; ' +
      `channelId=${context.activity.channelId} returns 404 for it.`
    );
    return;
  }

  const response = await context.sendActivity(
    '[Agent SDK] Adding then removing 👍 via teams.ts API client…'
  );
  const convId = context.activity.conversation!.id;
  const api = TEAMS_APP.api.fromServiceUrl({ serviceUrl: context.activity.serviceUrl! });
  try {
    await api.conversations.addReaction(convId, response!.id!, 'like');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await api.conversations.deleteReaction(convId, response!.id!, 'like');
  } catch (err) {
    console.error('agents sdk react: reactions API call failed', err);
  }
});

AGENT_SDK_APP.onMessage(command('agents sdk proactive'), async (context: TurnContext) => {
  const convId = context.activity.conversation!.id;
  const api = TEAMS_APP.api.fromServiceUrl({ serviceUrl: context.activity.serviceUrl! });
  const bot = context.activity.recipient;
  const outgoing = new MessageActivityInput(
    '[Teams SDK] Proactive message triggered from an Agents SDK handler!',
    { from: { id: bot?.id ?? '', name: bot?.name ?? '', role: 'bot' } }
  );
  await api.conversations.createActivity(convId, outgoing);
});

async function graphGet(
  context: TurnContext,
  handler: string,
  resource: string
): Promise<GraphResponse | null> {
  const token = await AGENT_SDK_APP.authorization.getToken(context, handler);
  if (!token?.token) {
    await context.sendActivity(`[Agent SDK] No token for the '${handler}' handler.`);
    return null;
  }

  const response = await fetch(`${GRAPH_BASE_URL}${resource}`, {
    headers: { Authorization: `Bearer ${token.token}` },
  });
  const body = await response.json() as GraphResponse;
  if (!response.ok) {
    const detail = body.error?.message ?? JSON.stringify(body);
    await context.sendActivity(
      `[Agent SDK] Graph ${resource} returned ${response.status}: ${detail}`
    );
    return null;
  }

  return body;
}

AGENT_SDK_APP.onMessage(
  command('whoami'),
  async (context: TurnContext) => {
    const me = await graphGet(context, 'graphuser', '/me');
    if (me) {
      await context.sendActivity(
        `[Agent SDK] ${me.displayName} (${me.userPrincipalName})\n` +
        'Handler \'graphuser\' — scope User.Read.'
      );
    }
  },
  ['graphuser']
);

AGENT_SDK_APP.onMessage(
  command('mail'),
  async (context: TurnContext) => {
    const data = await graphGet(
      context,
      'graphmail',
      '/me/messages?$top=3&$select=subject,receivedDateTime'
    );
    if (data === null) {
      return;
    }

    const messages = data.value ?? [];
    if (messages.length === 0) {
      await context.sendActivity('[Agent SDK] Mailbox is empty.');
      return;
    }

    const lines = messages.map((message) => `• ${message.subject || '(no subject)'}`).join('\n');
    await context.sendActivity(
      `[Agent SDK] Latest ${messages.length} message(s):\n${lines}\n` +
      'Handler \'graphmail\' — scopes User.Read + Mail.Read.'
    );
  },
  ['graphmail']
);

AGENT_SDK_APP.onMessage(command('signout'), async (context: TurnContext, state: TurnState) => {
  for (const handler of AUTH_HANDLER_IDS) {
    await AGENT_SDK_APP.authorization.signOut(context, state, handler);
  }
  await context.sendActivity(`[Agent SDK] Signed out of: ${AUTH_HANDLER_IDS.join(', ')}.`);
});

if (AUTH_HANDLER_IDS.length > 0) {
  AGENT_SDK_APP.authorization.onSignInSuccess(async (context, _state, handlerId) => {
    await context.sendActivity(`[Agent SDK] Signed in via '${handlerId}'.`);
  });

  AGENT_SDK_APP.authorization.onSignInFailure(async (context, _state, handlerId) => {
    await context.sendActivity(`[Agent SDK] Sign-in failed for '${handlerId}'.`);
  });
}

const NO_AUTH_CHANNELS: string[] = [Channels.Email];

function blockedAuthSelector(name: string) {
  const pattern = command(name);
  return async (context: TurnContext): Promise<boolean> =>
    context.activity.type === ActivityTypes.Message &&
    NO_AUTH_CHANNELS.includes(context.activity.channelId ?? '') &&
    pattern.test(context.activity.text ?? '');
}

async function declineAuth(context: TurnContext): Promise<void> {
  await context.sendActivity(
    `[Agent SDK] Sign-in isn't supported on ${context.activity.channelId} — the OAuth ` +
    'card renders as a static image here, so it can\'t be clicked. Tokens are scoped per ' +
    'channel, so there is nothing to sign in or out of on this one. ' +
    'Try whoami / mail on Teams or Web Chat.'
  );
}

for (const name of ['whoami', 'mail', 'signout']) {
  AGENT_SDK_APP.addRoute(blockedAuthSelector(name), declineAuth, false, RouteRank.First);
}

AGENT_SDK_APP.onActivity(
  ActivityTypes.Message,
  async (context: TurnContext) => {
    let text = (context.activity.text ?? '').trim();
    const firstLine = text.split(/\r?\n/).map((line) => line.trim()).find((line) => line.length > 0) ?? '';
    if (firstLine !== text) {
      text = `${firstLine} […]`;
    }
    await context.sendActivity(`[Agent SDK] (${context.activity.channelId}) You said: ${text}`);
  },
  undefined,
  RouteRank.Last
);

const server = startServer(AGENT_SDK_APP);
server.get('/', (_req: unknown, res: { send: (body: string) => void }) => {
  res.send('M365 Extension sample is running. POST activities to /api/messages.');
});
