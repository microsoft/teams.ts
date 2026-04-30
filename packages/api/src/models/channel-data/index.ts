import { MeetingInfo } from '../meeting';
import { MembershipSource } from '../membership-source';

import { ChannelInfo } from './channel-info';
import { FeedbackLoop } from './feedback-loop';
import { NotificationInfo } from './notification-info';
import { OnBehalfOf } from './on-behalf-of';
import { ChannelDataSettings } from './settings';
import { TeamInfo } from './team-info';
import { TenantInfo } from './tenant-info';

/**
 *
 * An interface representing ChannelData.
 * Channel data specific to messages received in Microsoft Teams
 *
 */
export type ChannelData = {
  /**
   * @member {ChannelInfo} [channel] Information about the channel in which the
   * message was sent.
   */
  channel?: ChannelInfo;

  /**
   * @member {string} [eventType] Type of event.
   */
  eventType?: unknown;

  /**
   * @member {TeamInfo} [team] Information about the team in which the message
   * was sent.
   */
  team?: TeamInfo;

  /**
   * @member {NotificationInfo} [notification] Notification settings for the
   * message.
   */
  notification?: NotificationInfo;

  /**
   * @member {TenantInfo} [tenant] Information about the tenant in which the
   * message was sent.
   */
  tenant?: TenantInfo;

  /**
   * @member {MeetingInfo} [meeting] Information about the tenant in which the
   * message was sent.
   */
  meeting?: MeetingInfo;

  /**
   * @member {ChannelDataSettings} [settings] Information about the settings in which the
   * message was sent.
   */
  settings?: ChannelDataSettings;

  /**
   * Legacy feedback loop flag. Setting this to `true` is equivalent to `feedbackLoop: { type: 'default' }`.
   * Prefer using `feedbackLoop` directly.
   */
  feedbackLoopEnabled?: boolean;

  /**
   * Feedback loop configuration.
   * Set `type` to `'custom'` to trigger a `message/fetchTask` invoke for a bot-provided task module dialog.
   * Set `type` to `'default'` for the standard Teams thumbs up/down UI.
   */
  feedbackLoop?: FeedbackLoop;

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
   * Information about the users on behalf of whom the action is performed.
   */
  onBehalfOf?: OnBehalfOf[];

  /**
   * List of teams that a channel was shared with.
   */
  sharedWithTeams?: TeamInfo[]
  
  /**
   * List of teams that a channel was unshared from.
   */
  unsharedFromTeams?: TeamInfo[];

  /**
   * Information about the source of a member that was added or removed from a shared channel.
   */
  membershipSource?: MembershipSource;
};

export * from './channel-info';
export * from './notification-info';
export * from './on-behalf-of';
export * from './settings';
export * from './team-info';
export * from './tenant-info';
export * from './feedback-loop';