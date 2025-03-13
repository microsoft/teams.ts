import { IAudioModel, AudioToTextParams, TextToAudioParams } from '../models';

export type AudioPromptOptions = {
  /**
   * the name of the prompt
   */
  readonly name?: string;

  /**
   * the description of the prompt
   */
  readonly description?: string;

  /**
   * the model to send requests to
   */
  readonly model: IAudioModel;
};

export class AudioPrompt {
  get name() {
    return this._name;
  }
  protected readonly _name: string;

  get description() {
    return this._description;
  }
  protected readonly _description: string;

  protected readonly _model: IAudioModel;

  constructor(options: AudioPromptOptions) {
    this._name = options.name || 'audio';
    this._description = options.description || 'an agent that can convert text to speech';
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
