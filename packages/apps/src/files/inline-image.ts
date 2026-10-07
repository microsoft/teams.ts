/**
 * The image formats the SDK gives an extension and a specific MIME type.
 *
 * PNG, JPEG, and WebP are named and typed with confidence.
 * GIF is not: Teams saves a pasted GIF as a static PNG, so it is listed as `.gif` and `image/gif` but downloads as a PNG.
 * Other formats, such as BMP and AVIF, are not given an extension or a specific MIME type.
 */
export type InlineImageFormat = 'png' | 'jpeg' | 'gif' | 'webp';

const INLINE_IMAGE_FORMATS: Record<InlineImageFormat, { extension: string; contentType: string }> = {
  png: { extension: 'png', contentType: 'image/png' },
  jpeg: { extension: 'jpg', contentType: 'image/jpeg' },
  gif: { extension: 'gif', contentType: 'image/gif' },
  webp: { extension: 'webp', contentType: 'image/webp' },
};

const OCTET_STREAM = 'application/octet-stream';

/**
 * Matches the path of an inline image hosted by the Bot API, capturing its attachment id.
 *
 * Pattern: the URL's path ends in `/v3/attachments/<id>/views/original`, so the same text in a query string or fragment does not match.
 * The id becomes part of the file name, so it is limited to letters, digits, `_`, `.`, and `-`, which keeps path separators out of it.
 */
const INLINE_IMAGE_PATH = /\/v3\/attachments\/([\w.-]+)\/views\/original$/i;

const AMS_IMAGE_ITEMTYPE = 'http://schema.skype.com/AMSImage';

/**
 * The attachment id of an inline image, taken from its `contentUrl`, or `undefined` when the URL is not an inline image location.
 */
export function inlineImageId(contentUrl: string): string | undefined {
  let pathname: string;

  try {
    pathname = new URL(contentUrl).pathname;
  } catch {
    return undefined;
  }

  return INLINE_IMAGE_PATH.exec(pathname)?.[1];
}

/**
 * Map each inline image id found in a message's HTML to its format hint.
 *
 * The hint is the `itemscope` attribute of an `<img>` whose `itemtype` marks it as an inline image, keyed by its `itemid`.
 */
export function parseInlineImageHints(html: string): Map<string, string> {
  const hints = new Map<string, string>();

  // Each <img ...> start tag
  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    const attributes = new Map<string, string>();

    // Each name="value", capturing the name and whichever quoted value matched.
    // A name starts only where the previous character is not part of a name, so a long run of name characters is scanned once rather than once per position.
    for (const match of tag.matchAll(/(?<![\w-])([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
      attributes.set(match[1].toLowerCase(), match[2] ?? match[3]);
    }

    const id = attributes.get('itemid');
    const scope = attributes.get('itemscope');

    if (attributes.get('itemtype') === AMS_IMAGE_ITEMTYPE && id && scope) {
      hints.set(id, scope);
    }
  }

  return hints;
}

/** The format named by an `itemscope` hint, or `undefined` when it is not one of {@link InlineImageFormat}. */
export function formatFromHint(hint?: string): InlineImageFormat | undefined {
  const normalized = hint?.trim().toLowerCase();

  if (normalized === 'jpg') {
    return 'jpeg';
  }

  return normalized && Object.prototype.hasOwnProperty.call(INLINE_IMAGE_FORMATS, normalized)
    ? (normalized as InlineImageFormat)
    : undefined;
}

/** The format named by an `image/*` content type, or `undefined` when it is not one of {@link InlineImageFormat}. */
export function formatFromContentType(contentType?: string): InlineImageFormat | undefined {
  // "image/" then the subtype (letters, digits, ".", "+" or "-"), capturing the subtype.
  const match = /^image\/([\w.+-]+)/i.exec(contentType?.trim() ?? '');
  return formatFromHint(match?.[1]);
}

/**
 * The format the bytes actually are, read from their leading magic bytes, or `undefined` when they are none of {@link InlineImageFormat}.
 *
 * The platform can return bytes in a different format from the hint (a GIF downloads as a static PNG), so the bytes are the stronger signal.
 */
export function sniffImageFormat(bytes: Uint8Array): InlineImageFormat | undefined {
  const startsWith = (signature: number[], offset = 0) =>
    bytes.length >= offset + signature.length && signature.every((b, i) => bytes[offset + i] === b);

  if (startsWith([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) {
    return 'png';
  }

  if (startsWith([0xff, 0xd8, 0xff])) {
    return 'jpeg';
  }

  if (startsWith([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]) || startsWith([0x47, 0x49, 0x46, 0x38, 0x39, 0x61])) {
    return 'gif';
  }

  // "RIFF" at byte 0 and "WEBP" at byte 8; bytes 4-7 are the file size.
  if (startsWith([0x52, 0x49, 0x46, 0x46]) && startsWith([0x57, 0x45, 0x42, 0x50], 8)) {
    return 'webp';
  }

  return undefined;
}

/**
 * The filename, extension, and MIME type for an inline image of the given format.
 *
 * An unknown format gets no extension and `application/octet-stream` rather than a guess.
 */
export function inlineImageNaming(
  baseName: string,
  format?: InlineImageFormat
): { name: string; extension?: string; contentType: string } {
  if (!format) {
    return { name: baseName, contentType: OCTET_STREAM };
  }

  const { extension, contentType } = INLINE_IMAGE_FORMATS[format];
  return { name: `${baseName}.${extension}`, extension, contentType };
}
