import { ActivityLike, IMessageActivity, SentActivity } from '@microsoft/teams.api';

import { OpenAIChatModel } from '@microsoft/teams.openai';

import { ILogger } from '../../../packages/common/dist/logging/logger';

import { handleFeedbackLoop } from './feedback';
import { handleDocumentationSearch } from './simple-rag';
import { handleStructuredOutput } from './structured-output';
import { handleGetWeatherToolCalling, handlePokemonToolCalling } from './tool-calling';

export type CommandHandler = (
  model: OpenAIChatModel,
  query: IMessageActivity,
  send: (activity: ActivityLike) => Promise<SentActivity>,
  log: ILogger
) => Promise<void>;

/**
 *
 * @param commandStr the user-facing command string
 * @param commandName the name of the command
 * @returns
 */
const extractCommandAndQueryForCommand =
  <TCommandName extends string>(
    commandStr: string,
    commandName: TCommandName,
    handler: CommandHandler | undefined
  ) =>
    (
      text: string
    ): { commandName: TCommandName; query: string; handler: CommandHandler | undefined } | null => {
      const parts = text.split(' ');
      const command = parts.at(0);
      if (!command) {
        return null;
      }
      if (command === commandStr) {
        return { commandName: commandName, query: parts.slice(1).join(' '), handler };
      }
      return null;
    };

export const pokemonCommand = extractCommandAndQueryForCommand(
  'pokemon',
  'pokemon-tool-calling',
  handlePokemonToolCalling
);
export const weatherCommand = extractCommandAndQueryForCommand(
  'weather',
  'get-weather-tool-calling',
  handleGetWeatherToolCalling
);
export const streamCommand = extractCommandAndQueryForCommand(
  'stream',
  'streaming-chat',
  undefined
);
export const feedbackLoopCommand = extractCommandAndQueryForCommand(
  'feedback',
  'feedback-loop',
  handleFeedbackLoop
);
export const ragCommand = extractCommandAndQueryForCommand(
  'rag',
  'simple-rag',
  handleDocumentationSearch
);
export const structuredOutputCommand = extractCommandAndQueryForCommand(
  'structured-output',
  'structured-output',
  handleStructuredOutput
);
