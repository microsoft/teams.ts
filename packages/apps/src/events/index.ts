import { ILogger } from '@microsoft/spark.common';

import { IActivityErrorContext, IActivitySignInContext } from '../contexts';
import {
  IActivityBeforeSentEvent,
  IActivityResponseEvent,
  IActivityReceivedEvent,
  IActivitySentEvent,
} from '../types';
import { ErrorEvent } from './error';

export interface IAppActivityErrorEvent extends IActivityErrorContext {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface IAppActivityReceivedEvent extends IActivityReceivedEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface IAppActivityResponseEvent extends IActivityResponseEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface IAppActivitySentEvent extends IActivitySentEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface IAppActivityBeforeSentEvent extends IActivityBeforeSentEvent {
  /**
   * the unique name of the plugin that
   * emitted the event
   */
  plugin: string;
}

export interface IEvents {
  start: ILogger;
  signin: IActivitySignInContext;
  error: ErrorEvent;
  'activity.error': IAppActivityErrorEvent;
  'activity.received': IAppActivityReceivedEvent;
  'activity.response': IAppActivityResponseEvent;
  'activity.sent': IAppActivitySentEvent;
  'activity.before.sent': IAppActivityBeforeSentEvent;
}

export { ErrorEvent };
