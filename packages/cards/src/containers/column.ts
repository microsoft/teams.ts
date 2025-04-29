import { VerticalAlignment } from '../common';
import { Element } from '../element';

import { IContainerElement, ContainerElement } from './base';
import { ContainerStyle } from './container';

/**
 * Defines a container that is part of a ColumnSet.
 */
export interface IColumn extends IContainerElement {
  type: 'Column';

  /**
   * The card elements to render inside the `Column`.
   */
  items?: Element[];

  /**
   * Specifies the minimum height of the column in pixels, like `\"80px\"`.
   */
  minHeight?: string;

  /**
   * Style hint for `Column`.
   */
  style?: ContainerStyle | null;

  /**
   * Defines how the content should be aligned vertically within the column. When not specified, the value of verticalContentAlignment is inherited from the parent container. If no parent container has verticalContentAlignment set, it defaults to Top.
   */
  verticalContentAlignment?: VerticalAlignment | null;

  /**
   * `\"auto\"`, `\"stretch\"`, a number representing relative width of the column in the column group, or in version 1.1 and higher, a specific pixel width, like `\"50px\"`.
   */
  width?: 'auto' | 'stretch' | Omit<string | number, 'auto' | 'stretch'>;
}

export type ColumnOptions = Omit<IColumn, 'type' | 'items'>;

/**
 * Defines a container that is part of a ColumnSet.
 */
export class Column extends ContainerElement implements IColumn {
  type: 'Column';

  /**
   * The card elements to render inside the `Column`.
   */
  items: Element[];

  /**
   * Specifies the minimum height of the column in pixels, like `\"80px\"`.
   */
  minHeight?: string;

  /**
   * Style hint for `Column`.
   */
  style?: ContainerStyle | null;

  /**
   * Defines how the content should be aligned vertically within the column. When not specified, the value of verticalContentAlignment is inherited from the parent container. If no parent container has verticalContentAlignment set, it defaults to Top.
   */
  verticalContentAlignment?: VerticalAlignment | null;

  /**
   * `\"auto\"`, `\"stretch\"`, a number representing relative width of the column in the column group, or in version 1.1 and higher, a specific pixel width, like `\"50px\"`.
   */
  width?: 'auto' | 'stretch' | Omit<string | number, 'auto' | 'stretch'>;

  constructor(...items: Element[]) {
    super();
    this.type = 'Column';
    this.items = items;
  }

  withOptions(value: ColumnOptions) {
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

  withVerticalAlignment(value: VerticalAlignment) {
    this.verticalContentAlignment = value;
    return this;
  }

  withWidth(value: 'auto' | 'stretch' | Omit<string | number, 'auto' | 'stretch'>) {
    this.width = value;
    return this;
  }

  addCards(...value: Element[]) {
    this.items.push(...value);
    return this;
  }
}
