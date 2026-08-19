import type { IDownloadedFile, IIncomingFile } from '@microsoft/teams.apps';
import {
  AdaptiveCard,
  Container,
  Fact,
  FactSet,
  TextBlock,
} from '@microsoft/teams.cards';

/**
 * FILE RECEIVE: the no-LLM response for a file this sample will not send to the model.
 *
 * Nothing here touches Azure OpenAI. It reports what the file API exposes (`scope`, `source`, resolved content type) plus the byte count that was actually downloaded, so the file round-trip is still demonstrated for formats the model never sees.
 *
 * @param note Overrides the closing explanation. Defaults to the unsupported-format wording; the no-model path passes its own so the card does not imply the file type was the problem.
 */
export function unsupportedFileCard(
  file: IIncomingFile,
  downloaded: IDownloadedFile,
  note = 'I downloaded this file but did not analyze it. This sample sends only text files and PNG, JPEG, GIF, or WebP images to the model.'
): AdaptiveCard {
  return new AdaptiveCard(
    new Container(
      new TextBlock('File received', {
        weight: 'Bolder',
        size: 'Large',
        color: 'Accent',
      }),
      new TextBlock(downloaded.filename, { weight: 'Bolder', wrap: true })
    ).withStyle('emphasis'),
    new FactSet(
      new Fact('Type', downloaded.contentType),
      new Fact('Size', humanSize(downloaded.bytes.length)),
      new Fact('Scope', file.scope),
      new Fact('Source', file.source)
    ),
    new TextBlock(note, { wrap: true, isSubtle: true, spacing: 'Medium' })
  );
}

function humanSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(1)} ${units[unit]}`;
}
