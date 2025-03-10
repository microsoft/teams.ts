import { HorizontalAlignment, VerticalAlignment } from '../common';

/**
 * Specifies a background image. Acceptable formats are PNG, JPEG, and GIF
 */
export interface IBackgroundImage {
  type: 'BackgroundImage';

  /**
   * The URL (or data url) of the image. Acceptable formats are PNG, JPEG, and GIF
   */
  url: string;

  /**
   * Describes how the image should fill the area.
   */
  fillMode?: 'cover' | 'repeatHorizontally' | 'repeatVertically' | 'repeat';

  /**
   * Describes how the image should be aligned if it must be cropped or if using repeat fill mode.
   */
  horizontalAlignment?: HorizontalAlignment;

  /**
   * Describes how the image should be aligned if it must be cropped or if using repeat fill mode.
   */
  verticalAlignment?: VerticalAlignment;
}

export type BackgroundImageOptions = Omit<IBackgroundImage, 'type' | 'url'>;

/**
 * Specifies a background image. Acceptable formats are PNG, JPEG, and GIF
 */
export class BackgroundImage implements IBackgroundImage {
  type: 'BackgroundImage';

  /**
   * The URL (or data url) of the image. Acceptable formats are PNG, JPEG, and GIF
   */
  url: string;

  /**
   * Describes how the image should fill the area.
   */
  fillMode?: 'cover' | 'repeatHorizontally' | 'repeatVertically' | 'repeat';

  /**
   * Describes how the image should be aligned if it must be cropped or if using repeat fill mode.
   */
  horizontalAlignment?: HorizontalAlignment;

  /**
   * Describes how the image should be aligned if it must be cropped or if using repeat fill mode.
   */
  verticalAlignment?: VerticalAlignment;

  constructor(url: string, options: BackgroundImageOptions = {}) {
    this.type = 'BackgroundImage';
    this.url = url;
    Object.assign(this, options);
  }

  static from(options: Omit<IBackgroundImage, 'type'>) {
    return new BackgroundImage(options.url, options);
  }

  withUrl(value: string) {
    this.url = value;
    return this;
  }

  withFillMode(value: 'cover' | 'repeatHorizontally' | 'repeatVertically' | 'repeat') {
    this.fillMode = value;
    return this;
  }

  withHorizontalAlignment(value: HorizontalAlignment) {
    this.horizontalAlignment = value;
    return this;
  }

  withVerticalAlignment(value: VerticalAlignment) {
    this.verticalAlignment = value;
    return this;
  }
}
