import { Attachment, FILE_DOWNLOAD_INFO_CONTENT_TYPE, IMessageActivity, MessageActivity } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { FilesAccessor } from './files-accessor';

const SERVICE_URL = 'https://smba.trafficmanager.net/amer/';

function inlineImage(id: string, contentType = 'image/*', serviceUrl = SERVICE_URL): Attachment {
  return { contentType, contentUrl: `${serviceUrl}v3/attachments/${id}/views/original` };
}

function html(...images: Array<{ id: string; scope?: string }>): Attachment {
  const tags = images
    .map(({ id, scope }) => {
      const itemscope = scope === undefined ? '' : ` itemscope="${scope}"`;
      return `<img src="${SERVICE_URL}v3/attachments/${id}/views/original" itemtype="http://schema.skype.com/AMSImage"${itemscope} itemid="${id}" width="250">`;
    })
    .join('');

  return { contentType: 'text/html', content: `<p>look</p><p>${tags}</p>` };
}

function activityWith(attachments: Attachment[], serviceUrl: string | null = SERVICE_URL): MessageActivity {
  return MessageActivity.from({
    type: 'message',
    serviceUrl: serviceUrl ?? undefined,
    conversation: { conversationType: 'groupChat' },
    attachments,
  } as unknown as IMessageActivity);
}

const reportPdf: Attachment = {
  contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  contentUrl: 'https://contoso.sharepoint.com/report.pdf',
  name: 'report.pdf',
  content: { downloadUrl: 'https://download.example/report.pdf?tempauth=abc', fileType: 'pdf' },
};

describe('FilesAccessor inline images', () => {
  const log = new ConsoleLogger('FilesAccessor.inline.spec');

  afterEach(() => jest.restoreAllMocks());

  it.each([
    ['png', 'image-a1.png', 'png', 'image/png'],
    ['jpeg', 'image-a1.jpg', 'jpg', 'image/jpeg'],
    ['gif', 'image-a1.gif', 'gif', 'image/gif'],
    ['webp', 'image-a1.webp', 'webp', 'image/webp'],
  ])('names and types a %s hint', async (hint, name, extension, contentType) => {
    const image = inlineImage('a1');
    const files = await new FilesAccessor(activityWith([image, html({ id: 'a1', scope: hint })]), log).list();

    expect(files).toHaveLength(1);
    expect(files[0]).toMatchObject({
      name,
      extension,
      contentType,
      attachmentStyle: 'inlineImage',
      source: 'botActivity',
      scope: 'groupChat',
      contentUrl: image.contentUrl,
    });
    expect(files[0].raw).toBe(image);
    expect(files[0].uniqueId).toBeUndefined();
  });

  it.each([['bmp'], ['avif'], ['']])('gives a %p hint no extension and octet-stream', async (hint) => {
    const files = await new FilesAccessor(activityWith([inlineImage('a1'), html({ id: 'a1', scope: hint })]), log).list();

    expect(files[0].name).toBe('image-a1');
    expect(files[0].extension).toBeUndefined();
    expect(files[0].contentType).toBe('application/octet-stream');
  });

  it('gives a missing hint no extension and octet-stream rather than assuming png', async () => {
    const files = await new FilesAccessor(activityWith([inlineImage('a1'), html({ id: 'a1' })]), log).list();

    expect(files[0].name).toBe('image-a1');
    expect(files[0].contentType).toBe('application/octet-stream');
  });

  it('falls back to the attachment content type only when no hint is present', async () => {
    const withoutHtml = await new FilesAccessor(activityWith([inlineImage('a1', 'image/jpeg')]), log).list();
    const wildcard = await new FilesAccessor(activityWith([inlineImage('a1', 'image/*')]), log).list();
    const hintWins = await new FilesAccessor(
      activityWith([inlineImage('a1', 'image/jpeg'), html({ id: 'a1', scope: 'bmp' })]),
      log
    ).list();

    expect(withoutHtml[0]).toMatchObject({ name: 'image-a1.jpg', contentType: 'image/jpeg' });
    expect(wildcard[0]).toMatchObject({ name: 'image-a1', contentType: 'application/octet-stream' });
    expect(hintWins[0]).toMatchObject({ name: 'image-a1', contentType: 'application/octet-stream' });
  });

  it('lists several inline images alongside a file attachment, each with its own style', async () => {
    const file: Attachment = {
      contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
      contentUrl: 'https://contoso.sharepoint.com/report.pdf',
      name: 'report.pdf',
      content: { downloadUrl: 'https://download.example/report.pdf?tempauth=abc', fileType: 'pdf', uniqueId: 'u1' },
    };
    const activity = activityWith([
      inlineImage('a1'),
      file,
      inlineImage('b2'),
      html({ id: 'a1', scope: 'png' }, { id: 'b2', scope: 'webp' }),
    ]);

    const files = await new FilesAccessor(activity, log).list();

    expect(files.map((f) => [f.name, f.attachmentStyle])).toEqual([
      ['image-a1.png', 'inlineImage'],
      ['report.pdf', 'file'],
      ['image-b2.webp', 'inlineImage'],
    ]);
    expect(files[1].uniqueId).toBe('u1');
  });

  describe('attachmentStyle option', () => {
    const mixed = () => activityWith([inlineImage('a1'), reportPdf, inlineImage('b2'), html({ id: 'a1', scope: 'png' }, { id: 'b2', scope: 'png' })]);

    it('returns both styles when omitted', async () => {
      const files = await new FilesAccessor(mixed(), log).list({});

      expect(files.map((f) => f.name)).toEqual(['image-a1.png', 'report.pdf', 'image-b2.png']);
    });

    it('returns only file attachments for file', async () => {
      const files = await new FilesAccessor(mixed(), log).list({ attachmentStyle: 'file' });

      expect(files.map((f) => f.name)).toEqual(['report.pdf']);
    });

    it('returns only pasted images for inlineImage', async () => {
      const files = await new FilesAccessor(mixed(), log).list({ attachmentStyle: 'inlineImage' });

      expect(files.map((f) => f.name)).toEqual(['image-a1.png', 'image-b2.png']);
    });

    it('lets first() skip a leading pasted image', async () => {
      const accessor = new FilesAccessor(mixed(), log);

      expect((await accessor.first())?.name).toBe('image-a1.png');
      expect((await accessor.first({ attachmentStyle: 'file' }))?.name).toBe('report.pdf');
    });

    it('lets first() return undefined when no file has the style', async () => {
      const accessor = new FilesAccessor(activityWith([inlineImage('a1')]), log);

      expect(await accessor.first({ attachmentStyle: 'file' })).toBeUndefined();
    });

    it('does not warn about an inline image it was never going to return', async () => {
      const warn = jest.spyOn(log, 'warn').mockImplementation(() => {});
      const elsewhere = inlineImage('a1', 'image/*', 'https://attacker.example/amer/');

      const files = await new FilesAccessor(activityWith([elsewhere, reportPdf]), log).list({ attachmentStyle: 'file' });

      expect(files.map((f) => f.name)).toEqual(['report.pdf']);
      expect(warn).not.toHaveBeenCalled();
    });
  });

  it('reads hints regardless of attribute order or quote style', async () => {
    const reordered: Attachment = {
      contentType: 'text/html',
      content: '<img itemid=\'a1\' itemscope=\'gif\' alt="x" itemtype=\'http://schema.skype.com/AMSImage\'>',
    };

    const files = await new FilesAccessor(activityWith([inlineImage('a1'), reordered]), log).list();

    expect(files[0].name).toBe('image-a1.gif');
  });

  it('ignores an img hint that is not marked as an inline image', async () => {
    const other: Attachment = { contentType: 'text/html', content: '<img itemid="a1" itemscope="png" itemtype="other">' };

    const files = await new FilesAccessor(activityWith([inlineImage('a1'), other]), log).list();

    expect(files[0].name).toBe('image-a1');
  });

  it('skips an inline image that is not on the activity service URL, with a warning', async () => {
    const warn = jest.spyOn(log, 'warn').mockImplementation(() => {});
    const elsewhere = inlineImage('a1', 'image/*', 'https://attacker.example/amer/');

    const files = await new FilesAccessor(activityWith([elsewhere, inlineImage('b2')]), log).list();

    expect(files.map((f) => f.name)).toEqual(['image-b2']);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('not on the activity\'s service URL'));
  });

  it('does not let a lookalike host match a service URL that lacks a trailing slash', async () => {
    const warn = jest.spyOn(log, 'warn').mockImplementation(() => {});
    const lookalike = inlineImage('a1', 'image/*', 'https://smba.trafficmanager.net.attacker.example/');

    const files = await new FilesAccessor(activityWith([lookalike], 'https://smba.trafficmanager.net'), log).list();

    expect(files).toHaveLength(0);
    expect(warn).toHaveBeenCalled();
  });

  it('does not let a dot segment climb out of the service URL path', async () => {
    const warn = jest.spyOn(log, 'warn').mockImplementation(() => {});
    const climbing = inlineImage('a1', 'image/*', 'https://smba.trafficmanager.net/amer/TENANT/../../');

    const files = await new FilesAccessor(activityWith([climbing], 'https://smba.trafficmanager.net/amer/TENANT/'), log).list();

    expect(files).toHaveLength(0);
    expect(warn).toHaveBeenCalled();
  });

  it('matches a service URL without a trailing slash', async () => {
    const files = await new FilesAccessor(
      activityWith([inlineImage('a1', 'image/*', 'https://smba.trafficmanager.net/amer/')], 'https://smba.trafficmanager.net/amer'),
      log
    ).list();

    expect(files).toHaveLength(1);
  });

  it('matches a service URL whose host differs only in case, keeping the content URL as sent', async () => {
    const image = inlineImage('a1', 'image/*', 'https://SMBA.TrafficManager.net/amer/');

    const files = await new FilesAccessor(activityWith([image], 'https://smba.trafficmanager.net/amer/'), log).list();

    expect(files).toHaveLength(1);
    expect(files[0].contentUrl).toBe(image.contentUrl);
  });

  it('skips inline images when the activity has no service URL', async () => {
    const warn = jest.spyOn(log, 'warn').mockImplementation(() => {});

    const files = await new FilesAccessor(activityWith([inlineImage('a1')], null), log).list();

    expect(files).toHaveLength(0);
    expect(warn).toHaveBeenCalled();
  });

  it('leaves an image attachment that is not at an inline image location alone', async () => {
    const files = await new FilesAccessor(
      activityWith([{ contentType: 'image/png', contentUrl: `${SERVICE_URL}v3/somewhere/else.png` }]),
      log
    ).list();

    expect(files).toHaveLength(0);
  });
});
