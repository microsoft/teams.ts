import type { JSONSchema } from 'openai/lib/jsonschema';
import type { RunnableToolFunction } from 'openai/lib/RunnableFunction';

import {
  AdaptiveCard,
  ChoiceSetInput,
  ExecuteAction,
  SubmitData,
  TextBlock,
} from '@microsoft/teams.cards';
import { ILogger } from '@microsoft/teams.common';


export const CLARIFICATION_TOOL_NAME = 'request_clarification';
export const CLARIFICATION_VERB = 'clarification';
export const CLARIFICATION_INPUT_ID = 'clarificationChoice';

export type ClarificationArgs = {
  question: string;
  options: string[];
};

/**
 * JSON Schema shared by the OpenAI and Anthropic tool definitions.
 */
export const CLARIFICATION_TOOL_SCHEMA: JSONSchema = {
  type: 'object',
  properties: {
    question: {
      type: 'string',
      description: 'The clarification question to ask the user.',
    },
    options: {
      type: 'array',
      items: { type: 'string' },
      description: '2-4 candidate interpretations the user can pick between.',
    },
  },
  required: ['question', 'options'],
  additionalProperties: false,
};

/**
 * Executes the provider-neutral clarification tool.
 */
export async function executeClarificationTool(
  input: unknown,
  pendingCards: AdaptiveCard[],
  log: ILogger
): Promise<string> {
  if (!isClarificationArgs(input)) {
    throw new Error('request_clarification requires a question and 2-4 options.');
  }

  log.info(
    `[tool] ${CLARIFICATION_TOOL_NAME}(question=${input.question}, options=[${input.options.join(', ')}])`
  );
  pendingCards.push(buildClarificationCard(input));
  return 'Clarification card attached.';
}

/**
 * Builds the clarification tool as a RunnableToolFunction. The `function`
 * callback runs during the agent's tool loop: it pushes the card into a
 * per-turn bucket the agent inspects after `runner.done()`, and returns a
 * placeholder string so the model can wrap up the turn (the bot will discard
 * its wrap-up text and send only the card).
 *
 * The user's choice arrives as a fresh user message via the
 * `card.action.clarification` route — same code path as a normal message.
 */
export function buildClarificationTool(
  pendingCards: AdaptiveCard[],
  log: ILogger
): RunnableToolFunction<ClarificationArgs> {
  return {
    type: 'function',
    function: {
      name: CLARIFICATION_TOOL_NAME,
      description:
        'Show an Adaptive Card asking the user to clarify their request when ambiguous. ' +
        'The user picks one option and submits; their choice arrives as the next user turn.',
      parameters: CLARIFICATION_TOOL_SCHEMA,
      function: (args: ClarificationArgs) => executeClarificationTool(args, pendingCards, log),
      parse: (raw: string) => JSON.parse(raw) as ClarificationArgs,
    },
  };
}

function isClarificationArgs(value: unknown): value is ClarificationArgs {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const input = value as Record<string, unknown>;
  return (
    typeof input['question'] === 'string' &&
    Array.isArray(input['options']) &&
    input['options'].length >= 2 &&
    input['options'].length <= 4 &&
    input['options'].every((option) => typeof option === 'string')
  );
}

function buildClarificationCard(args: ClarificationArgs): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock(args.question, { weight: 'Bolder', size: 'Medium', wrap: true }),
    new ChoiceSetInput(
      ...args.options.map((opt) => ({ title: opt, value: opt }))
    )
      .withId(CLARIFICATION_INPUT_ID)
      .withIsRequired(true)
  ).withActions(
    new ExecuteAction({ title: 'Submit' })
      .withData(new SubmitData(CLARIFICATION_VERB))
      .withAssociatedInputs('auto')
  );
}
