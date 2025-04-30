import { SubmitAction } from '../actions';

import { Icon } from './icon';

describe('Icon', () => {
  it('should build', () => {
    const element = new Icon('AccessTime')
      .withSize('Large')
      .withStyle('Filled')
      .withColor('accent')
      .withSelectAction(new SubmitAction());

    expect(element.name).toEqual('AccessTime');
    expect(element.size).toEqual('Large');
    expect(element.style).toEqual('Filled');
    expect(element.color).toEqual('accent');
    expect(element.selectAction).toBeDefined();
  });

  it('should build from interface', () => {
    const element = Icon.from({
      name: 'AccessTime',
      size: 'Large',
      style: 'Filled',
      color: 'accent',
      selectAction: new SubmitAction(),
    });

    expect(element.name).toEqual('AccessTime');
    expect(element.size).toEqual('Large');
    expect(element.style).toEqual('Filled');
    expect(element.color).toEqual('accent');
    expect(element.selectAction).toBeDefined();
  });
});
