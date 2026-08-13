import { Activity, Attachment, FILE_DOWNLOAD_INFO_CONTENT_TYPE, IMessageActivity, MessageActivity } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { FilesAccessor } from './files-accessor';

function activityWith(attachments: Attachment[], conversationType = 'personal'): MessageActivity {
  return MessageActivity.from({
    type: 'message',
    conversation: { conversationType },
    attachments,
  } as unknown as IMessageActivity);
}

describe('FilesAccessor', () => {
  const log = new ConsoleLogger('FilesAccessor.spec');

  it('maps a file.download.info attachment to an IncomingFile', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      contentUrl: 'https://contoso.sharepoint.com/report.pdf',
      name: 'report.pdf',
      content: {
        downloadUrl: 'https://download.example/report.pdf?tempauth=abc',
        uniqueId: 'odsp-unique-id',
        fileType: 'pdf',
      },
    };

    const accessor = new FilesAccessor(activityWith([attachment]), log);
    const files = await accessor.list();

    expect(files).toHaveLength(1);
    const file = files[0];
    expect(file.uniqueId).toBe('odsp-unique-id');
    expect(file.name).toBe('report.pdf');
    expect(file.extension).toBe('pdf');
    expect(file.scope).toBe('personal');
    expect(file.source).toBe('botActivity');
    expect(file.webUrl).toBe('https://contoso.sharepoint.com/report.pdf');
    expect(file.raw).toBe(attachment);
  });

  it('ignores attachments that are not uploaded files', async () => {
    const card: Attachment = {
      contentType: 'application/vnd.microsoft.card.adaptive',
      content: {},
    };

    const files = await new FilesAccessor(activityWith([card]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips a malformed file.download.info (missing downloadUrl)', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'broken.pdf',
      content: { uniqueId: 'no-url' },
    };

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips a file.download.info that is missing a name', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      content: { downloadUrl: 'https://download.example/anon' },
    };

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips a file.download.info whose content is not an object', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'weird.pdf',
      content: 'https://download.example/not-an-object',
    };

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips a file.download.info whose downloadUrl is not a string', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'weird.pdf',
      content: { downloadUrl: { href: 'https://download.example/nested' }, uniqueId: 'x' },
    };

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('skips a file.download.info carrying a non-string uniqueId alongside a valid downloadUrl', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'weird.pdf',
      content: { downloadUrl: 'https://download.example/weird.pdf', uniqueId: 42 },
    };

    const files = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(files).toHaveLength(0);
  });

  it('ignores unknown extra properties on the content payload', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'extra.pdf',
      content: {
        downloadUrl: 'https://download.example/extra.pdf',
        uniqueId: 'extra-id',
        fileType: 'pdf',
        somethingNew: { nested: true },
      },
    };

    const [file] = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(file.name).toBe('extra.pdf');
    expect(file.uniqueId).toBe('extra-id');
  });

  it('maps a file that has no uniqueId', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'anon.pdf',
      content: { downloadUrl: 'https://download.example/anon.pdf' },
    };

    const [file] = await new FilesAccessor(activityWith([attachment]), log).list();

    expect(file.name).toBe('anon.pdf');
    expect(file.uniqueId).toBeUndefined();
  });

  it('defaults the scope to personal when the conversation type is absent', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'a.pdf',
      content: { downloadUrl: 'https://download.example/a.pdf', uniqueId: 'a' },
    };
    const activity = MessageActivity.from({ type: 'message', attachments: [attachment] } as unknown as IMessageActivity);

    const [file] = await new FilesAccessor(activity, log).list();

    expect(file.scope).toBe('personal');
  });

  it('returns an empty list when the activity has no attachments', async () => {
    const files = await new FilesAccessor(activityWith([]), log).list();
    expect(files).toEqual([]);
  });

  it('returns an empty list when the attachments field is absent', async () => {
    const activity = MessageActivity.from({ type: 'message' } as unknown as IMessageActivity);
    const files = await new FilesAccessor(activity, log).list();
    expect(files).toEqual([]);
  });

  it('returns an empty list for non-message activities', async () => {
    const typing = { type: 'typing', conversation: { conversationType: 'personal' } } as unknown as Activity;
    const files = await new FilesAccessor(typing, log).list();
    expect(files).toEqual([]);
  });

  it('first() returns the first mapped file, or undefined when none', async () => {
    const attachment: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      name: 'a.pdf',
      content: { downloadUrl: 'https://download.example/a.pdf', uniqueId: 'a' },
    };

    expect(await new FilesAccessor(activityWith([attachment]), log).first()).toBeDefined();
    expect(await new FilesAccessor(activityWith([]), log).first()).toBeUndefined();
  });
});
