import { AudioModel, AudioToTextParams, TextToAudioParams } from '../models';

export interface AudioPromptOptions {
  readonly model: AudioModel;
}

export class AudioPrompt {
  protected readonly _model: AudioModel;

  constructor(options: AudioPromptOptions) {
    this._model = options.model;
  }

  audioToText(params: AudioToTextParams) {
    if (!this._model.audioToText) {
      throw new Error('cannot transcribe audio to text');
    }

    return this._model.audioToText(params);
  }

  textToAudio(params: TextToAudioParams) {
    if (!this._model.textToAudio) {
      throw new Error('cannot translate text to audio');
    }

    return this._model.textToAudio(params);
  }
}
