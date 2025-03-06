export type TextToImageParams = {
  readonly prompt?: string;
  readonly size?: string;
};

export interface IImageModel {
  textToImage?(params?: TextToImageParams): Promise<string>;
}
