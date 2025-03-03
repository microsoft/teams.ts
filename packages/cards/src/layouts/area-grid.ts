import { Spacing, TargetWidth } from '../common';

/**
 * A layout that divides a container into named areas into which elements can be placed.
 */
export interface AreaGridLayout {
  type: 'Layout.AreaGrid';

  /**
   * The areas in the grid layout.
   */
  areas: GridArea[];

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

export type AreaGridLayoutParams = Omit<AreaGridLayout, 'type' | 'areas' | 'columns'>;

/**
 * A layout that divides a container into named areas into which elements can be placed.
 */
export function AreaGridLayout(
  areas: GridArea[] = [],
  columns: (number | string)[] = [],
  params?: AreaGridLayoutParams
): AreaGridLayout {
  return {
    type: 'Layout.AreaGrid',
    areas,
    columns,
    ...params,
  };
}

/**
 * Defines an area in a Layout.AreaGrid layout.
 */
export interface GridArea {
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
