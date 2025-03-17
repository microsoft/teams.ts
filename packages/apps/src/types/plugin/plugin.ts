import { ActivityParams, ConversationReference, SentActivity } from '@microsoft/spark.api';

import { IStreamer } from '../streamer';
import { IActivityEvent, IErrorEvent } from '../../events';

import { IPluginInitEvent } from './plugin-init-event';
import { IPluginStartEvent } from './plugin-start-event';
import { IPluginStopEvent } from './plugin-stop-event';
import { IPluginErrorEvent } from './plugin-error-event';
import { IPluginActivityEvent } from './plugin-activity-event';
import { IPluginActivitySentEvent } from './plugin-activity-sent-event';
import { IPluginActivityResponseEvent } from './plugin-activity-response-event';

/**
 * represents a plugins
 * unique name
 */
export type PluginName = 'http' | Omit<string, 'http'>;

/**
 * emitted when the plugin
 * encounters an error
 */
export type OnErrorPluginEvent = (event: IErrorEvent) => void;

/**
 * emitted when the plugin
 * receives an activity
 */
export type OnActivityPluginEvent = (event: IActivityEvent) => void;

/**
 * a component for extending the base
 * `App` functionality
 */
export interface IPlugin {
  /**
   * lifecycle method called by the `App`
   * once during initialization
   */
  onInit?(event: IPluginInitEvent): void | Promise<void>;

  /**
   * lifecycle method called by the `App`
   * once during startup
   */
  onStart?(event: IPluginStartEvent): void | Promise<void>;

  /**
   * lifecycle method called by the `App`
   * once during shutdown
   */
  onStop?(event: IPluginStopEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an error occurs
   */
  onError?(event: IPluginErrorEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity is received
   */
  onActivity?(event: IPluginActivityEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity is sent
   */
  onActivitySent?(event: IPluginActivitySentEvent): void | Promise<void>;

  /**
   * called by the `App`
   * when an activity response is sent
   */
  onActivityResponse?(event: IPluginActivityResponseEvent): void | Promise<void>;

  /**
   * called by the `App`
   * to send an activity
   */
  send?(activity: ActivityParams, ref: ConversationReference): Promise<SentActivity>;

  /**
   * called by the `App`
   * to create a new activity stream
   */
  createStream?(ref: ConversationReference): IStreamer;
}
