import { IActivity, Activity } from './activity';

export interface ITypingActivity extends IActivity<'typing'> {
  /**
   * The text content of the message.
   */
  text?: string;
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
