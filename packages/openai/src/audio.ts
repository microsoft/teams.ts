import { IAudioModel, TextToAudioParams, AudioToTextParams } from '@microsoft/spark.ai';
import { Logger, ConsoleLogger } from '@microsoft/spark.common/logging';

import OpenAI, { toFile } from 'openai';
import { Fetch } from 'openai/core.mjs';

export interface OpenAIAudioPluginOptions {
  readonly model: string;
  readonly apiKey?: string;
  readonly baseUrl?: string;
  readonly organization?: string;
  readonly project?: string;
  readonly headers?: { [key: string]: string };
  readonly fetch?: Fetch;
  readonly timeout?: number;
  readonly stream?: boolean;
  readonly temperature?: number;
  readonly logger?: Logger;
}

export class OpenAIAudioModel implements IAudioModel {
  private readonly _openai: OpenAI;
  private readonly _log: Logger;

  constructor(readonly options: OpenAIAudioPluginOptions) {
    this._log =
      options.logger || new ConsoleLogger(`@microsoft/spark.openai/${this.options.model}`);
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
