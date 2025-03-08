import { ProgressRing } from './progress-ring';

describe('ProgressRing', () => {
  it('should build', () => {
    const element = new ProgressRing()
      .withLabel('test')
      .withLabelPosition('above')
      .withSize('large');

    expect(element.label).toEqual('test');
    expect(element.labelPosition).toEqual('above');
    expect(element.size).toEqual('large');
  });

  it('should build from interface', () => {
    const element = ProgressRing.from({
      label: 'test',
      labelPosition: 'above',
      size: 'large',
    });

    expect(element.label).toEqual('test');
    expect(element.labelPosition).toEqual('above');
    expect(element.size).toEqual('large');
  });
});
