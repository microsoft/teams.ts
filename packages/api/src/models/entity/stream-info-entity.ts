export type StreamInfoEntity = {
  readonly type: 'streaminfo';

  /**
   * ID of the stream.
   * @remarks
   * Assigned after the initial update is sent.
   */
  streamId?: string;

  /**
   * The type of message being sent.
   * @remarks
   * `informative` - An informative update.
   * `streaming` - A chunk of partial message text.
   * `final` - The final message.
   */
  streamType?: 'informative' | 'streaming' | 'final';

  /**
   * Sequence number of the message in the stream.
   * @remarks
   * Starts at 1 for the first message and increments from there.
   */
  streamSequence?: number;

  /**
   * other properties
   */
  [key: string]: any;
};
