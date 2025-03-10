import { RichTextBlock } from './rich-text-block';
import { TextRun } from './text-run';

describe('RichTextBlock', () => {
  it('should build', () => {
    const element = new RichTextBlock().addText(new TextRun('hello'), 'world').addText('!');

    expect(element.inlines.length).toEqual(3);
    expect(element.toString(' ')).toEqual('hello world !');
  });

  it('should build from interface', () => {
    const element = RichTextBlock.from({
      inlines: [new TextRun('hello'), 'world', '!'],
    });

    expect(element.inlines.length).toEqual(3);
    expect(element.toString()).toEqual('helloworld!');
  });
});
