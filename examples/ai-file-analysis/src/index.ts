import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { classifyFile, isAiConfigured, prepareAnalysis, runAnalysis } from './ai';
import type { AnalyzableFile } from './ai';
import { unsupportedFileCard } from './file-card';

/**
 * Two kinds of code live in this sample, labeled throughout:
 *
 * - `FILE RECEIVE` is the Teams SDK file API itself. This is the part worth copying into your own app.
 * - `SAMPLE GUARDRAIL` is this sample deciding what it is willing to forward to a model. Those limits are arbitrary product choices, not SDK requirements, and your app should pick its own.
 */
const logger = new ConsoleLogger('@examples/ai-file-analysis', {
  level: 'info',
});

const app = new App({ logger });

// SAMPLE GUARDRAIL: the file API needs no model, so the sample stays usable without Azure OpenAI settings. Without them it answers every file with the metadata card instead of analyzing it, which keeps download, content type, scope, and source demonstrable with no model subscription.
const aiConfigured = isAiConfigured();
if (!aiConfigured) {
  logger.warn(
    'Azure OpenAI is not configured, so files will be reported but not analyzed. Set AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_MODEL_DEPLOYMENT_NAME in .env to enable analysis.'
  );
}

const NO_MODEL_NOTE =
  'I downloaded this file, but no model is configured for this sample, so I did not analyze it. Set the Azure OpenAI values in .env to enable analysis.';

app.on('message', async ({ activity, files, send, stream }) => {
  await send({ type: 'typing' });

  // FILE RECEIVE: the files attached to this activity.
  const attached = await files.list();
  if (attached.length === 0) {
    await send(
      aiConfigured
        ? 'Attach one or more files. I analyze text files and images, and describe anything else I cannot read.'
        : 'Attach one or more files. No model is configured, so I will report what I received without analyzing it.'
    );
    return;
  }

  const analyzable: AnalyzableFile[] = [];

  for (const file of attached) {
    let downloaded;
    try {
      // FILE RECEIVE: download once. Every read below uses this in-memory copy rather than refetching through the short-lived Teams download URL.
      downloaded = await file.download();
    } catch (err) {
      logger.warn(`Could not download ${file.name}: ${(err as Error).message}`);
      await send(`I could not download ${file.name}.`);
      continue;
    }

    if (!aiConfigured) {
      await send(unsupportedFileCard(file, downloaded, NO_MODEL_NOTE));
      continue;
    }

    // SAMPLE GUARDRAIL: the SDK hands over every attached file regardless of type. This sample is what narrows that to the formats it will send on.
    const kind = classifyFile(downloaded, file.extension);

    if (kind === 'unsupported') {
      await send(unsupportedFileCard(file, downloaded));
      continue;
    }

    analyzable.push({ file: downloaded, kind });
  }

  if (analyzable.length === 0) {
    return;
  }

  // SAMPLE GUARDRAIL: applies this sample's size and count caps and reports anything it dropped or truncated.
  const analysis = prepareAnalysis(
    activity.stripMentionsText().text ?? '',
    analyzable
  );

  for (const warning of analysis.warnings) {
    await send(warning);
  }

  if (analysis.fileCount === 0) {
    return;
  }

  await runAnalysis(analysis, stream, logger);
});

app.start().catch((err) => logger.error(err));
