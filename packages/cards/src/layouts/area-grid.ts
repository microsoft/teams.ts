import { Spacing, TargetWidth } from '../common';

/**
 * A layout that divides a container into named areas into which elements can be placed.
 */
export interface IAreaGridLayout {
  type: 'Layout.AreaGrid';

  /**
   * The areas in the grid layout.
   */
  areas: IGridArea[];

  /**
   * The columns in the grid layout, defined as a percentage of the available width or in pixels using the <number>px format.
   */
  columns: (number | string)[];

  /**
   * The space between columns.
   * @default `default`
   */
  columnSpacing?: Spacing;

  /**
   * The space between rows.
   * @default `default`
   */
  rowSpacing?: Spacing;

  /**
   * Controls for which card width the layout should be used.
   */
  targetWidth?: TargetWidth;
}

export type AreaGridLayoutOptions = Omit<IAreaGridLayout, 'type' | 'areas' | 'columns'>;

/**
 * A layout that divides a container into named areas into which elements can be placed.
 */
export class AreaGridLayout implements IAreaGridLayout {
  type: 'Layout.AreaGrid';

  /**
   * The areas in the grid layout.
   */
  areas: IGridArea[];

  /**
   * The columns in the grid layout, defined as a percentage of the available width or in pixels using the <number>px format.
   */
  columns: (number | string)[];

  /**
   * The space between columns.
   * @default `default`
   */
  columnSpacing?: Spacing;

  /**
   * The space between rows.
   * @default `default`
   */
  rowSpacing?: Spacing;

  /**
   * Controls for which card width the layout should be used.
   */
  targetWidth?: TargetWidth;

  constructor(...areas: IGridArea[]) {
    this.type = 'Layout.AreaGrid';
    this.areas = areas;
    this.columns = [];
  }

  static from(options: Omit<IAreaGridLayout, 'type'>) {
    const layout = new AreaGridLayout(...options.areas);
    Object.assign(layout, options);
    return layout;
  }

  withColumnSpacing(value: Spacing) {
    this.columnSpacing = value;
    return this;
  }

  withRowSpacing(value: Spacing) {
    this.rowSpacing = value;
    return this;
  }

  withTargetWidth(value: TargetWidth) {
    this.targetWidth = value;
    return this;
  }

  addAreas(...value: IGridArea[]) {
    this.areas.push(...value);
    return this;
  }

  addColumns(...value: (number | string)[]) {
    this.columns.push(...value);
    return this;
  }
}

/**
 * Defines an area in a Layout.AreaGrid layout.
 */
export interface IGridArea {
  /**
   * The start column index of the area. Column indices start at 1.
   * @default 1
   */
  column?: number;

  /**
   * Defines how many columns the area should span.
   * @default 1
   */
  columnSpan?: number;

  /**
   * The name of the area. To place an element in this area, set its grid.area property to match the name of the area.
   */
  name?: string;

  /**
   * The start row index of the area. Row indices start at 1.
   * @default 1
   */
  row?: number;

  /**
   * Defines how many rows the area should span.
   * @default 1
   */
  rowSpan?: number;
}

/**
 * Defines an area in a Layout.AreaGrid layout.
 */
export class GridArea implements IGridArea {
  /**
   * The start column index of the area. Column indices start at 1.
   * @default 1
   */
  column?: number;

  /**
   * Defines how many columns the area should span.
   * @default 1
   */
  columnSpan?: number;

  /**
   * The name of the area. To place an element in this area, set its grid.area property to match the name of the area.
   */
  name?: string;

  /**
   * The start row index of the area. Row indices start at 1.
   * @default 1
   */
  row?: number;

  /**
   * Defines how many rows the area should span.
   * @default 1
   */
  rowSpan?: number;

  constructor(value: IGridArea = {}) {
    Object.assign(this, value);
  }

  withColumn(value: number, span?: number) {
    this.column = value;
    this.columnSpan = span;
    return this;
  }

  withColumnSpan(value: number) {
    this.columnSpan = value;
    return this;
  }

  withName(value: string) {
    this.name = value;
    return this;
  }

  withRow(value: number, span?: number) {
    this.row = value;
    this.rowSpan = span;
    return this;
  }

  withRowSpan(value: number) {
    this.rowSpan = value;
    return this;
  }
}
