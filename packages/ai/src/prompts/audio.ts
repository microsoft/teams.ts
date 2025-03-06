import { IAudioModel, IAudioToTextParams, ITextToAudioParams } from '../models';

export interface IAudioPromptOptions {
  readonly model: IAudioModel;
}

export class AudioPrompt {
  protected readonly _model: IAudioModel;

  constructor(options: IAudioPromptOptions) {
    this._model = options.model;
  }

  audioToText(params: IAudioToTextParams) {
    if (!this._model.audioToText) {
      throw new Error('cannot transcribe audio to text');
    }

    return this._model.audioToText(params);
  }

  textToAudio(params: ITextToAudioParams) {
    if (!this._model.textToAudio) {
      throw new Error('cannot translate text to audio');
    }

    return this._model.textToAudio(params);
  }
}
