import { FileUrlExpiredError } from './errors';

describe('FileUrlExpiredError guidance', () => {
  it('states the URL cannot be renewed, and offers no permission remedy', () => {
    const message = new FileUrlExpiredError('firstFetch').message;

    expect(message).not.toContain('not available via the SDK');
    expect(message).not.toContain('Files.Read.All');
    expect(message).not.toContain('Graph');
    expect(message).toContain('sent again');
  });

  it('still points a repeat read at reusing the downloaded file', () => {
    const message = new FileUrlExpiredError('reread').message;

    expect(message).toContain('DownloadedFile');
    expect(message).not.toContain('Files.Read.All');
  });
});
