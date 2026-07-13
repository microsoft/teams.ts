import { IActivity, Activity, ActivityInput, IActivityInput } from './activity';

export interface ITypingActivity extends IActivity<'typing'> {
  /**
   * The text content of the message.
   */
  text?: string;
}

/**
 * OUTBOUND typing activity — the typing indicator the app SENDS.
 *
 * All server-populated base fields optional (via {@link IActivityInput}) and the
 * typing-specific fields optional too, so both a plain `{ type: 'typing' }` literal
 * and a {@link TypingActivityInput} builder instance are assignable. The typing fields are
 * copied here instead of derived from {@link ITypingActivity}, keeping the outbound input
 * shape independent from the inbound activity interface.
 */
export interface ITypingActivityInput extends IActivityInput<'typing'> {
  /**
   * Text used by streaming updates. Ordinary typing indicators can omit this.
   */
  text?: string;
}

export class TypingActivityInput extends ActivityInput<'typing'> implements ITypingActivityInput {
  /**
   * Text used by streaming updates. Ordinary typing indicators can omit this.
   */
  text?: string;

  constructor(value: Omit<Partial<ITypingActivityInput>, 'type'> = {}) {
    super('typing', value);
    Object.assign(this, value);
  }

  /**
   * copy the outbound-safe fields from a typing-like activity input
   */
  static from(activity: ITypingActivityInput) {
    return new TypingActivityInput({
      id: activity.id,
      recipient: activity.recipient,
      replyToId: activity.replyToId,
      entities: activity.entities,
      channelData: activity.channelData,
      text: activity.text,
    });
  }

  /**
   * Set the streaming update text.
   */
  withText(value: string) {
    this.text = value;
    return this;
  }

  /**
   * Append streaming update text.
   */
  addText(text: string) {
    if (!this.text) {
      this.text = '';
    }

    this.text += text;
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

export class TypingActivity extends Activity<'typing'> implements ITypingActivity {
  /**
   * The text content of the message.
   */
  text?: string;

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
