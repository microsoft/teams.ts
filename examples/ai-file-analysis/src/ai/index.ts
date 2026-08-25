import { AzureOpenAI } from 'openai';

import { MessageActivityInput } from '@microsoft/teams.api';
import type { IStreamer } from '@microsoft/teams.apps';
import type { ILogger } from '@microsoft/teams.common';

import type { AnalysisRequest } from './file-context';

export type {
  AnalysisRequest,
  AnalyzableFile,
  FileKind,
} from './file-context';
export { classifyFile, prepareAnalysis } from './file-context';

const SYSTEM_PROMPT = `\
You analyze files supplied by the user.

Base your answer on the user's message and the attached content. State clearly when the available files do not support
a conclusion. Do not claim to have inspected files that were not included. Keep the response concise and practical.`;

const REQUIRED_SETTINGS = [
  'AZURE_OPENAI_ENDPOINT',
  'AZURE_OPENAI_API_KEY',
  'AZURE_OPENAI_MODEL_DEPLOYMENT_NAME',
] as const;

let client: AzureOpenAI | undefined;

/**
 * Whether every Azure OpenAI setting this sample needs is present.
 *
 * The sample runs without them: {@link runAnalysis} is skipped and each file is answered with the metadata card instead, so the Teams file API can still be exercised with no model subscription. Nothing here validates the values, only that they were supplied.
 */
export function isAiConfigured(): boolean {
  return REQUIRED_SETTINGS.every((name) => !!process.env[name]);
}

/**
 * Builds the Azure OpenAI client on first use.
 *
 * Deliberately lazy: constructing it at module load would make a missing `.env` crash the whole bot on startup, including the metadata-card path that needs no model at all.
 */
function getClient(): { client: AzureOpenAI; deployment: string } {
  const deployment = required('AZURE_OPENAI_MODEL_DEPLOYMENT_NAME');
  client ??= new AzureOpenAI({
    endpoint: required('AZURE_OPENAI_ENDPOINT'),
    apiKey: required('AZURE_OPENAI_API_KEY'),
    deployment,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-10-21',
  });
  return { client, deployment };
}

/**
 * Sends one stateless request for the current message and streams the reply.
 *
 * SAMPLE GUARDRAIL: nothing is carried between turns. A stateful agent would keep history here, but that would let a later message silently reuse file content the user did not attach to it, and would resend every image on every following turn.
 */
export async function runAnalysis(
  request: AnalysisRequest,
  stream: IStreamer,
  log: ILogger
): Promise<void> {
  try {
    stream.update('Analyzing files...');

    const { client: openai, deployment } = getClient();
    const completion = await openai.chat.completions.create({
      model: deployment,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: request.content },
      ],
      stream: true,
    });

    for await (const chunk of completion) {
      const text = chunk.choices[0]?.delta?.content;
      if (text) {
        stream.emit(text);
      }
    }

    stream.emit(new MessageActivityInput().addAiGenerated());
  } catch (err) {
    const error = err as Error & { status?: number };
    log.error(`File analysis failed: ${error.message}`);
    stream.clearText();
    stream.emit(
      new MessageActivityInput(
        error.status === 429 || error.message.startsWith('429 ')
          ? 'The AI service is temporarily rate-limited. Please wait a moment and try again.'
          : 'I could not analyze those files. Please try again.'
      ).addAiGenerated()
    );
  }
}

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required (set it in .env).`);
  return value;
}
