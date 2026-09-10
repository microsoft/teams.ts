/**
 * Encode a sharing URL as a Microsoft Graph sharing token, for `GET /shares/{token}/driveItem/...`.
 *
 * Graph's docs spell out base64, strip `=`, then swap `/`->`_` and `+`->`-`. Node's `base64url` encoding is exactly that.
 */
export function encodeSharingUrl(url: string): string {
  return `u!${Buffer.from(url, 'utf8').toString('base64url')}`;
}

/**
 * Build the Graph endpoint that streams a drive item's bytes, reached by its sharing URL.
 *
 * `baseUrlRoot` is a host root such as `https://graph.microsoft.com`, matching what the SDK derives from the cloud's Graph scope. The API version is appended here because the Graph client appends its own: a pre-versioned value produces `/v1.0/v1.0`, and a bare host 404s in a way that reads like a missing item.
 */
export function buildDriveItemContentUrl(sharingUrl: string, baseUrlRoot = 'https://graph.microsoft.com'): string {
  return `${baseUrlRoot.replace(/\/+$/, '')}/v1.0/shares/${encodeSharingUrl(sharingUrl)}/driveItem/content`;
}
