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
  it('keeps the pre-authorized route when a metadata field is wrong-typed', async () => {
    // `uniqueId` and `fileType` are metadata. Rejecting the whole `content` over one of them drops the `downloadUrl`
    // beside it, and the file then routes through Graph and fails on a bot holding no Graph credential, reporting a
    // consent problem for what is really bad data.
    // Asserted outside personal scope because the Graph route is personal-only: a file surfaced here can only have
    // reached the list on its `downloadUrl`, which `downloadUrl` being private on the handle makes hard to show directly.
    const wrongTypedMetadata = agenticAttachment({
      content: { downloadUrl: 'https://download.example/tempauth=abc', uniqueId: 42, fileType: 7 },
    } as unknown as Partial<Attachment>);

    const files = await new FilesAccessor(activityWith([wrongTypedMetadata], 'groupChat'), log).list();

    expect(files).toHaveLength(1);
    // Dropped one at a time rather than taken at face value, which would throw later in the sharing-url encoder.
    expect(files[0].uniqueId).toBeUndefined();
    expect(files[0].extension).toBeUndefined();
  });

  it('drops only the wrong-typed field, keeping the valid metadata beside it', async () => {
    const partiallyWrongTyped = agenticAttachment({
      content: { downloadUrl: 'https://download.example/tempauth=abc', uniqueId: 'odsp-unique-id', fileType: 7 },
    } as unknown as Partial<Attachment>);

    const files = await new FilesAccessor(activityWith([partiallyWrongTyped], 'groupChat'), log).list();

    expect(files).toHaveLength(1);
    expect(files[0].uniqueId).toBe('odsp-unique-id');
    expect(files[0].extension).toBeUndefined();
  });

  it('does not open the Graph route when the downloadUrl itself is wrong-typed', async () => {
    // A declared `downloadUrl` the SDK could not use is a broken attachment, not the agentic shape, so no route
    // applies in any scope. Falling to Graph here would resolve a payload already judged malformed, and would do it
    // on whichever identity the turn happens to carry.
    const wrongTypedDownloadUrl = agenticAttachment({
      content: { downloadUrl: 42, uniqueId: 'odsp-unique-id', fileType: 'pdf' },
    } as unknown as Partial<Attachment>);

    expect(await new FilesAccessor(activityWith([wrongTypedDownloadUrl], 'groupChat'), log).list()).toHaveLength(0);
    expect(await new FilesAccessor(activityWith([wrongTypedDownloadUrl]), log).list()).toHaveLength(0);
  });

  it('opens the Graph route for content that parsed and declares no downloadUrl', async () => {
    // The agentic shape itself, which is the one case the route exists for.
    const files = await new FilesAccessor(activityWith([agenticAttachment()]), log).list();

    expect(files).toHaveLength(1);
  });

});
