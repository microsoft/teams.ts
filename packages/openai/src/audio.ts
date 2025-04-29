import OpenAI, { toFile } from 'openai';

import { Fetch } from 'openai/core.mjs';

import { IAudioModel, TextToAudioParams, AudioToTextParams } from '@microsoft/teams.ai';
import { ILogger, ConsoleLogger } from '@microsoft/teams.common/logging';

export type OpenAIAudioPluginOptions = {
  readonly model: string;
  readonly apiKey?: string;
  readonly baseUrl?: string;
  readonly organization?: string;
  readonly project?: string;
  readonly headers?: { [key: string]: string };
  readonly fetch?: Fetch;
  readonly timeout?: number;
  readonly logger?: ILogger;
};

export class OpenAIAudioModel implements IAudioModel {
  private readonly _openai: OpenAI;
  private readonly _log: ILogger;

  constructor(readonly options: OpenAIAudioPluginOptions) {
    this._log =
      options.logger || new ConsoleLogger(`@microsoft/teams.openai/${this.options.model}`);
    this._openai = new OpenAI({
      apiKey: options.apiKey,
      baseURL: options.baseUrl,
      organization: options.organization,
      project: options.project,
      defaultHeaders: options.headers,
      fetch: options.fetch,
      timeout: options.timeout,
    });
  }

  async audioToText(params: AudioToTextParams) {
    try {
      const res = await this._openai.audio.transcriptions.create({
        file: await toFile(params.data, `temp.${params.type}`, { type: params.type }),
        model: this.options.model,
        language: params.lang,
        prompt: params.prompt,
      });

      return res.text;
    } catch (err) {
      this._log.error(err);
      throw err;
    }
  }

  async textToAudio(params: TextToAudioParams) {
    try {
      const res = await this._openai.audio.speech.create({
        response_format: params.type as any,
        model: this.options.model,
        voice: params.voice as any,
        input: params.text,
      });

      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      this._log.error(err);
      throw err;
    }
  }
}
