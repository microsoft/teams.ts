import { IExecute, IOpenUrl, ISubmit, IToggleVisibility } from '../actions';
import { IElement, Element } from '../base';

export type ImageSize = 'auto' | 'stretch' | 'small' | 'medium' | 'large';

/**
 * Displays an image. Acceptable formats are PNG, JPEG, and GIF
 */
export interface IImage extends IElement {
  type: 'Image';

  /**
   * The URL to the image. Supports data URI in version 1.2+
   */
  url: string;

  /**
   * Alternate text describing the image.
   */
  altText?: string;

  /**
   * Controls if the image can be expanded to full screen.
   */
  allowExpand?: boolean;

  /**
   * Applies a background to a transparent image. This property will respect the image style.
   */
  backgroundColor?: string;

  /**
   * An Action that will be invoked when the Image is tapped or selected. Action.ShowCard is not supported.
   */
  selectAction?: IExecute | IOpenUrl | ISubmit | IToggleVisibility;

  /**
   * Controls the approximate size of the image. The physical dimensions will vary per host.
   */
  size?: ImageSize;

  /**
   * Controls how this Image is displayed.
   */
  style?: 'default' | 'person';

  /**
   * The desired on-screen width of the image, ending in ‘px’. E.g., 50px. This overrides the size property.
   */
  width?: string;
}

export type ImageOptions = Omit<IImage, 'type' | 'url'>;

/**
 * Displays an image. Acceptable formats are PNG, JPEG, and GIF
 */
export class Image extends Element implements IImage {
  type: 'Image';

  /**
   * The URL to the image. Supports data URI in version 1.2+
   */
  url: string;

  /**
   * Alternate text describing the image.
   */
  altText?: string;

  /**
   * Controls if the image can be expanded to full screen.
   */
  allowExpand?: boolean;

  /**
   * Applies a background to a transparent image. This property will respect the image style.
   */
  backgroundColor?: string;

  /**
   * An Action that will be invoked when the Image is tapped or selected. Action.ShowCard is not supported.
   */
  selectAction?: IExecute | IOpenUrl | ISubmit | IToggleVisibility;

  /**
   * Controls the approximate size of the image. The physical dimensions will vary per host.
   */
  size?: ImageSize;

  /**
   * Controls how this Image is displayed.
   */
  style?: 'default' | 'person';

  /**
   * The desired on-screen width of the image, ending in ‘px’. E.g., 50px. This overrides the size property.
   */
  width?: string;

  constructor(url: string, options: ImageOptions = {}) {
    super();
    this.type = 'Image';
    this.url = url;
    Object.assign(this, options);
  }

  static from(options: Omit<IImage, 'type'>) {
    return new Image(options.url, options);
  }

  withAltText(value: string) {
    this.altText = value;
    return this;
  }

  withAllowExpand(value = true) {
    this.allowExpand = value;
    return this;
  }

  withBackgroundColor(value: string) {
    this.backgroundColor = value;
    return this;
  }

  withSelectAction(value: IExecute | IOpenUrl | ISubmit | IToggleVisibility) {
    this.selectAction = value;
    return this;
  }

  withSize(value: ImageSize) {
    this.size = value;
    return this;
  }

  withStyle(value: 'default' | 'person') {
    this.style = value;
    return this;
  }

  withWidth(value: string) {
    this.width = value;
    return this;
  }
}
