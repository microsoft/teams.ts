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

/**
 * a model that can convert text to audio
 * or audio to text
 */
export interface IAudioModel {
  /**
   * convert text to audio
   */
  textToAudio?(params: TextToAudioParams): Promise<Buffer>;

  /**
   * transcribe audio to text
   */
  audioToText?(params: AudioToTextParams): Promise<string>;
}
