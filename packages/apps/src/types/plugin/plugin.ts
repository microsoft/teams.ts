import {
  ActivityParams,
  ConversationReference,
} from '@microsoft/spark.api';
import { ILogger, IStorage, Client } from '@microsoft/spark.common';

import { App } from '../../app';
import { IActivityContext } from '../../contexts';
import { IStreamer } from '../streamer';
import * as events from '../../events';

/**
 * data sent to the plugin from the
 * parent app when a plugin lifecycle event
 * has occured
 */
export interface IPluginLifecycleEvent {
  /**
   * the app id
   */
  readonly id?: string;

  /**
   * the app name
   */
  readonly name?: string;

  /**
   * the app `ILogger` instance
   */
  readonly logger: ILogger;

  /**
   * the app `http.Client` instance
   */
  readonly client: Client;

  /**
   * the app `IStorage` instance
   */
  readonly storage: IStorage;
}

export interface IPluginInitEvent extends IPluginLifecycleEvent {

};

/**
 * represents an activity that was sent
 */
export type SentActivity = { id: string } & ActivityParams;

/**
 * a component for extending the base
 * `App` functionality
 */
export interface IPlugin {
  /**
   * the unique plugin name
   */
  readonly name: string;

  /**
   * the plugin version
   */
  readonly version?: string;

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
