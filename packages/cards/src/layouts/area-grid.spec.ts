import { AreaGridLayout, GridArea } from './area-grid';

describe('AreaGridLayout', () => {
  it('should build', () => {
    const layout = new AreaGridLayout()
      .withColumnSpacing('default')
      .withRowSpacing('default')
      .withTargetWidth('Narrow')
      .addColumns(1, 2, 3)
      .addAreas(
        new GridArea()
          .withName('test')
          .withColumn(1, 2)
          .withColumnSpan(5)
          .withRow(2, 2)
          .withRowSpan(3)
      );

    expect(layout.columnSpacing).toEqual('default');
    expect(layout.rowSpacing).toEqual('default');
    expect(layout.targetWidth).toEqual('Narrow');
    expect(layout.columns).toEqual([1, 2, 3]);
    expect(layout.areas.length).toEqual(1);
    expect(layout.areas[0].name).toEqual('test');
    expect(layout.areas[0].column).toEqual(1);
    expect(layout.areas[0].columnSpan).toEqual(5);
    expect(layout.areas[0].row).toEqual(2);
    expect(layout.areas[0].rowSpan).toEqual(3);
  });

  it('should build from interface', () => {
    const layout = AreaGridLayout.from({
      columnSpacing: 'default',
      rowSpacing: 'default',
      targetWidth: 'Narrow',
      columns: [1, 2, 3],
      areas: [
        {
          name: 'test',
          column: 1,
          columnSpan: 5,
          row: 2,
          rowSpan: 3,
        },
      ],
    });

    expect(layout.columnSpacing).toEqual('default');
    expect(layout.rowSpacing).toEqual('default');
    expect(layout.targetWidth).toEqual('Narrow');
    expect(layout.columns).toEqual([1, 2, 3]);
    expect(layout.areas.length).toEqual(1);
    expect(layout.areas[0].name).toEqual('test');
    expect(layout.areas[0].column).toEqual(1);
    expect(layout.areas[0].columnSpan).toEqual(5);
    expect(layout.areas[0].row).toEqual(2);
    expect(layout.areas[0].rowSpan).toEqual(3);
  });
});
