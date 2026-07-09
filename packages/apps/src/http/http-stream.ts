import {
  ActivityParams,
  ChannelData,
  Client,
  ConversationReference,
  IMessageActivity,
  ITypingActivity,
  MessageActivity,
  SentActivity,
  TypingActivity,
} from '@microsoft/teams.api';
import { ConsoleLogger, EventEmitter, ILogger } from '@microsoft/teams.common';

import { IStreamer, IStreamerEvents, StreamCancelledError } from '../types';
import { promises } from '../utils';

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
  protected channelData: ChannelData = {};
  protected finalActivity?: Partial<IMessageActivity>;
  protected queue: Array<Partial<IMessageActivity | ITypingActivity>> = [];

  private _result?: SentActivity;
  private _timeout?: NodeJS.Timeout;
  private _logger: ILogger;
  private _flushing: boolean = false;
  private _canceled: boolean = false;
  private readonly _totalTimeout = 30000; // 30 seconds

  /**
   * Whether the stream has been canceled.
   * For example when the user pressed the Stop button or the 2-minute timeout has exceeded.
   */
  get canceled(): boolean {
    return this._canceled;
  }

  constructor(client: Client, ref: ConversationReference, logger?: ILogger) {
    this.client = client;
    this.ref = ref;
    this._logger = logger?.child('stream') || new ConsoleLogger('@teams/http-stream');
  }

  /**
   * Emit a new activity or text to the stream.
   * @param activity Activity object or string message.
   */
  emit(activity: Partial<IMessageActivity | ITypingActivity> | string) {
    if (this._canceled) {
      throw new StreamCancelledError();
    }

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
   * Discard accumulated streamed text and any pending text deltas. The
   * final message sent by `close()` will not include them. Intermediate
   * typing chunks already shipped to Teams are not undone, but the final
   * message updates the same activity id, so the user sees the cleared
   * state. Pending non-message activities (typing updates, structured
   * message emits that follow) are not affected.
   */
  clearText() {
    this.text = '';
    // Drop queued text deltas so the next flush doesn't repopulate `text`.
    this.queue = this.queue.filter((a) => a.type !== 'message');
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

    if (this._canceled) {
      this._logger.debug('stream canceled, nothing to close');
      return;
    }

    // Wait until all queued activities are flushed
    const start = Date.now();

    while ((this.queue.length || !this.id || this._flushing) && !this._canceled) {
      if (Date.now() - start > this._totalTimeout) {
        this._logger.warn('Timeout while waiting for id and queue to flush');
        return;
      }
      this._logger.debug('waiting for id to be set or queue to be empty');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (this._canceled) {
      this._logger.debug('stream canceled, nothing to close');
      return;
    }

    if (!this.id) {
      this._logger.warn('no stream id set, cannot close stream');
      return;
    }

    const finalAttachments = this.finalActivity?.attachments ?? [];
    const finalEntities = this.finalActivity?.entities ?? [];
    const finalSuggestedActions = this.finalActivity?.suggestedActions;

    if (this.text === '' && !finalAttachments.length && !finalSuggestedActions) {
      this._logger.warn('no text, attachments, or suggested actions to send, cannot close stream');
      return;
    }

    // Build final message activity from the last-emitted MessageActivity (last wins),
    // overlaying accumulated text, id, channelData, and the stream-final entity.
    const activity = new MessageActivity(this.text)
      .withId(this.id)
      .addAttachments(...finalAttachments)
      .addEntities(...finalEntities)
      .withChannelData(this.channelData)
      .addStreamFinal();

    if (finalSuggestedActions) {
      activity.withSuggestedActions(finalSuggestedActions);
    }

    const res = await promises.retry(() => this.send(activity), {
      logger: this._logger
    });

    this.events.emit('close', res);

    // Reset internal state
    this.index = 0;
    this.id = undefined;
    this.text = '';
    this.channelData = {};
    this.finalActivity = undefined;
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

      const informativeUpdates: Partial<ITypingActivity>[] = [];
      const startLength = this.queue.length;

      while (this.queue.length) {
        const activity = this.queue.shift();

        if (!activity) continue;

        if (activity.type === 'message') {
          if (activity.text) {
            this.text += activity.text;
          }
          // Last emitted MessageActivity wins for attachments / entities / suggestedActions.
          // Matches the Python streamer's `_final_activity` behavior.
          this.finalActivity = activity;
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
      }

      if (startLength === 0) return;

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
      if (!(err instanceof StreamCancelledError)) {
        this._logger.error(err, 'flush failed');
      }
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
    if (this._canceled) {
      throw new StreamCancelledError();
    }

    activity = {
      ...activity,
      from: this.ref.bot,
      conversation: this.ref.conversation,
    };

    try {
      if (activity.id && !(activity.entities?.some((e) => e.type === 'streaminfo') || false)) {
        const res = await this.client.conversations.updateActivity(
          this.ref.conversation.id,
          activity.id,
          activity
        );

        return { ...activity, ...res };
      }

      const res = await this.client.conversations.createActivity(
        this.ref.conversation.id,
        activity
      );

      return { ...activity, ...res };
    } catch (err: any) {
      if (err?.response?.status === 403) {
        this._canceled = true;
        this._logger.debug('stream canceled by Teams (403)');
        throw new StreamCancelledError();
      }
      throw err;
    }
  }
}
