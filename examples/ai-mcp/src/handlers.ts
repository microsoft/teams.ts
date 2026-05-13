import {
  AdaptiveCardActionMessageResponse,
  cardAttachment,
  MessageActivity,
} from '@microsoft/teams.api';
import { App, IStreamer } from '@microsoft/teams.apps';
import {
  AdaptiveCard,
  SubmitAction,
  TextBlock,
  TextInput,
} from '@microsoft/teams.cards';
import { ILogger } from '@microsoft/teams.common';

import { Agent, AgentRunResult } from './agent';
import { CLARIFICATION_CALL_ID_FIELD, CLARIFICATION_INPUT_ID } from './local-tools';

const OK_RESPONSE: AdaptiveCardActionMessageResponse = {
  statusCode: 200,
  type: 'application/vnd.microsoft.activity.message',
  value: 'OK',
};

/**
 * Wire all bot routes to the agent.
 *   - `message`                   → new user turn (`agent.run`)
 *   - `card.action.clarification` → resumes the agent's pending function call
 *                                    (`agent.submitClarification`)
 * Feedback routes are independent of the agent — `message.fetch-task` returns
 * a task module dialog and `message.submit.feedback` logs the result.
 */
export function registerHandlers(app: App, agent: Agent, log: ILogger): void {
  app.on('message', async ({ activity, stream, send }) => {
    const userText = activity.stripMentionsText().text ?? '';
    const result = await agent.run(activity.conversation.id, userText, stream);
    await shipResult(result, stream, send, activity.from.id);
  });

  app.on('card.action.clarification', async ({ activity, stream, send }) => {
    const data = (activity.value.action.data ?? {}) as Record<string, unknown>;
    const choice = typeof data[CLARIFICATION_INPUT_ID] === 'string' ? data[CLARIFICATION_INPUT_ID] as string : '';
    const callId = typeof data[CLARIFICATION_CALL_ID_FIELD] === 'string' ? data[CLARIFICATION_CALL_ID_FIELD] as string : '';

    if (!choice || !callId) {
      log.warn(`Clarification submit missing fields — choice=${choice ? 'ok' : 'missing'}, callId=${callId ? 'ok' : 'missing'}`);
      return OK_RESPONSE;
    }

    const result = await agent.submitClarification(activity.conversation.id, callId, choice, stream);
    await shipResult(result, stream, send, activity.from.id);
    return OK_RESPONSE;
  });

  app.on('message.fetch-task', async ({ activity }) => {
    const reaction = activity.value?.data?.actionValue?.reaction;
    const card = buildFeedbackCard(reaction);
    return {
      status: 200,
      body: {
        task: {
          type: 'continue',
          value: {
            title: 'Feedback',
            card: cardAttachment('adaptive', card),
          },
        },
      },
    };
  });

  app.on('message.submit.feedback', async ({ activity }) => {
    const { reaction, feedback } = activity.value.actionValue;
    log.info(`Feedback received — reaction: ${reaction}, feedback: ${feedback}`);
    return { status: 200 };
  });
}

/**
 * Ships a finished agent turn back to Teams. Two paths:
 *  - `pendingCard` (clarification): attachment-only message via `send`. The
 *    stream had no text emitted, so `close()` is a no-op.
 *  - normal reply: emit a final marker (AI label, custom feedback, citations)
 *    so the streamer folds them into the final activity, then `close`. Chips
 *    can't ride the streamed activity (`suggestedActions` is dropped by the
 *    streamer), so they ship as a tiny follow-on message.
 */
async function shipResult(
  result: AgentRunResult,
  stream: IStreamer,
  send: (activity: MessageActivity) => Promise<unknown>,
  recipientId: string
): Promise<void> {
  if (result.pendingCard) {
    const cardMessage = new MessageActivity().addCard('adaptive', result.pendingCard);
    await send(cardMessage);
    await stream.close();
    return;
  }

  finalizeStreamedMessage(stream, result);
  await stream.close();

  if (result.followUps.length > 0) {
    await send(buildFollowUpChips(result.followUps, recipientId));
  }
}

function finalizeStreamedMessage(stream: IStreamer, result: AgentRunResult): void {
  const finalMarker = new MessageActivity().addAiGenerated().addFeedback('custom');
  result.citations.attachCitations(finalMarker, result.fullText);
  stream.emit(finalMarker);
}

function buildFollowUpChips(followUps: string[], recipientId: string): MessageActivity {
  return new MessageActivity('').withSuggestedActions({
    to: [recipientId],
    actions: followUps.map((prompt) => ({
      type: 'imBack',
      title: prompt,
      value: prompt,
    })),
  });
}

function buildFeedbackCard(reaction: string | undefined): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock(
      reaction
        ? `You clicked ${reaction}. Tell us more:`
        : 'Tell us more about your experience:',
      { wrap: true }
    ),
    new TextInput()
      .withId('feedbackText')
      .withPlaceholder('Enter your feedback here...')
      .withIsMultiline(true)
  ).withActions(new SubmitAction().withTitle('Submit'));
}
