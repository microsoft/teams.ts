export interface TextToImageParams {
  readonly prompt?: string;
  readonly size?: string;
}

export interface ImageModel {
  textToImage?(params?: TextToImageParams): Promise<string>;
}
