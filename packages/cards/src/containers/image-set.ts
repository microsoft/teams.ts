import { BaseElement } from '../base';
import { Image, ImageSize } from '../medias';

/**
 * The `ImageSet` element displays a collection of `Image`'s similar to a gallery. Acceptable formats are `PNG`, `JPEG`, and `GIF`.
 */
export interface ImageSet extends BaseElement {
  type: 'ImageSet';

  /**
   * Controls how the images are displayed.
   */
  style?: 'default' | 'stacked' | 'grid';

  /**
   * Controls the approximate size of each image. The physical dimensions will vary per host.
   * Auto and stretch are not supported for `ImageSet`. The size will default to medium if
   * those values are set.
   */
  imageSize?: Exclude<ImageSize, 'auto' | 'stretch'>;

  /**
   * The array of `Image`'s to show.
   */
  images: Image[];
}

export type ImageSetParams = Omit<ImageSet, 'type' | 'images'>;

/**
 * The `ImageSet` element displays a collection of `Image`'s similar to a gallery. Acceptable formats are `PNG`, `JPEG`, and `GIF`.
 */
export function ImageSet(images: Image[] = [], params?: ImageSetParams): ImageSet {
  return {
    type: 'ImageSet',
    images,
    ...params,
  };
}
