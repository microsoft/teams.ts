import { VerticalAlignment } from '../common';
import { Element } from '../element';

import { IContainerElement, ContainerElement } from './base';

/**
 * Style hint for `Container`.
 */
export type ContainerStyle = 'default' | 'emphasis' | 'good' | 'attention' | 'warning' | 'accent';

/**
 * Containers group items together.
 */
export interface IContainer extends IContainerElement {
  type: 'Container';

  /**
   * The card elements to render inside the `Container`.
   */
  items: Element[];

  /**
   * Style hint for `Container`.
   */
  style?: ContainerStyle | null;

  /**
   * Defines how the content should be aligned vertically within the container. When not specified, the value of verticalContentAlignment is inherited from the parent container. If no parent container has verticalContentAlignment set, it defaults to Top.
   */
  verticalContentAlignment?: VerticalAlignment | null;

  /**
   * Specifies the minimum height of the container in pixels, like `\"80px\"`.
   */
  minHeight?: string;
}

export type ContainerOptions = Omit<IContainer, 'type' | 'items'>;

/**
 * Containers group items together.
 */
export class Container extends ContainerElement implements IContainer {
  type: 'Container';

  /**
   * The card elements to render inside the `Container`.
   */
  items: Element[];

  /**
   * Style hint for `Container`.
   */
  style?: ContainerStyle | null;

  /**
   * Defines how the content should be aligned vertically within the container. When not specified, the value of verticalContentAlignment is inherited from the parent container. If no parent container has verticalContentAlignment set, it defaults to Top.
   */
  verticalContentAlignment?: VerticalAlignment | null;

  /**
   * Specifies the minimum height of the container in pixels, like `\"80px\"`.
   */
  minHeight?: string;

  constructor(...items: Element[]) {
    super();
    this.type = 'Container';
    this.items = items;
  }

  withOptions(value: ContainerOptions) {
    Object.assign(this, value);
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

  withMinHeight(value: string) {
    this.minHeight = value;
    return this;
  }

  addCards(...value: Element[]) {
    this.items.push(...value);
    return this;
  }
}
