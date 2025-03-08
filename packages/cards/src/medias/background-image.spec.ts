import { BackgroundImage } from './background-image';

describe('BackgroundImage', () => {
  it('should build', () => {
    const element = new BackgroundImage('http://localhost')
      .withFillMode('cover')
      .withHorizontalAlignment('center')
      .withVerticalAlignment('top')
      .withUrl('https://www.google.com');

    expect(element.url).toEqual('https://www.google.com');
    expect(element.fillMode).toEqual('cover');
    expect(element.horizontalAlignment).toEqual('center');
    expect(element.verticalAlignment).toEqual('top');
  });

  it('should build from interface', () => {
    const element = BackgroundImage.from({
      url: 'http://localhost',
      fillMode: 'cover',
      horizontalAlignment: 'center',
      verticalAlignment: 'top',
    });

    expect(element.url).toEqual('http://localhost');
    expect(element.fillMode).toEqual('cover');
    expect(element.horizontalAlignment).toEqual('center');
    expect(element.verticalAlignment).toEqual('top');
  });
});
