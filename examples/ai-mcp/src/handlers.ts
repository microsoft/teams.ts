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
import { CLARIFICATION_INPUT_ID } from './local-tools';

const OK_RESPONSE: AdaptiveCardActionMessageResponse = {
  statusCode: 200,
  type: 'application/vnd.microsoft.activity.message',
  value: 'OK',
};

/**
 * Wire all bot routes to the agent. Both message paths funnel through
 * `agent.run`:
 *   - `message`                   → activity text as the user turn
 *   - `card.action.clarification` → the option the user picked, as the user turn
 *
 * Feedback routes are independent of the agent — `message.fetch-task` returns
 * a task module dialog and `message.submit.feedback` logs the result.
 */
export function registerHandlers(app: App, agent: Agent, log: ILogger): void {
  app.on('message', async ({ activity, stream }) => {
    const userText = activity.stripMentionsText().text ?? '';
    const result = await agent.run(activity.conversation.id, userText, stream);
    shipResult(result, stream, activity.from.id);
  });

  app.on('card.action.clarification', async ({ activity, stream }) => {
    const data = (activity.value.action.data ?? {}) as Record<string, unknown>;
    const choice = typeof data[CLARIFICATION_INPUT_ID] === 'string'
      ? (data[CLARIFICATION_INPUT_ID] as string)
      : '';

    if (!choice) {
      log.warn('Clarification submit had no clarificationChoice.');
      return OK_RESPONSE;
    }

    const result = await agent.run(activity.conversation.id, choice, stream);
    shipResult(result, stream, activity.from.id);
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
 * Ships a finished agent turn back to Teams. Both paths emit through the
 * streamer so the turn produces exactly one final activity:
 *  - `pendingCard` (clarification): discard any text the model produced
 *    during the tool loop, then emit the card as the final shape — the
 *    streamed activity becomes a card-only reply.
 *  - normal reply: emit a final marker (AI label, custom feedback, citations,
 *    follow-up chips) so the streamer folds them into the final activity.
 */
function shipResult(
  result: AgentRunResult,
  stream: IStreamer,
  recipientId: string
): void {
  if (result.pendingCard) {
    stream.clearText();
    stream.emit(new MessageActivity().addCard('adaptive', result.pendingCard).addAiGenerated());
    return;
  }

  finalizeStreamedMessage(stream, result, recipientId);
}

function finalizeStreamedMessage(
  stream: IStreamer,
  result: AgentRunResult,
  recipientId: string
): void {
  const finalMarker = new MessageActivity().addAiGenerated().addFeedback('custom');
  result.citations.attachCitations(finalMarker, result.fullText);

  if (result.followUps.length > 0) {
    finalMarker.withSuggestedActions({
      to: [recipientId],
      actions: result.followUps.map((prompt) => ({
        type: 'imBack',
        title: prompt,
        value: prompt,
      })),
    });
  }

  stream.emit(finalMarker);
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
