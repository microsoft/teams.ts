import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  it('should build', () => {
    const element = new ProgressBar().withColor('accent').withValue(50).withMax(100);

    expect(element.color).toEqual('accent');
    expect(element.value).toEqual(50);
    expect(element.max).toEqual(100);
  });

  it('should build from interface', () => {
    const element = ProgressBar.from({
      color: 'accent',
      value: 50,
      max: 100,
    });

    expect(element.color).toEqual('accent');
    expect(element.value).toEqual(50);
    expect(element.max).toEqual(100);
  });
});
