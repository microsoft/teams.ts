import { CaptionSource, Media, MediaSource } from './media';

describe('Media', () => {
  it('should build', () => {
    const element = new Media()
      .withPoster('??')
      .withAltText('test')
      .addSources(
        new MediaSource('http://localhost', 'png'),
        new MediaSource('https://www.google.com', 'jpeg')
      )
      .addCaptionSources(
        new CaptionSource('a', 'http://a.com', 'vtt'),
        new CaptionSource('b', 'http://b.com', 'vtt')
      );

    expect(element.poster).toEqual('??');
    expect(element.altText).toEqual('test');
    expect(element.sources.length).toEqual(2);
    expect(element.captionSources?.length).toEqual(2);
  });

  it('should build from interface', () => {
    const element = Media.from({
      poster: '??',
      altText: 'test',
      sources: [
        new MediaSource('http://localhost', 'png'),
        new MediaSource('https://www.google.com', 'jpeg'),
      ],
      captionSources: [
        new CaptionSource('a', 'http://a.com', 'vtt'),
        new CaptionSource('b', 'http://b.com', 'vtt'),
      ],
    });

    expect(element.poster).toEqual('??');
    expect(element.altText).toEqual('test');
    expect(element.sources.length).toEqual(2);
    expect(element.captionSources?.length).toEqual(2);
  });
});
