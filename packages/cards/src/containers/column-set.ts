import { HorizontalAlignment } from '../common';

import { IContainerElement, ContainerElement } from './base';
import { IColumn } from './column';
import { ContainerStyle } from './container';

/**
 * ColumnSet divides a region into Columns, allowing elements to sit side-by-side.
 */
export interface IColumnSet extends IContainerElement {
  type: 'ColumnSet';

  /**
   * The array of `Columns` to divide the region into.
   */
  columns?: IColumn[];

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

export type ColumnSetOptions = Omit<IContainerElement, 'type'>;

/**
 * ColumnSet divides a region into Columns, allowing elements to sit side-by-side.
 */
export class ColumnSet extends ContainerElement implements IColumnSet {
  type: 'ColumnSet';

  /**
   * The array of `Columns` to divide the region into.
   */
  columns: IColumn[];

  /**
   * Specifies the minimum height of the column in pixels, like `\"80px\"`.
   */
  minHeight?: string;

  /**
   * Style hint for `ColumnSet`.
   */
  style?: ContainerStyle | null;

  constructor(...columns: IColumn[]) {
    super();
    this.type = 'ColumnSet';
    this.columns = columns;
  }

  withOptions(value: ColumnSetOptions) {
    Object.assign(this, value);
    return this;
  }

  withMinHeight(value: string) {
    this.minHeight = value;
    return this;
  }

  withStyle(value: ContainerStyle) {
    this.style = value;
    return this;
  }

  addColumns(...value: IColumn[]) {
    this.columns.push(...value);
    return this;
  }
}
