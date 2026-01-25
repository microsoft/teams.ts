import {
  ActivityParams,
  Attachment,
  ChannelData,
  Client,
  ConversationReference,
  Entity,
  IMessageActivity,
  ITypingActivity,
  MessageActivity,
  SentActivity,
  TypingActivity,
} from '@microsoft/teams.api';
import { ConsoleLogger, EventEmitter, ILogger } from '@microsoft/teams.common';

import { IStreamer, IStreamerEvents } from '../../types';
import { promises } from '../../utils';

/**
 * HTTP-based streaming implementation for Microsoft Teams activities.
 *
 * Allows sending typing indicators and messages in chunks to Teams.
 * Queues incoming activities and flushes them periodically to avoid
 * rate limits.
 *
 * Flow:
 * 1. `emit()` adds activities to the queue and starts a flush if none scheduled.
 * 2. `_flush()` starts by cancelling any pending flush, then processes up to 10 queued activities under a lock.
 * 3. Informative typing updates are sent immediately.
 * 4. Message text is combined and sent as a typing activity.
 * 5. `_flush()` schedules another flush if more items remain in queue.
 * 6. `close()` waits for the queue to empty and sends the final message activity.
 */
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
  protected queue: Array<Partial<IMessageActivity | ITypingActivity>> = [];

  private _result?: SentActivity;
  private _timeout?: NodeJS.Timeout;
  private _logger: ILogger;
  private _flushing: boolean = false;
  private readonly _totalTimeout = 30000; // 30 seconds

  constructor(client: Client, ref: ConversationReference, logger?: ILogger) {
    this.client = client;
    this.ref = ref;
    this._logger = logger?.child('stream') || new ConsoleLogger('@teams/http/stream');
  }

  /**
   * Emit a new activity or text to the stream.
   * @param activity Activity object or string message.
   */
  emit(activity: Partial<IMessageActivity | ITypingActivity> | string) {

    if (typeof activity === 'string') {
      activity = {
        type: 'message',
        text: activity,
      };
    }

    this.queue.push(activity);

    // Start flush if not already scheduled
    if (!this._timeout) {
      this.flush();
    }
  }

  /**
   * Send a typing/status update without adding to the main text.
   * @param text Status text (ex. "Thinking...")
   */
  update(text: string) {
    this.emit({
      type: 'typing',
      text: text,
      channelData: { streamType: 'informative' }
    });
  }

  /**
   * Close the stream by sending the final message.
   * Waits for all queued activities to flush.
   */
  async close() {
    if (!this.index && !this.queue.length && !this._flushing) {
      this._logger.debug('closed with no content');
      return;
    }

    if (this._result) {
      this._logger.debug('already closed');
      return this._result;
    }

    // Wait until all queued activities are flushed
    const start = Date.now();

    while (this.queue.length || !this.id) {
      if (Date.now() - start > this._totalTimeout) {
        this._logger.warn('Timeout while waiting for id and queue to flush');
        return;
      }
      this._logger.debug('waiting for id to be set or queue to be empty');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (this.text === '' && !this.attachments.length) {
      this._logger.warn('no text or attachments to send, cannot close stream');
      return;
    }

    // Build final message activity
    const activity = new MessageActivity(this.text)
      .withId(this.id)
      .addAttachments(...this.attachments)
      .addEntities(...this.entities)
      .addStreamFinal()
      .withChannelData(this.channelData);

    const res = await promises.retry(() => this.send(activity), {
      logger: this._logger
    });

    this.events.emit('close', res);

    // Reset internal state
    this.index = 0;
    this.id = undefined;
    this.text = '';
    this.attachments = [];
    this.channelData = {};
    this.entities = [];
    this._result = res;
    this._logger.debug(res);
    return res;
  }

  /**
   * Flush queued activities.
   * Processes up to 10 items at a time.
   */
  protected async flush() {
    // if locked or no queue, return early
    if (!this.queue.length || this._flushing) return;

    this._flushing = true;

    try {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = undefined;
      }

      let i = 0;
      const informativeUpdates: Partial<ITypingActivity>[] = [];

      while (this.queue.length && i < 10) {
        const activity = this.queue.shift();

        if (!activity) continue;

        if (activity.type === 'message') {
          if (activity.text) {
            this.text += activity.text;
          }
          if (activity.attachments) {
            this.attachments = [...(this.attachments || []), ...activity.attachments];
          }
          if (activity.entities) {
            this.entities = [...(this.entities || []), ...activity.entities];
          }
        }

        if (activity.type === 'typing') {
          if (activity.channelData?.streamType === 'informative' && this.text === '') {
            informativeUpdates.push(activity);
          }
        }

        if (activity.channelData) {
          this.channelData = {
            ...this.channelData,
            ...activity.channelData,
          };
        }

        i++;
      }

      if (i === 0) return;

      // Send informative updates immediately
      for (const informativeUpdate of informativeUpdates) {
        const activity = new TypingActivity().withText(informativeUpdate.text || '').withChannelData({ streamType: 'informative' });
        await this.pushStreamChunk(activity);
      }

      if (this.text) {
        const activity = new TypingActivity().withText(this.text);
        await this.pushStreamChunk(activity);
      }

      // Schedule another flush if queue is not empty
      if (this.queue.length) {
        this._timeout = setTimeout(this.flush.bind(this), 500);
      }
    } catch (err) {
      this._logger.error(err, 'flush failed');
    } finally {
      this._flushing = false;
    }
  }

  /**
   * Push a new chunk to the stream.
   * @param activity TypingActivity to send.
   */
  protected async pushStreamChunk(activity: TypingActivity) {
      if (this.id) {
        activity.id = this.id;
      }
      activity.addStreamUpdate(this.index + 1);

      const res = await promises.retry(() => this.send(activity as ActivityParams), {
        logger: this._logger
      });
      this.events.emit('chunk', res);
      this.index++;
      if (!this.id) {
        this.id = res.id;
      }
  }

  /**
   * Send or update a streaming activity
   * @param activity ActivityParams to send.
   */
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
