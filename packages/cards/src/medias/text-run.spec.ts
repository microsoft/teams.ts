import { SubmitAction } from '../actions';

import { TextRun } from './text-run';

describe('TextRun', () => {
  it('should build', () => {
    const element = new TextRun('test')
      .addText('er')
      .withColor('accent')
      .withFontType('default')
      .withHighlight()
      .withHighlight(false)
      .withItalic()
      .withItalic(false)
      .withUnderline()
      .withUnderline(false)
      .withSize('default')
      .withStrikeThrough()
      .withStrikeThrough(false)
      .withSubtle()
      .withSubtle(false)
      .withWeight('bolder')
      .withSelectAction(new SubmitAction());

    expect(element.toString()).toEqual('tester');
    expect(element.color).toEqual('accent');
    expect(element.fontType).toEqual('default');
    expect(element.highlight).toEqual(false);
    expect(element.italic).toEqual(false);
    expect(element.underline).toEqual(false);
    expect(element.size).toEqual('default');
    expect(element.strikethrough).toEqual(false);
    expect(element.isSubtle).toEqual(false);
    expect(element.weight).toEqual('bolder');
    expect(element.selectAction).toBeDefined();
  });

  it('should build from interface', () => {
    const element = TextRun.from({
      text: 'test',
      color: 'accent',
      fontType: 'default',
      highlight: false,
      italic: false,
      underline: false,
      size: 'default',
      strikethrough: false,
      isSubtle: false,
      weight: 'bolder',
    });

    expect(element.toString()).toEqual('test');
    expect(element.color).toEqual('accent');
    expect(element.fontType).toEqual('default');
    expect(element.highlight).toEqual(false);
    expect(element.italic).toEqual(false);
    expect(element.underline).toEqual(false);
    expect(element.size).toEqual('default');
    expect(element.strikethrough).toEqual(false);
    expect(element.isSubtle).toEqual(false);
    expect(element.weight).toEqual('bolder');
  });
});
