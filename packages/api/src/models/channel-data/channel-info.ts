/**
 *
 * An interface representing ChannelInfo.
 * A channel info object which decribes the channel.
 *
 */
export type ChannelInfo = {
  /**
   * @member {string} [id] Unique identifier representing a channel
   */
  id: string;

  /**
   * @member {string} [name] Name of the channel
   */
  name?: string;

  /**
   * @member {string} [type] The type of the channel. Valid values are standard, shared and private.
   */
  type?: 'standard' | 'shared' | 'private';
};
