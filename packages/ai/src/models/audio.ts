export interface ITextToAudioParams {
  readonly type: string;
  readonly text: string;
  readonly voice: string;
}

export interface IAudioToTextParams {
  readonly type: string;
  readonly data: Buffer;
  readonly prompt?: string;
  readonly lang?: string;
}

export interface IAudioModel {
  textToAudio?(params: ITextToAudioParams): Promise<Buffer>;
  audioToText?(params: IAudioToTextParams): Promise<string>;
}
