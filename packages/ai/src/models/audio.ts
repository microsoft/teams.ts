export type TextToAudioParams = {
  readonly type: string;
  readonly text: string;
  readonly voice: string;
};

export type AudioToTextParams = {
  readonly type: string;
  readonly data: Buffer;
  readonly prompt?: string;
  readonly lang?: string;
};

export interface IAudioModel {
  textToAudio?(params: TextToAudioParams): Promise<Buffer>;
  audioToText?(params: AudioToTextParams): Promise<string>;
}
