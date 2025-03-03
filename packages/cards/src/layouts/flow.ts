import { HorizontalAlignment, Spacing, TargetWidth, VerticalAlignment } from '../common';

/**
 * A layout that spreads elements horizontally and wraps them across multiple rows, as needed.
 */
export interface FlowLayout {
  type: 'Layout.Flow';

  /**
   * The space between items.
   * @default `default`
   */
  columnSpacing?: Spacing;

  /**
   * Controls how the content of the container should be horizontally aligned.
   * @default `center`
   */
  horizontalItemsAlignment?: HorizontalAlignment;

  /**
   * Controls how item should fit inside the container.
   * @default `Fit`
   */
  itemFit?: 'Fit' | 'Fill';

  /**
   * The width, in pixels, of each item, in the <number>px format. Should not be used if maxItemWidth and/or minItemWidth are set.
   * @example '<number>px'
   */
  itemWidth?: string;

  /**
   * The maximum width, in pixels, of each item, in the <number>px format. Should not be used if itemWidth is set.
   * @example '<number>px'
   */
  maxItemWidth?: string;

  /**
   * The minimum width, in pixels, of each item, in the <number>px format. Should not be used if itemWidth is set.
   * @example '<number>px'
   */
  minItemWidth?: string;

  /**
   * The space between rows of items.
   * @default `default`
   */
  rowSpacing?: Spacing;

  /**
   * Controls for which card width the layout should be used.
   */
  targetWidth?: TargetWidth;

  /**
   * Controls how the content of the container should be vertically aligned.
   * @default `top`
   */
  verticalItemsAlignment?: VerticalAlignment;
}

export type FlowLayoutParams = Omit<FlowLayout, 'type'>;

/**
 * A layout that spreads elements horizontally and wraps them across multiple rows, as needed.
 */
export function FlowLayout(params?: FlowLayoutParams): FlowLayout {
  return {
    type: 'Layout.Flow',
    ...params,
  };
}
