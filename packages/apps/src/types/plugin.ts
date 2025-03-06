import {
  Activity,
  ActivityParams,
  ConversationReference,
  InvokeResponse,
  IToken,
} from '@microsoft/spark.api';
import { EventHandler, ILogger } from '@microsoft/spark.common';

import { App } from '../app';
import { IActivityContext } from '../contexts';
import { IStreamer } from './streamer';

/**
 * represents an activity that was sent
 */
export type SentActivity = { id: string } & ActivityParams;

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IActivityReceivedEvent {
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
export interface IActivityResponseEvent {
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
export interface IActivityBeforeSentEvent {
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
export interface IActivitySentEvent {
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
export interface IPluginEvents {
  error: any;
  start: ILogger;
  'activity.received': IActivityReceivedEvent;
  'activity.response': IActivityResponseEvent;
  'activity.sent': IActivitySentEvent;
  'activity.before.sent': IActivityBeforeSentEvent;
}

/**
 * a component for extending the base
 * `App` functionality
 */
export interface IPlugin<Events extends IPluginEvents = IPluginEvents> {
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
  onActivity?(ctx: IActivityContext): void | Promise<void>;

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
  onStreamOpen?(ref: ConversationReference): IStreamer | Promise<IStreamer>;
}

/**
 * a Plugin that
 */
export interface ISenderPlugin<Events extends IPluginEvents = IPluginEvents>
  extends IPlugin<Events> {
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
export interface IStreamerPlugin<Events extends IPluginEvents = IPluginEvents>
  extends IPlugin<Events> {
  /**
   * called by the `App`
   * to send an activity chunk
   */
  onStreamOpen(ref: ConversationReference): IStreamer | Promise<IStreamer>;
}
