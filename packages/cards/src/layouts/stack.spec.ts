import { StackLayout } from './stack';

describe('StackLayout', () => {
  it('should build', () => {
    const layout = new StackLayout().withTargetWidth('Narrow');

    expect(layout.targetWidth).toEqual('Narrow');
  });

  it('should build from interface', () => {
    const layout = StackLayout.from({
      targetWidth: 'Narrow',
    });

    expect(layout.targetWidth).toEqual('Narrow');
  });
});
