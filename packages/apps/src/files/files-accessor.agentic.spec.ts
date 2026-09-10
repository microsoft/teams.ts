import {
  Attachment,
  FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  IMessageActivity,
  MessageActivity,
} from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { FilesAccessor } from './files-accessor';

/**
 * An attachment shaped the way the platform sends one to an Agentic User: a browsable `contentUrl`, and no `downloadUrl` anywhere in `content`.
 */
function agenticAttachment(over: Partial<Attachment> = {}): Attachment {
  return {
    contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
    contentUrl: 'https://contoso.sharepoint.com/personal/a/Documents/report.pdf',
    name: 'report.pdf',
    content: { uniqueId: 'odsp-unique-id', fileType: 'pdf' },
    ...over,
  } as Attachment;
}

function activityWith(attachments: Attachment[], conversationType = 'personal'): MessageActivity {
  return MessageActivity.from({
    type: 'message',
    conversation: { conversationType },
    attachments,
  } as unknown as IMessageActivity);
}

describe('FilesAccessor with no downloadUrl', () => {
  const log = new ConsoleLogger('FilesAccessor.agentic.spec');

  it('surfaces a contentUrl-only attachment as a file', async () => {
    // An Agentic User's attachment carries a `contentUrl` and no `downloadUrl`, so a mapper that requires `downloadUrl` returns an empty `list()` for every file in every scope.
    const files = await new FilesAccessor(activityWith([agenticAttachment()]), log).list();

    expect(files).toHaveLength(1);
    expect(files[0].name).toBe('report.pdf');
    expect(files[0].contentUrl).toBe('https://contoso.sharepoint.com/personal/a/Documents/report.pdf');
    expect(files[0].uniqueId).toBe('odsp-unique-id');
    expect(files[0].extension).toBe('pdf');
  });

  it('skips a contentUrl-only attachment outside personal scope', async () => {
    // The platform's agentic path applies no scope filter, so an agent in a group chat does receive these. Admitting them would put a handle in `list()` that then fails at `download()` with the scope error, which is worse than not surfacing it.
    for (const scope of ['groupChat', 'channel']) {
      const files = await new FilesAccessor(activityWith([agenticAttachment()], scope), log).list();
      expect(files).toHaveLength(0);
    }
  });

  it('still surfaces a downloadUrl attachment outside personal scope', async () => {
    // The scope condition rides on the contentUrl branch only, so traditional-bot behaviour is unchanged: these are surfaced by `list()` and throw the scope error at download time.
    const attachment = agenticAttachment({
      content: { downloadUrl: 'https://download.example/r.pdf?tempauth=abc', fileType: 'pdf' },
    });

    const files = await new FilesAccessor(activityWith([attachment], 'groupChat'), log).list();

    expect(files).toHaveLength(1);
  });

  it('skips an attachment with neither URL', async () => {
    const attachment = agenticAttachment({ contentUrl: undefined, content: { fileType: 'pdf' } });

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips an attachment with no name', async () => {
    const files = await new FilesAccessor(activityWith([agenticAttachment({ name: undefined })]), log).list();

    expect(files).toHaveLength(0);
  });

  it('does not drop the rest of the list when one entry is unusable', async () => {
    const files = await new FilesAccessor(
      activityWith([agenticAttachment({ contentUrl: undefined, content: {} }), agenticAttachment()]),
      log
    ).list();

    expect(files).toHaveLength(1);
  });
});
