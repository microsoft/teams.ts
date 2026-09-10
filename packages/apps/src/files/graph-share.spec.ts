import { encodeSharingUrl, buildDriveItemContentUrl } from './graph-share';

describe('encodeSharingUrl', () => {
  it('produces the documented u! form', () => {
    // The worked example from Graph's own documentation, which is the only place the full transform (including the UTF-8 step) is spelled out.
    expect(encodeSharingUrl('https://onedrive.live.com/redir?resid=1&authkey=!x')).toBe(
      'u!aHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS9yZWRpcj9yZXNpZD0xJmF1dGhrZXk9IXg'
    );
  });

  it('strips base64 padding', () => {
    expect(encodeSharingUrl('https://a.example/b')).not.toContain('=');
  });

  it('substitutes both base64url characters', () => {
    // `?` and `~` were chosen because this input's base64 contains both `+` and `/`, which is what makes the substitution observable at all.
    const encoded = encodeSharingUrl('https://example.com/~a?b=ÿÿ>?');
    expect(encoded).not.toContain('+');
    expect(encoded).not.toContain('/');
  });

  it('round-trips non-ASCII, which is the case the UTF-8 step exists for', () => {
    // OneDrive paths embed the file name, so non-ASCII is routine rather than exotic. Encoding as latin1 would silently corrupt these.
    const url = 'https://contoso.sharepoint.com/personal/a/Documents/rapport-café-café.pdf';
    const decoded = Buffer.from(
      encodeSharingUrl(url).slice(2).replace(/_/g, '/').replace(/-/g, '+'),
      'base64'
    ).toString('utf8');
    expect(decoded).toBe(url);
  });

  it('round-trips a URL containing spaces', () => {
    const url = 'https://contoso.sharepoint.com/personal/a/Documents/quarterly report.docx';
    const decoded = Buffer.from(
      encodeSharingUrl(url).slice(2).replace(/_/g, '/').replace(/-/g, '+'),
      'base64'
    ).toString('utf8');
    expect(decoded).toBe(url);
  });
});

describe('buildDriveItemContentUrl', () => {
  /**
   * The value the SDK actually derives, rather than a hand-written one. `app.ts` takes the cloud's Graph scope and reduces it to a host root, and the Graph client appends the version. A test that supplies a pre-versioned base URL asserts a convention this SDK does not use, and would pass while the real value produced a 404.
   */
  function derivedFromScope(graphScope: string): string | undefined {
    return /^(https?:\/\/[^/]+)/i.exec(graphScope.trim())?.[1];
  }

  it('appends the API version, matching how the Graph client composes its base URL', () => {
    const root = derivedFromScope('https://graph.microsoft.com/.default');

    expect(buildDriveItemContentUrl('https://a.example/b', root)).toBe(
      `https://graph.microsoft.com/v1.0/shares/${encodeSharingUrl('https://a.example/b')}/driveItem/content`
    );
  });

  it('routes to the sovereign host when the cloud supplies one', () => {
    // GCCH's Graph scope is `https://graph.microsoft.us/.default`, so the derived root is a different host.
    const root = derivedFromScope('https://graph.microsoft.us/.default');

    expect(buildDriveItemContentUrl('https://a.example/b', root)).toBe(
      `https://graph.microsoft.us/v1.0/shares/${encodeSharingUrl('https://a.example/b')}/driveItem/content`
    );
  });

  it('defaults to the public cloud when no root is supplied', () => {
    expect(buildDriveItemContentUrl('https://a.example/b')).toContain('https://graph.microsoft.com/v1.0/shares/');
  });

  it('does not double the separator when the root has a trailing slash', () => {
    expect(buildDriveItemContentUrl('https://a.example/b', 'https://graph.microsoft.com/')).not.toContain('//v1.0');
  });
});

describe('graph host root safety', () => {
  it('refuses an http root, because the request carries a bearer token', () => {
    // The download URL is already required to be https and carries no bearer. This one does, so it gets at least the
    // same check: a mistyped scheme would otherwise put a Graph token on the wire in cleartext.
    expect(() => buildDriveItemContentUrl('https://a.example/b', 'http://graph.microsoft.com')).toThrow(/must use https/);
  });

  it('allows http on loopback, so a mock Graph in local development still works', () => {
    expect(buildDriveItemContentUrl('https://a.example/b', 'http://localhost:3000')).toContain('http://localhost:3000/v1.0/shares/');
  });

  it('refuses a root that is not a URL at all', () => {
    expect(() => buildDriveItemContentUrl('https://a.example/b', 'not-a-url')).toThrow(/must use https/);
  });
});
