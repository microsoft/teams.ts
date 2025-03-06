export interface ITextToImageParams {
  readonly prompt?: string;
  readonly size?: string;
}

export interface IImageModel {
  textToImage?(params?: ITextToImageParams): Promise<string>;
}
