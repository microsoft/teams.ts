import { Logger } from '@microsoft/spark.common';

import { ErrorMiddlewareContext, SignInMiddlewareContext } from '../middleware-context';
import {
  ActivityBeforeSentEvent,
  ActivityResponseEvent,
  ActivityReceivedEvent,
  ActivitySentEvent,
} from '../types';
import { ErrorEventArgs } from './error';

export interface AppActivityErrorEvent extends ErrorMiddlewareContext {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface AppActivityReceivedEvent extends ActivityReceivedEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface AppActivityResponseEvent extends ActivityResponseEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface AppActivitySentEvent extends ActivitySentEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface AppActivityBeforeSentEvent extends ActivityBeforeSentEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface Events {
  start: Logger;
  signin: SignInMiddlewareContext;
  error: ErrorEventArgs;
  'activity.error': AppActivityErrorEvent;
  'activity.received': AppActivityReceivedEvent;
  'activity.response': AppActivityResponseEvent;
  'activity.sent': AppActivitySentEvent;
  'activity.before.sent': AppActivityBeforeSentEvent;
}

export { ErrorEventArgs };
