import {
  ActivityParams,
  Attachment,
  ChannelData,
  Entity,
  IMessageActivity,
} from '@microsoft/spark.api';

import { SentActivity, IStreamer } from '../../types';

export class HttpStream implements IStreamer {
  protected index = 0;
  protected id?: string;
  protected text: string = '';
  protected attachments: Attachment[] = [];
  protected channelData: ChannelData = {};
  protected entities: Entity[] = [];
  protected queue: Array<Partial<IMessageActivity>> = [];

  private _timeout?: NodeJS.Timeout;
  private _failures: number = 0;

  constructor(protected send: (activity: ActivityParams) => Promise<SentActivity>) {}

  emit(activity: Partial<IMessageActivity> | string) {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = undefined;
    }

    if (typeof activity === 'string') {
      activity = {
        type: 'message',
        text: activity,
      };
    }

    this.queue.push(activity);
    this._timeout = setTimeout(this.flush.bind(this), 200);
  }

  async close() {
    if (!this.queue.length) return;

    while (!this.id || this.queue.length) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    await this.send({
      id: this.id,
      type: 'message',
      text: this.text,
      attachments: this.attachments,
      entities: [
        ...this.entities,
        {
          type: 'streaminfo',
          streamId: this.id,
          streamType: 'final',
        },
      ],
      channelData: {
        ...this.channelData,
        streamId: this.id,
        streamType: 'final',
      },
    });

    this.index = 0;
    this.id = undefined;
    this.text = '';
    this.attachments = [];
    this.channelData = {};
    this.entities = [];
  }

  protected async flush() {
    try {
      if (!this.queue.length) return;
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = undefined;
      }

      const size = Math.round(this.queue.length / 10);
      let i = 0;

      while (this.queue.length && i <= size) {
        const activity = this.queue.shift();

        if (!activity) continue;

        if (activity.text) {
          this.text += activity.text;
        }

        if (activity.attachments) {
          this.attachments = [...(this.attachments || []), ...activity.attachments];
        }

        if (activity.channelData) {
          this.channelData = {
            ...this.channelData,
            ...activity.channelData,
          };
        }

        if (activity.entities) {
          this.entities = [...(this.entities || []), ...activity.entities];
        }

        i++;
      }

      this.index++;
      const { id } = await this.send({
        id: this.id,
        type: 'typing',
        text: this.text,
        channelData: {
          streamId: this.id,
          streamType: 'streaming',
          streamSequence: this.index,
        },
        entities: [
          {
            type: 'streaminfo',
            streamId: this.id,
            streamType: 'streaming',
            streamSequence: this.index,
          },
        ],
      });

      if (!this.id) {
        this.id = id;
      }

      this._failures = 0;

      if (this.queue.length) {
        this._timeout = setTimeout(this.flush.bind(this), 500);
      }
    } catch (err) {
      this._failures += 2;

      if (this.queue.length) {
        this._timeout = setTimeout(this.flush.bind(this), (this._failures + 1) * 500);
      }
    }
  }
}
