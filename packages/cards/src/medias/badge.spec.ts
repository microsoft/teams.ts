import { Badge } from './badge';

describe('Badge', () => {
  it('should build', () => {
    const element = new Badge()
      .withAppearance('filled')
      .withIcon('AccessTime')
      .withIconPosition('after')
      .withShape('circular')
      .withSize('medium')
      .withStyle('accent')
      .withText('test')
      .withTooltip('tooltip');

    expect(element.appearance).toEqual('filled');
    expect(element.icon).toEqual('AccessTime');
    expect(element.iconPosition).toEqual('after');
    expect(element.shape).toEqual('circular');
    expect(element.size).toEqual('medium');
    expect(element.style).toEqual('accent');
    expect(element.text).toEqual('test');
    expect(element.tooltip).toEqual('tooltip');
  });

  it('should build from interface', () => {
    const element = Badge.from({
      appearance: 'filled',
      icon: 'AccessTime',
      iconPosition: 'after',
      shape: 'circular',
      size: 'medium',
      style: 'accent',
      text: 'test',
      tooltip: 'tooltip',
    });

    expect(element.appearance).toEqual('filled');
    expect(element.icon).toEqual('AccessTime');
    expect(element.iconPosition).toEqual('after');
    expect(element.shape).toEqual('circular');
    expect(element.size).toEqual('medium');
    expect(element.style).toEqual('accent');
    expect(element.text).toEqual('test');
    expect(element.tooltip).toEqual('tooltip');
  });
});
