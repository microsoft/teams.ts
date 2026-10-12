import { formatFromHint, inlineImageId, parseInlineImageHints, sniffImageFormat } from './inline-image';

describe('sniffImageFormat', () => {
  it('recognizes GIF87a as well as GIF89a', () => {
    expect(sniffImageFormat(new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]))).toBe('gif');
  });

  it('does not treat a RIFF container other than WebP as WebP', () => {
    const wav = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x41, 0x56, 0x45]);

    expect(sniffImageFormat(wav)).toBeUndefined();
  });

  it('does not match a signature longer than the bytes', () => {
    expect(sniffImageFormat(new Uint8Array([0x89, 0x50, 0x4e]))).toBeUndefined();
    expect(sniffImageFormat(new Uint8Array([0x52, 0x49, 0x46, 0x46]))).toBeUndefined();
    expect(sniffImageFormat(new Uint8Array([]))).toBeUndefined();
  });
});

describe('formatFromHint', () => {
  it('accepts jpg and any case, and rejects names that are only object keys', () => {
    expect(formatFromHint('JPG')).toBe('jpeg');
    expect(formatFromHint(' Png ')).toBe('png');
    expect(formatFromHint('constructor')).toBeUndefined();
    expect(formatFromHint('toString')).toBeUndefined();
  });
});

describe('inlineImageId', () => {
  it('reads the id only from an inline image location', () => {
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/attachments/0-wus-d1-abc/views/original')).toBe('0-wus-d1-abc');
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/attachments/0-wus-d1-abc/views/thumbnail')).toBeUndefined();
  });

  it('rejects an id that could carry a path separator into the file name', () => {
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/attachments/a\\..\\..\\evil/views/original')).toBeUndefined();
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/attachments/a%5C..%5Cevil/views/original')).toBeUndefined();
  });

  it('reads the id only from the path, not from a query string or fragment', () => {
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/conversations/x/members?x=/v3/attachments/a/views/original')).toBeUndefined();
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/conversations/x/members#/v3/attachments/a/views/original')).toBeUndefined();
    expect(inlineImageId('https://smba.trafficmanager.net/amer/v3/attachments/a/views/original?x=1')).toBe('a');
  });
});

describe('parseInlineImageHints', () => {
  const itemtype = 'http://schema.skype.com/AMSImage';
  const hints = (html: string) => Object.fromEntries(parseInlineImageHints(html));

  it('reads double-quoted, single-quoted, and mixed attribute values', () => {
    expect(hints(`<img itemtype="${itemtype}" itemscope="png" itemid="a">`)).toStrictEqual({ a: 'png' });
    expect(hints(`<img itemtype='${itemtype}' itemscope='png' itemid='a'>`)).toStrictEqual({ a: 'png' });
    expect(hints(`<img itemtype="${itemtype}" itemscope='png' itemid="a">`)).toStrictEqual({ a: 'png' });
  });

  it('does not read an attribute from inside the value of another attribute', () => {
    expect(hints(`<img itemtype="${itemtype}" itemscope="png" alt="a itemscope='gif'" itemid="a">`)).toStrictEqual({ a: 'png' });
    expect(hints(`<img itemtype="${itemtype}" itemscope="png" alt='a itemscope="gif"' itemid="a">`)).toStrictEqual({ a: 'png' });
  });

  it('reads a tag holding a long run of name characters in linear time', () => {
    const started = Date.now();

    expect(hints(`<img itemtype="${itemtype}" itemscope="png" itemid="a" ${'x'.repeat(50_000)}>`)).toStrictEqual({ a: 'png' });
    expect(Date.now() - started).toBeLessThan(250);
  });

  it.each([
    ['unclosed tags', '<img '],
    ['unclosed double quotes', '<img "'],
    ['unclosed single quotes', '<img \''],
    ['unclosed attribute values', '<img a="x'],
    ['tags with no closing bracket', '<img a="x" '],
    ['mismatched quotes', '<img a="\' '],
  ])('reads a message of repeated %s in linear time', (_, fragment) => {
    const started = Date.now();

    expect(hints(fragment.repeat(20_000))).toStrictEqual({});
    expect(Date.now() - started).toBeLessThan(250);
  });

  it('reads a tag whose quoted attribute value holds a `>`', () => {
    expect(hints(`<img alt="1 > 0" itemtype="${itemtype}" itemscope="png" itemid="a">`)).toStrictEqual({ a: 'png' });
    expect(hints(`<img alt='1 > 0' itemtype="${itemtype}" itemscope="png" itemid="a">`)).toStrictEqual({ a: 'png' });
  });

  it('matches tag and attribute names in any case', () => {
    expect(hints(`<IMG ITEMTYPE="${itemtype}" ItemScope="png" ITEMID="a">`)).toStrictEqual({ a: 'png' });
  });

  it('maps each inline image in the message to its own hint', () => {
    const html = `<p><img itemtype="${itemtype}" itemscope="png" itemid="a"></p><p><img itemtype="${itemtype}" itemscope="jpeg" itemid="b"></p>`;

    expect(hints(html)).toStrictEqual({ a: 'png', b: 'jpeg' });
  });

  it('ignores an image that is not marked as an inline image', () => {
    expect(hints('<img itemtype="http://example.com/Other" itemscope="png" itemid="a">')).toStrictEqual({});
    expect(hints('<img src="https://example.com/a.png" itemscope="png" itemid="a">')).toStrictEqual({});
  });

  it('reads no hint from an unquoted or bare attribute, so the image falls back to an unknown format', () => {
    expect(hints(`<img itemtype="${itemtype}" itemscope=png itemid="a">`)).toStrictEqual({});
    expect(hints(`<img itemtype="${itemtype}" itemscope itemid="a">`)).toStrictEqual({});
  });

  it('does not decode character references, so an encoded hint is not a known format', () => {
    const encoded = hints(`<img itemtype="${itemtype}" itemscope="p&#110;g" itemid="a">`);

    expect(encoded).toStrictEqual({ a: 'p&#110;g' });
    expect(formatFromHint(encoded.a)).toBeUndefined();
    expect(hints('<img itemtype="http:&#x2F;&#x2F;schema.skype.com/AMSImage" itemscope="png" itemid="a">')).toStrictEqual({});
  });
});
