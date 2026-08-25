import { TextFormat } from '../models';

import { IActivity, Activity, ActivityInput, IActivityInput } from './activity';

export interface ITypingActivity extends IActivity<'typing'> {
  /**
   * The text content of the message.
   */
  text?: string;

  /**
   * Format of the `text` field. Streaming implementations set this so intermediate
   * typing chunks render with the same format (ex. `'extendedmarkdown'`) as the
   * final message they accumulate into. Default: `'markdown'`.
   */
  textFormat?: TextFormat;
}

/**
 * OUTBOUND typing activity — the typing indicator the app SENDS.
 *
 * All server-populated base fields optional (via {@link IActivityInput}) and the
 * typing-specific fields optional too, so both a plain `{ type: 'typing' }` literal
 * and a {@link TypingActivityInput} builder instance are assignable. The typing fields are
 * copied here instead of derived from {@link ITypingActivity}, keeping the outbound input
 * shape independent from the inbound activity interface. Use {@link TypingActivityInputOptions}
 * to include unmodeled extension fields when constructing a {@link TypingActivityInput}.
 */
export interface ITypingActivityInput extends IActivityInput<'typing'> {
  /**
   * Text used by streaming updates. Ordinary typing indicators can omit this.
   */
  text?: string;

  /**
   * Format of the `text` field. Streaming implementations set this so intermediate
   * typing chunks render with the same format (ex. `'extendedmarkdown'`) as the
   * final message they accumulate into. Default: `'markdown'`.
   */
  textFormat?: TextFormat;
}

/**
 * Constructor fields for {@link TypingActivityInput}.
 *
 * This accepts modeled outbound typing fields plus channel/service extension fields that
 * should serialize at the top level of the outbound activity payload. The constructor owns
 * the `type` discriminator; set typing text with the `text` field or
 * {@link TypingActivityInput.withText}.
 */
export type TypingActivityInputOptions = Omit<Partial<ITypingActivityInput>, 'type'> &
  Record<string, unknown>;

/**
 * Builder for outbound typing activities.
 */
export class TypingActivityInput extends ActivityInput<'typing'> implements ITypingActivityInput {
  /**
   * Text used by streaming updates. Ordinary typing indicators can omit this.
   */
  text?: string;

  /**
   * Format of the `text` field. Streaming implementations set this so intermediate
   * typing chunks render with the same format (ex. `'extendedmarkdown'`) as the
   * final message they accumulate into. Default: `'markdown'`.
   */
  textFormat?: TextFormat;

  /**
   * Create an outbound typing activity input.
   * @param value - Initial modeled input fields and unmodeled extension fields to serialize.
   */
  constructor(value: TypingActivityInputOptions = {}) {
    super('typing');

    const { type: _type, ...fields } = value;

    Object.assign(this, fields);
  }

  /**
   * Copy outbound-safe fields from a typing-like activity input.
   * @param activity - Typing input to copy.
   */
  static from(activity: ITypingActivity): TypingActivityInput;
  static from(activity: ITypingActivityInput): TypingActivityInput;
  static from(activity: ITypingActivity | ITypingActivityInput): TypingActivityInput;
  static from(activity: ITypingActivity | ITypingActivityInput) {
    const {
      type: _type,
      from: _from,
      conversation: _conversation,
      channelId: _channelId,
      serviceUrl: _serviceUrl,
      timestamp: _timestamp,
      localTimestamp: _localTimestamp,
      relatesTo: _relatesTo,
      ...value
    } = activity as Partial<ITypingActivity> & Record<string, unknown>;

    return new TypingActivityInput(value);
  }

  /**
   * Set the streaming update text.
   * @param value - Streaming update text.
   */
  withText(value: string) {
    this.text = value;
    return this;
  }

  /**
   * Append streaming update text.
   * @param text - Streaming update text to append.
   */
  addText(text: string) {
    if (!this.text) {
      this.text = '';
    }

    this.text += text;
    return this;
  }

  /**
   * Set the format of the `text` field.
   * @param value - Text format.
   */
  withTextFormat(value: TextFormat) {
    this.textFormat = value;
    return this;
  }

  /**
   * Add stream metadata to this typing update.
   * @param sequence - Sequence number of the stream chunk.
   */
  addStreamUpdate(sequence: number = 0) {
    if (!this.channelData) {
      this.channelData = {};
    }

    if (!this.channelData.streamId) {
      this.channelData.streamId = this.id;
    }

    if (!this.channelData.streamType) {
      this.channelData.streamType = 'streaming';
    }
    if (!this.channelData.streamSequence) {
      this.channelData.streamSequence = sequence;
    }

    return this.addEntity({
      type: 'streaminfo',
      streamId: this.id,
      streamType: this.channelData.streamType,
      streamSequence: this.channelData.streamSequence,
    });
  }
}

export class TypingActivity extends Activity<'typing'> implements ITypingActivity {
  /**
   * The text content of the message.
   */
  text?: string;

  /**
   * Format of the `text` field.
   */
  textFormat?: TextFormat;

  constructor(value: Omit<Partial<ITypingActivity>, 'type'> = {}) {
    super({
      type: 'typing',
      ...value,
    });

    Object.assign(this, value);
  }

  /**
   * initialize from interface
   */
  static from(activity: ITypingActivity) {
    return new TypingActivity(activity);
  }

  /**
   * convert to interface
   */
  toInterface(): ITypingActivity {
    return Object.assign({}, this);
  }

  /**
   * copy to a new instance
   */
  clone(options: Omit<Partial<ITypingActivity>, 'type'> = {}) {
    return new TypingActivity({
      ...this.toInterface(),
      ...options,
    });
  }

  /**
   * The text content of the message.
   */
  withText(value: string) {
    this.text = value;
    return this;
  }

  /**
   * Append text
   */
  addText(text: string) {
    if (!this.text) {
      this.text = '';
    }

    this.text += text;
    return this;
  }

  /**
   * Set the format of the `text` field.
   */
  withTextFormat(value: TextFormat) {
    this.textFormat = value;
    return this;
  }

  /**
   * Add stream informative update
   * @param id the stream id
   * @param sequence the sequence number (index) of the chunk
   */
  addStreamUpdate(sequence: number = 0) {
    if (!this.channelData) {
      this.channelData = {};
    }

    if (!this.channelData.streamId) {
      this.channelData.streamId = this.id;
    }

    if (!this.channelData.streamType) {
      this.channelData.streamType = 'streaming';
    }
    if (!this.channelData.streamSequence) {
      this.channelData.streamSequence = sequence;
    }

    return this.addEntity({
      type: 'streaminfo',
      streamId: this.id,
      streamType: this.channelData.streamType,
      streamSequence: this.channelData.streamSequence,
    });
  }
}
