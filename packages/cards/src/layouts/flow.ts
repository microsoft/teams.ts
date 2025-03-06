import { HorizontalAlignment, Spacing, TargetWidth, VerticalAlignment } from '../common';

/**
 * A layout that spreads elements horizontally and wraps them across multiple rows, as needed.
 */
export interface IFlowLayout {
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

export type FlowLayoutOptions = Omit<IFlowLayout, 'type'>;

/**
 * A layout that spreads elements horizontally and wraps them across multiple rows, as needed.
 */
export class FlowLayout implements IFlowLayout {
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

  constructor(options: FlowLayoutOptions = {}) {
    this.type = 'Layout.Flow';
    this.withOptions(options);
  }

  withOptions(value: FlowLayoutOptions) {
    Object.assign(this, value);
    return this;
  }

  withColumnSpacing(value: Spacing) {
    this.columnSpacing = value;
    return this;
  }

  withHorizontalAlignment(value: HorizontalAlignment) {
    this.horizontalItemsAlignment = value;
    return this;
  }

  withItemFit(value: 'Fit' | 'Fill') {
    this.itemFit = value;
    return this;
  }

  withItemWidth(value: string) {
    this.itemWidth = value;
    return this;
  }

  withItemMinWidth(value: string) {
    this.minItemWidth = value;
    return this;
  }

  withItemMaxWidth(value: string) {
    this.maxItemWidth = value;
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

  withVerticalAlignment(value: VerticalAlignment) {
    this.verticalItemsAlignment = value;
    return this;
  }
}
