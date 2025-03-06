import { HorizontalAlignment, Spacing, TargetWidth } from './common';
import { Element as AnyElement } from './element';

export interface IElement {
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
  fallback?: AnyElement | 'drop' | Omit<string, 'drop'>;
}

export class Element implements IElement {
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
  fallback?: AnyElement | 'drop' | Omit<string, 'drop'>;

  constructor(value: Partial<IElement> = {}) {
    Object.assign(this, value);
  }

  withId(value: string) {
    this.id = value;
    return this;
  }

  withIsVisible(value: boolean) {
    this.isVisible = value;
    return this;
  }

  withRequires(value: Record<string, string>) {
    this.requires = value;
    return this;
  }

  withRequire(key: string, value: string) {
    if (!this.requires) {
      this.requires = {};
    }

    this.requires[key] = value;
    return this;
  }

  withHeight(value: 'auto' | 'stretch' | Omit<string | number, 'auto' | 'stretch'>) {
    this.height = value;
    return this;
  }

  withSeperator(value: boolean) {
    this.separator = value;
    return this;
  }

  withSpacing(value: Spacing) {
    this.spacing = value;
    return this;
  }

  withGridArea(value: string) {
    this['grid.area'] = value;
  }

  withHorizontalAlignment(value: HorizontalAlignment) {
    this.horizontalAlignment = value;
    return this;
  }

  withTargetWidth(value: TargetWidth) {
    this.targetWidth = value;
    return this;
  }

  withLang(value: string) {
    this.lang = value;
    return this;
  }

  withFallback(value: AnyElement | 'drop' | Omit<string, 'drop'>) {
    this.fallback = value;
    return this;
  }
}
