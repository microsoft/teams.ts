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

import {
  IStreamer,
  IStreamerEvents,
  StreamCancelledError,
  StreamNotAllowedError,
  StreamTimedOutError,
  TerminalStreamError,
} from '../types';
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
  private _timedOut: boolean = false;
  private readonly _totalTimeout = 30000; // 30 seconds

  /**
   * Whether the stream has been canceled.
   * For example when the user pressed the Stop button.
   */
  get canceled(): boolean {
    return this._canceled;
  }

  /**
   * Whether the stream has timed out.
   * For example when the streaming has exceeded two minutes.
   */
  get timedOut(): boolean {
    return this._timedOut;
  }

  /**
   * Whether the current streamed message has been finalized.
   *
   * Closing is idempotent until the next emit or update reopens the stream.
   */
  get closed(): boolean {
    return this._result !== undefined;
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

    // Emitting after close reopens the stream: start a new streamed message
    // on the same instance.
    if (this.closed) {
      this._logger.debug('starting a new streamed message after close');
      this.resetForNextStream();
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
    // Closing is idempotent until the next emit/update reopens the stream.
    if (this.closed) {
      this._logger.debug('already closed');
      return this._result;
    }

    if (!this.index && !this.queue.length && !this._flushing) {
      this._logger.debug('closed with no content');
      return;
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

    let res: SentActivity;

    if (this._timedOut) {
      // Streaming already tripped the 2-minute limit; update the original message in place.
      res = await this.sendFinal();
    } else {
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

      try {
        res = await this.sendWithRetry(activity);
      } catch (err) {
        if (err instanceof StreamTimedOutError) {
          // The final streamed send tripped the 2-minute limit. Update the original
          // message in place with the buffered content: reuse the id and drop the
          // streamInfo entity + stream channel data so this routes to update, not create.
          res = await this.sendFinal();
        } else {
          throw err;
        }
      }
    }

    this.events.emit('close', res);

    // Reset buffered message state; keep terminal status and the close result so
    // repeated close() calls stay idempotent until the next emit/update.
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
   * Send an activity through retry, treating terminal stream errors as non-retryable.
   * @param activity ActivityParams to send.
   */
  protected async sendWithRetry(activity: ActivityParams) {
    return promises.retry(() => this.send(activity), {
      logger: this._logger,
      nonRetryable: [TerminalStreamError],
    });
  }

  /**
   * Send the buffered content as a plain final message.
   *
   * Drops the `streaminfo` entity (added by `addStreamFinal()` on the normal
   * close path) and the stream channel data so `id` is kept and the send routes
   * through the update path instead of creating a duplicate message.
   */
  protected async sendFinal() {
    const finalAttachments = this.finalActivity?.attachments ?? [];
    const finalEntities = (this.finalActivity?.entities ?? []).filter((e) => e.type !== 'streaminfo');
    const finalSuggestedActions = this.finalActivity?.suggestedActions;

    const activity = new MessageActivity(this.text)
      .addAttachments(...finalAttachments)
      .addEntities(...finalEntities);

    if (this.id) {
      activity.withId(this.id);
    }

    if (finalSuggestedActions) {
      activity.withSuggestedActions(finalSuggestedActions);
    }

    return this.sendWithRetry(activity);
  }

  /**
   * Prepare the stream instance to start a new stream cycle after close().
   */
  protected resetForNextStream() {
    this.index = 0;
    this.id = undefined;
    this.text = '';
    this.channelData = {};
    this.finalActivity = undefined;
    this.queue = [];
    this._result = undefined;
    this._timedOut = false;
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

      // Once the stream has timed out, stop sending chunks for this cycle.
      if (this._timedOut) return;

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

    let res: SentActivity;
    try {
      res = await this.sendWithRetry(activity as ActivityParams);
    } catch (err) {
      // A timed-out chunk is swallowed here; close() sends the buffered content as a
      // plain message once the stream has been marked timed out.
      if (err instanceof StreamTimedOutError) {
        return;
      }
      throw err;
    }
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
      replyToId: this.ref.activityId,
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
      // Various error codes are used for streaming.
      // https://learn.microsoft.com/en-us/microsoftteams/platform/bots/streaming-ux?tabs=csharp#error-codes
      if (err?.response?.status === 403) {
        const message: string = err?.response?.data?.error?.message ?? '';
        const normalized = message.toLowerCase();

        if (normalized.includes('exceeded streaming time')) {
          this._timedOut = true;
          this._logger.warn(
            'The bot failed to complete the streaming process within the strict time limit of two minutes.'
          );
          throw new StreamTimedOutError(message);
        } else if (normalized.includes('cancel')) {
          this._canceled = true;
          this._logger.warn('The streaming was stopped by the user.');
          throw new StreamCancelledError(message);
        } else if (normalized.includes('not allowed') && !normalized.includes('completed streamed message')) {
          this._logger.warn('The streaming API isn\'t allowed for the user or bot.');
          throw new StreamNotAllowedError(message);
        }

        this._logger.warn(`Teams returned a streaming error: ${message}`);
        throw new TerminalStreamError(message);
      }
      throw err;
    }
  }
}
