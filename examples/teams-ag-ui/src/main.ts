import { randomUUID } from 'crypto';

import { type AbstractAgent } from '@ag-ui/client';

import { type AdaptiveCardActionMessageResponse, cardAttachment, MessageActivity } from '@microsoft/teams.api';
import { App, type IStreamer } from '@microsoft/teams.apps';
import {
  ActionSet,
  AdaptiveCard,
  ExecuteAction,
  SubmitData,
  TextBlock,
} from '@microsoft/teams.cards';
import { ConsoleLogger, type ILogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

import { getPending, hasPending } from './interrupts/pending';
import {
  buildResumeArray,
  getRunOutcome,
  type Interrupt,
  type ResumeEntry,
} from './interrupts/spec-types';
import { getAgentForConversation } from './sessions';
import { demoTools } from './tools';

const logger = new ConsoleLogger('@examples/teams-ag-ui', { level: 'debug' });

const APPROVAL_VERB = 'approval_response';

const app = new App({
  logger,
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ activity, stream, send, log }) => {
  const agent = getAgentForConversation(activity.conversation.id);

  // If we're mid-interrupt, the user typed something instead of clicking
  // the Adaptive Card. Treat free-text as a cancellation and let them
  // start over with a fresh question.
  if (hasPending(activity.conversation.id)) {
    const pending = getPending(activity.conversation.id);
    log.info(`message arrived with ${pending.length} pending interrupt(s); cancelling`);
    const resume = buildResumeArray(
      pending,
      Object.fromEntries(pending.map((i) => [i.id, { status: 'cancelled' as const }]))
    );
    await runAndStream(agent, stream, send, log, { resume, isResume: true });
    // Then run the user's actual message as a fresh turn:
  }

  agent.messages.push({
    id: activity.id ?? randomUUID(),
    role: 'user',
    content: activity.text ?? '',
  });
  await runAndStream(agent, stream, send, log);
});

// Approve/Deny clicks on the interrupt card
app.on(`card.action.${APPROVAL_VERB}`, async ({ activity, send, log }) => {
  const data = activity.value.action.data as {
    interruptId?: string;
    approved?: boolean;
  };
  const conversationId = activity.conversation.id;
  const agent = getAgentForConversation(conversationId);
  const pending = getPending(conversationId);

  if (!pending.length) {
    await send('No pending approval to act on.');
    return ok('No pending approval');
  }
  if (!data.interruptId || !pending.some((p) => p.id === data.interruptId)) {
    await send('Approval target no longer matches a pending interrupt.');
    return ok('Stale approval');
  }

  // Build a spec-correct resume covering every open interrupt. For ones
  // not addressed by this card click (rare in this demo — usually 1), we
  // cancel by default.
  const responses: Record<string, { status: 'resolved' | 'cancelled'; payload?: unknown }> = {};
  for (const i of pending) {
    responses[i.id] =
      i.id === data.interruptId
        ? { status: 'resolved', payload: { approved: !!data.approved } }
        : { status: 'cancelled' };
  }
  const resume = buildResumeArray(pending, responses);

  log.info(`resuming with ${resume.length} entrie(s); approved=${data.approved}`);

  // We don't have access to the per-conversation `stream` here (this is a
  // card action, not a message) — fall back to plain `send`.
  await runAndSend(agent, send, log, { resume });
  return ok('Resumed');
});

app.start().catch((e) => {
  logger.error(e);
  process.exit(1);
});

// ---------- helpers ----------

type RunOpts = {
  resume?: ResumeEntry[];
  isResume?: boolean;
};

/**
 * Run the agent and stream text deltas + tool-call status updates back
 * to Teams. After the run, if the middleware emitted an interrupt
 * outcome, render an Adaptive Card asking for approval.
 */
async function runAndStream(
  agent: AbstractAgent,
  stream: IStreamer,
  send: (a: MessageActivity | string) => Promise<unknown>,
  log: ILogger,
  opts: RunOpts = {}
): Promise<void> {
  let finalText = '';
  let interrupts: Interrupt[] | undefined;

  await agent.runAgent(
    { tools: demoTools, forwardedProps: opts.resume ? { resume: opts.resume } : undefined },
    {
      onTextMessageContentEvent: ({ event }) => {
        const delta = event.delta ?? '';
        finalText += delta;
        stream.emit(delta);
      },
      onToolCallStartEvent: ({ event }) => {
        stream.update(`Using \`${event.toolCallName}\`…`);
      },
      onRunFinishedEvent: ({ event }) => {
        const outcome = getRunOutcome(event);
        if (outcome?.type === 'interrupt') interrupts = outcome.interrupts;
      },
      onRunErrorEvent: ({ event }) => {
        log.error(`agent run errored: ${event.message}`);
      },
    }
  );

  // Cap the text stream (or send a final message in group chats).
  if (finalText) {
    // Streaming activities don't render in group chats.
    // For simplicity, always emit the AI Generated indicator on the stream.
    stream.emit(new MessageActivity().addAiGenerated());
  }

  if (interrupts?.length) {
    await renderInterrupts(send, interrupts);
  }
}

async function runAndSend(
  agent: AbstractAgent,
  send: (a: MessageActivity | string) => Promise<unknown>,
  log: ILogger,
  opts: RunOpts
): Promise<void> {
  let finalText = '';
  let interrupts: Interrupt[] | undefined;

  await agent.runAgent(
    { tools: demoTools, forwardedProps: opts.resume ? { resume: opts.resume } : undefined },
    {
      onTextMessageContentEvent: ({ event }) => {
        finalText += event.delta ?? '';
      },
      onRunFinishedEvent: ({ event }) => {
        const outcome = getRunOutcome(event);
        if (outcome?.type === 'interrupt') interrupts = outcome.interrupts;
      },
      onRunErrorEvent: ({ event }) => {
        log.error(`agent run errored: ${event.message}`);
      },
    }
  );

  if (finalText) await send(new MessageActivity(finalText).addAiGenerated());
  if (interrupts?.length) await renderInterrupts(send, interrupts);
}

async function renderInterrupts(
  send: (a: MessageActivity | string) => Promise<unknown>,
  interrupts: Interrupt[]
): Promise<void> {
  for (const interrupt of interrupts) {
    const card = new AdaptiveCard(
      new TextBlock(interrupt.message ?? 'Approve this action?', { wrap: true, weight: 'Bolder' }),
      new ActionSet(
        new ExecuteAction({ title: 'Approve' })
          .withData(new SubmitData(APPROVAL_VERB, { interruptId: interrupt.id, approved: true }))
          .withStyle('positive'),
        new ExecuteAction({ title: 'Deny' })
          .withData(new SubmitData(APPROVAL_VERB, { interruptId: interrupt.id, approved: false }))
          .withStyle('destructive')
      )
    );
    await send(new MessageActivity('Action requires approval').addAttachments(cardAttachment('adaptive', card)));
  }
}

function ok(value: string): AdaptiveCardActionMessageResponse {
  return {
    statusCode: 200,
    type: 'application/vnd.microsoft.activity.message',
    value,
  };
}
