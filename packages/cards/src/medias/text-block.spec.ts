import { TextBlock } from './text-block';

describe('TextBlock', () => {
  it('should build', () => {
    const element = new TextBlock('hello')
      .addText(' world', '!')
      .withStyle('default')
      .withColor('accent')
      .withFontType('default')
      .withSubtle()
      .withSubtle(false)
      .withMaxLines(3)
      .withSize('default')
      .withWeight('bolder')
      .withWrap()
      .withWrap(false);

    expect(element.toString()).toEqual('hello world!');
    expect(element.style).toEqual('default');
    expect(element.color).toEqual('accent');
    expect(element.fontType).toEqual('default');
    expect(element.isSubtle).toEqual(false);
    expect(element.maxLines).toEqual(3);
    expect(element.size).toEqual('default');
    expect(element.weight).toEqual('bolder');
    expect(element.wrap).toEqual(false);
  });

  it('should build from interface', () => {
    const element = TextBlock.from({
      text: 'hello world!',
      style: 'default',
      color: 'accent',
      fontType: 'default',
      isSubtle: false,
      maxLines: 3,
      size: 'default',
      weight: 'bolder',
      wrap: false,
    });

    expect(element.toString()).toEqual('hello world!');
    expect(element.style).toEqual('default');
    expect(element.color).toEqual('accent');
    expect(element.fontType).toEqual('default');
    expect(element.isSubtle).toEqual(false);
    expect(element.maxLines).toEqual(3);
    expect(element.size).toEqual('default');
    expect(element.weight).toEqual('bolder');
    expect(element.wrap).toEqual(false);
  });
});
