import { EventEmitter } from '@microsoft/spark.common';
import {
  ActivityParams,
  Attachment,
  ChannelData,
  Client,
  ConversationReference,
  Entity,
  IMessageActivity,
  MessageActivity,
  TypingActivity,
} from '@microsoft/spark.api';

import { IStreamer, IStreamerEvents } from '../../types';

export class HttpStream implements IStreamer {
  readonly events = new EventEmitter<IStreamerEvents>();

  protected client: Client;
  protected ref: ConversationReference;
  protected index = 0;
  protected id?: string;
  protected text: string = '';
  protected attachments: Attachment[] = [];
  protected channelData: ChannelData = {};
  protected entities: Entity[] = [];
  protected queue: Array<Partial<IMessageActivity>> = [];

  private _timeout?: NodeJS.Timeout;
  private _failures: number = 0;

  constructor(client: Client, ref: ConversationReference) {
    this.client = client;
    this.ref = ref;
  }

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

    const activity = new MessageActivity(this.text)
      .withId(this.id)
      .addAttachments(...this.attachments)
      .addEntities(...this.entities)
      .addStreamFinal();

    const res = await this.send(activity);
    this.events.emit('close', res);

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
      const activity = new TypingActivity({ id: this.id })
        .withText(this.text)
        .addStreamUpdate(this.index);

      const res = await this.send(activity);
      this.events.emit('chunk', res);

      if (!this.id) {
        this.id = res.id;
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

  protected async send(activity: ActivityParams) {
    activity = {
      ...activity,
      from: this.ref.bot,
      conversation: this.ref.conversation,
    };

    if (activity.id && !(activity.entities?.some((e) => e.type === 'streaminfo') || false)) {
      const res = await this.client.conversations
        .activities(this.ref.conversation.id)
        .update(activity.id, activity);
      return { ...activity, ...res };
    }

    const res = await this.client.conversations
      .activities(this.ref.conversation.id)
      .create(activity);
    return { ...activity, ...res };
  }
}
