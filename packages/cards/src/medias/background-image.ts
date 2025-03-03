import { HorizontalAlignment, VerticalAlignment } from '../common';

/**
 * Specifies a background image. Acceptable formats are PNG, JPEG, and GIF
 */
export interface BackgroundImage {
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

export type BackgroundImageParams = Omit<BackgroundImage, 'type' | 'url'>;

/**
 * Specifies a background image. Acceptable formats are PNG, JPEG, and GIF
 */
export function BackgroundImage(url: string, params?: BackgroundImageParams): BackgroundImage {
  return {
    type: 'BackgroundImage',
    url,
    ...params,
  };
}
