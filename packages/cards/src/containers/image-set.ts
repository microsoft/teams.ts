import { IElement, Element } from '../base';
import { IImage, ImageSize } from '../medias';

/**
 * The `ImageSet` element displays a collection of `Image`'s similar to a gallery. Acceptable formats are `PNG`, `JPEG`, and `GIF`.
 */
export interface IImageSet extends IElement {
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
  images: IImage[];
}

export type ImageSetOptions = Omit<IImageSet, 'type' | 'images'>;

/**
 * The `ImageSet` element displays a collection of `Image`'s similar to a gallery. Acceptable formats are `PNG`, `JPEG`, and `GIF`.
 */
export class ImageSet extends Element implements IImageSet {
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
  images: IImage[];

  constructor(...images: IImage[]) {
    super();
    this.type = 'ImageSet';
    this.images = images;
  }

  withOptions(value: ImageSetOptions) {
    Object.assign(this, value);
    return this;
  }

  withStyle(value: 'default' | 'stacked' | 'grid') {
    this.style = value;
    return this;
  }

  withImageSize(value: Exclude<ImageSize, 'auto' | 'stretch'>) {
    this.imageSize = value;
    return this;
  }

  addImages(...value: IImage[]) {
    this.images.push(...value);
    return this;
  }
}
