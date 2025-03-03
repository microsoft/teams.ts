import { HorizontalAlignment, Spacing, TargetWidth } from './common';
import { Element } from './element';

export interface BaseElement {
  /**
   * A unique identifier associated with the item
   */
  id?: string;

  /**
   * If false, this item will be removed from the visual tree.
   */
  isVisible?: boolean;

  /**
   * A series of key/value pairs indicating features that the item requires with corresponding minimum version. When a feature is missing or of insufficient version, fallback is triggered.
   */
  requires?: Record<string, string>;

  /**
   * Specifies the height of the element.
   */
  height?: 'auto' | 'stretch' | Omit<string | number, 'auto' | 'stretch'>;

  /**
   * When `true`, draw a separating line at the top of the element.
   */
  separator?: boolean;

  /**
   * Controls the amount of spacing between this element and the preceding element.
   */
  spacing?: Spacing;

  /**
   * the area of a `Layout.AreaGrid` layout in which an element should be displayed.
   */
  'grid.area'?: string;

  /**
   * controls how the element should be horizontally aligned.
   */
  horizontalAlignment?: HorizontalAlignment | null;

  /**
   * Controls for which card width the element should be displayed. If targetWidth isn't specified, the element is rendered at all card widths. Using targetWidth makes it possible to author responsive cards that adapt their layout to the available horizontal space.
   */
  targetWidth?: TargetWidth;

  /**
   * The locale associated with the element.
   */
  lang?: string;

  /**
   * Describes what to do when an unknown item is encountered or the requires of this or any children can't be met.
   */
  fallback?: Element | 'drop' | Omit<string, 'drop'>;
}
