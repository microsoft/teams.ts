import { ActivityParams, ConversationReference, SentActivity } from '@microsoft/teams.api';

import { IStreamer } from '../streamer';

import { IPlugin } from './plugin';

/**
 * a plugin that can send activities
 */
export interface ISender<TCustomEvents extends {} = {}> extends IPlugin<TCustomEvents> {
  /**
   * called by the `App`
   * to send an activity
   */
  send(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity>;

  /**
   * called by the `App`
   * to create a new activity stream
   */
  createStream(ref: ConversationReference): IStreamer;
};
