import {
  AdaptiveCard,
  ChoiceSetInput,
  ExecuteAction,
  SubmitData,
  TextBlock,
} from '@microsoft/teams.cards';

export const CLARIFICATION_TOOL_NAME = 'request_clarification';
export const CLARIFICATION_VERB = 'clarification';
export const CLARIFICATION_INPUT_ID = 'clarificationChoice';
export const CLARIFICATION_CALL_ID_FIELD = 'pendingCallId';

/**
 * The single local tool the agent can call. Defined in OpenAI Responses API
 * shape (flat `type/name/parameters`, not nested under `function: {...}` like
 * chat completions).
 *
 * When invoked, the agent surfaces the call to handler code: we build the
 * clarification card, send it as the bot reply, and submit the
 * function_call_output asynchronously when the user picks an option — so the
 * model's "next turn" is the user's choice, fed back as the tool result.
 */
export const CLARIFICATION_FUNCTION_TOOL = {
  type: 'function' as const,
  name: CLARIFICATION_TOOL_NAME,
  description:
    'Show an Adaptive Card asking the user to clarify their request when ambiguous. ' +
    'The user picks one option and submits; their choice is returned as this function\'s result.',
  strict: true,
  parameters: {
    type: 'object',
    properties: {
      question: {
        type: 'string',
        description: 'The clarification question to ask the user.',
      },
      options: {
        type: 'array',
        description: '2-4 candidate interpretations the user can pick between.',
        items: { type: 'string' },
      },
    },
    required: ['question', 'options'],
    additionalProperties: false,
  },
};

export type ClarificationArgs = {
  question: string;
  options: string[];
};

/**
 * The card carries the agent-supplied options PLUS the `call_id` of the
 * function call that produced it. When the user submits, the action data
 * contains both `clarificationChoice` (chosen option) and `pendingCallId`,
 * so the handler can resume the agent's conversation with the right
 * function_call_output.
 */
export function buildClarificationCard(args: ClarificationArgs, callId: string): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock(args.question, { weight: 'Bolder', size: 'Medium', wrap: true }),
    new ChoiceSetInput(
      ...args.options.map((opt) => ({ title: opt, value: opt }))
    )
      .withId(CLARIFICATION_INPUT_ID)
      .withIsRequired(true)
  ).withActions(
    new ExecuteAction({ title: 'Submit' })
      .withData(new SubmitData(CLARIFICATION_VERB, { [CLARIFICATION_CALL_ID_FIELD]: callId }))
      .withAssociatedInputs('auto')
  );
}
