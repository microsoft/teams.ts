export interface TextToAudioParams {
  readonly type: string;
  readonly text: string;
  readonly voice: string;
}

export interface AudioToTextParams {
  readonly type: string;
  readonly data: Buffer;
  readonly prompt?: string;
  readonly lang?: string;
}

export interface AudioModel {
  textToAudio?(params: TextToAudioParams): Promise<Buffer>;
  audioToText?(params: AudioToTextParams): Promise<string>;
}
