import {
  Activity,
  ActivityParams,
  ConversationReference,
  InvokeResponse,
  IToken,
} from '@microsoft/spark.api';
import { EventHandler, Logger } from '@microsoft/spark.common';

import { App } from '../app';
import { ActivityContext } from '../activity-context';
import { Streamer } from './streamer';

/**
 * represents an activity that was sent
 */
export type SentActivity = { id: string } & ActivityParams;

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface ActivityReceivedEvent {
  /**
   * inbound request token
   */
  token: IToken;

  /**
   * inbound request activity payload
   */
  activity: Activity;
}

/**
 * the event emitted by a plugin
 * before an invoke response is returned
 */
export interface ActivityResponseEvent {
  /**
   * inbound request activity payload
   */
  activity: Activity;

  /**
   * the response
   */
  response: InvokeResponse;

  /**
   * the conversation reference
   */
  ref: ConversationReference;
}

/**
 * the event emitted by a plugin
 * before an activity is sent
 */
export interface ActivityBeforeSentEvent {
  /**
   * the activity that will be sent
   */
  activity: ActivityParams;

  /**
   * the conversation reference
   */
  ref: ConversationReference;
}

/**
 * the event emitted by a plugin
 * when an activity is sent
 */
export interface ActivitySentEvent {
  /**
   * the sent activity
   */
  activity: SentActivity;

  /**
   * the conversation reference
   */
  ref: ConversationReference;
}

/**
 * the events a plugin can emit
 */
export interface PluginEvents {
  error: any;
  start: Logger;
  'activity.received': ActivityReceivedEvent;
  'activity.response': ActivityResponseEvent;
  'activity.sent': ActivitySentEvent;
  'activity.before.sent': ActivityBeforeSentEvent;
}

/**
 * a component for extending the base
 * `App` functionality
 */
export interface Plugin<Events extends PluginEvents = PluginEvents> {
  /**
   * the unique plugin name
   */
  readonly name: string;

  /**
   * subscribe to a plugin event
   */
  on<Name extends keyof Events>(name: Name, callback: EventHandler<Events[Name]>): void;

  /**
   * lifecycle method called by the `App`
   * once during initialization
   */
  onInit(app: App): void | Promise<void>;

  /**
   * lifecycle method called by the `App`
   * once during startup
   */
  onStart?(...args: any[]): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity is received
   */
  onActivity?(ctx: ActivityContext): void | Promise<void>;

  /**
   * called by the `App`
   * to send an activity
   */
  onSend?(
    activity: ActivityParams,
    ref: ConversationReference
  ): SentActivity | Promise<SentActivity>;

  /**
   * called by the `App`
   * to send an activity chunk
   */
  onStreamOpen?(ref: ConversationReference): Streamer | Promise<Streamer>;
}

/**
 * a Plugin that
 */
export interface SenderPlugin<Events extends PluginEvents = PluginEvents> extends Plugin<Events> {
  /**
   * called by the `App`
   * to send an activity
   */
  onSend(
    activity: ActivityParams,
    ref: ConversationReference
  ): SentActivity | Promise<SentActivity>;
}

/**
 * a Plugin that
 */
export interface StreamerPlugin<Events extends PluginEvents = PluginEvents> extends Plugin<Events> {
  /**
   * called by the `App`
   * to send an activity chunk
   */
  onStreamOpen(ref: ConversationReference): Streamer | Promise<Streamer>;
}
