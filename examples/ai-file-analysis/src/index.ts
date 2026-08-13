import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

import { classifyFile, prepareAnalysis, runAnalysis } from './ai';
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

app.on('message', async ({ activity, files, send, stream }) => {
  await send({ type: 'typing' });

  // FILE RECEIVE: the files attached to this activity.
  const attached = await files.list();
  if (attached.length === 0) {
    await send(
      'Attach one or more files. I analyze text files and images, and describe anything else I cannot read.'
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
