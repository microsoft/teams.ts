import { FlowLayout } from './flow';

describe('Layouts.Flow', () => {
  it('should build', () => {
    const layout = new FlowLayout()
      .withColumnSpacing('default')
      .withHorizontalAlignment('center')
      .withItemFit('Fill')
      .withItemMaxWidth('10px')
      .withItemMinWidth('1px')
      .withItemWidth('5px')
      .withRowSpacing('default')
      .withTargetWidth('Narrow')
      .withVerticalAlignment('bottom');

    expect(layout.columnSpacing).toEqual('default');
    expect(layout.horizontalItemsAlignment).toEqual('center');
    expect(layout.itemFit).toEqual('Fill');
    expect(layout.maxItemWidth).toEqual('10px');
    expect(layout.minItemWidth).toEqual('1px');
    expect(layout.itemWidth).toEqual('5px');
    expect(layout.rowSpacing).toEqual('default');
    expect(layout.targetWidth).toEqual('Narrow');
    expect(layout.verticalItemsAlignment).toEqual('bottom');
  });

  it('should build from interface', () => {
    const layout = FlowLayout.from({
      columnSpacing: 'default',
      horizontalItemsAlignment: 'center',
      itemFit: 'Fill',
      maxItemWidth: '10px',
      minItemWidth: '1px',
      itemWidth: '5px',
      rowSpacing: 'default',
      targetWidth: 'Narrow',
      verticalItemsAlignment: 'bottom',
    });

    expect(layout.columnSpacing).toEqual('default');
    expect(layout.horizontalItemsAlignment).toEqual('center');
    expect(layout.itemFit).toEqual('Fill');
    expect(layout.maxItemWidth).toEqual('10px');
    expect(layout.minItemWidth).toEqual('1px');
    expect(layout.itemWidth).toEqual('5px');
    expect(layout.rowSpacing).toEqual('default');
    expect(layout.targetWidth).toEqual('Narrow');
    expect(layout.verticalItemsAlignment).toEqual('bottom');
  });
});
