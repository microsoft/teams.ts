import { SubmitAction } from '../actions';

import { Image } from './image';

describe('Image', () => {
  it('should build', () => {
    const element = new Image('http://localhost')
      .withAltText('test')
      .withAllowExpand()
      .withAllowExpand(false)
      .withBackgroundColor('blue')
      .withSelectAction(new SubmitAction())
      .withSize('auto')
      .withStyle('default')
      .withWidth('10px');

    expect(element.url).toEqual('http://localhost');
    expect(element.altText).toEqual('test');
    expect(element.allowExpand).toEqual(false);
    expect(element.backgroundColor).toEqual('blue');
    expect(element.selectAction).toBeDefined();
    expect(element.size).toEqual('auto');
    expect(element.style).toEqual('default');
    expect(element.width).toEqual('10px');
  });

  it('should build from interface', () => {
    const element = Image.from({
      url: 'http://localhost',
      altText: 'test',
      allowExpand: false,
      backgroundColor: 'blue',
      selectAction: new SubmitAction(),
      size: 'auto',
      style: 'default',
      width: '10px',
    });

    expect(element.url).toEqual('http://localhost');
    expect(element.altText).toEqual('test');
    expect(element.allowExpand).toEqual(false);
    expect(element.backgroundColor).toEqual('blue');
    expect(element.selectAction).toBeDefined();
    expect(element.size).toEqual('auto');
    expect(element.style).toEqual('default');
    expect(element.width).toEqual('10px');
  });
});
