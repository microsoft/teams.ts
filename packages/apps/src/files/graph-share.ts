/**
 * Encode a sharing URL as a Microsoft Graph sharing token, for `GET /shares/{token}/driveItem/...`.
 *
 * Graph's docs spell out base64, strip `=`, then swap `/`->`_` and `+`->`-`. Node's `base64url` encoding is exactly that.
 */
export function encodeSharingUrl(url: string): string {
  return `u!${Buffer.from(url, 'utf8').toString('base64url')}`;
}

/**
 * Whether a Graph host root is safe to send a bearer token to.
 *
 * The download URL is already required to be https, and it carries no bearer. This one does, so it gets at least the same check. Loopback over http stays allowed so a mock Graph in local development still works.
 */
function isSafeGraphRoot(root: string): boolean {
  try {
    const { protocol, hostname } = new URL(root);
    return protocol === 'https:' || hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]' || hostname === '::1';
  } catch {
    return false;
  }
}

/**
 * Build the Graph endpoint that streams a drive item's bytes, reached by its sharing URL.
 *
 * `baseUrlRoot` is a host root such as `https://graph.microsoft.com`, matching what the SDK derives from the cloud's Graph scope. The API version is appended here because the Graph client appends its own: a pre-versioned value produces `/v1.0/v1.0`, and a bare host 404s in a way that reads like a missing item.
 */
export function buildDriveItemContentUrl(sharingUrl: string, baseUrlRoot = 'https://graph.microsoft.com'): string {
  if (!isSafeGraphRoot(baseUrlRoot)) {
    throw new Error(`cannot fetch file bytes through Graph: the Graph host root must use https, got "${baseUrlRoot}". This request carries a bearer token, so a cleartext root would put it on the wire.`);
  }

  return `${baseUrlRoot.replace(/\/+$/, '')}/v1.0/shares/${encodeSharingUrl(sharingUrl)}/driveItem/content`;
}
