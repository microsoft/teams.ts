import { HorizontalAlignment } from '../common';
import { BaseContainerElement } from './base';

import { Column } from './column';
import { ContainerStyle } from './container';

/**
 * ColumnSet divides a region into Columns, allowing elements to sit side-by-side.
 */
export interface ColumnSet extends BaseContainerElement {
  type: 'ColumnSet';

  /**
   * The array of `Columns` to divide the region into.
   */
  columns?: Column[];

  /**
   * Specifies the minimum height of the column in pixels, like `\"80px\"`.
   */
  minHeight?: string;

  /**
   * Style hint for `ColumnSet`.
   */
  style?: ContainerStyle | null;

  /**
   * Controls the horizontal alignment of the ColumnSet. When not specified, the value of horizontalAlignment is inherited from the parent container. If no parent container has horizontalAlignment set, it defaults to Left.
   */
  horizontalAlignment?: HorizontalAlignment | null;
}

export type ColumnSetParams = Omit<ColumnSet, 'type'>;

/**
 * ColumnSet divides a region into Columns, allowing elements to sit side-by-side.
 */
export function ColumnSet(columns: Column[] = [], params?: ColumnSetParams): ColumnSet {
  return {
    type: 'ColumnSet',
    columns,
    ...params,
  };
}
