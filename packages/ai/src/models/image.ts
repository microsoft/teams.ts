export type TextToImageParams = {
  /**
   * the prompt that defines how
   * the image should be made
   */
  readonly prompt?: string;

  /**
   * the desired size of the image
   */
  readonly size?: string;
};

/**
 * a model that can generate an image from text
 */
export interface IImageModel {
  /**
   * generate an image from text
   */
  textToImage?(params?: TextToImageParams): Promise<string>;
}
