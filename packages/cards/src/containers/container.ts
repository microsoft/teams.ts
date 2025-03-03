import { VerticalAlignment } from '../common';
import { Element } from '../element';
import { BaseContainerElement } from './base';

/**
 * Style hint for `Container`.
 */
export type ContainerStyle = 'default' | 'emphasis' | 'good' | 'attention' | 'warning' | 'accent';

/**
 * Containers group items together.
 */
export interface Container extends BaseContainerElement {
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

export type ContainerParams = Omit<Container, 'type' | 'items'>;

/**
 * Containers group items together.
 */
export function Container(items: Element[] = [], params?: ContainerParams): Container {
  return {
    type: 'Container',
    items,
    ...params,
  };
}
