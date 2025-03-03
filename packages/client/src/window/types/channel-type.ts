/**
 * The type of the channel with which the content is associated.
 */
export type ChannelType = 'Regular' | 'Private' | 'Shared';

/**
 * The type of the channel with which the content is associated.
 */
export enum ChannelTypes {
  /** The default channel type. Type of channel is used for general collaboration and communication within a team. */
  Regular = 'Regular',

  /** Type of channel is used for sensitive or confidential communication within a team and is only accessible to members of the channel. */
  Private = 'Private',

  /** Type of channel is used for collaboration between multiple teams or groups and is accessible to members of all the teams or groups. */
  Shared = 'Shared',
}
