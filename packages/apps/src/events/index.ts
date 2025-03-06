import { ILogger } from '@microsoft/spark.common';

import { IErrorMiddlewareContext, ISignInMiddlewareContext } from '../contexts';
import {
  IActivityBeforeSentEvent,
  IActivityResponseEvent,
  IActivityReceivedEvent,
  IActivitySentEvent,
} from '../types';
import { ErrorEventArgs } from './error';

export interface IAppActivityErrorEvent extends IErrorMiddlewareContext {
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
  signin: ISignInMiddlewareContext;
  error: ErrorEventArgs;
  'activity.error': IAppActivityErrorEvent;
  'activity.received': IAppActivityReceivedEvent;
  'activity.response': IAppActivityResponseEvent;
  'activity.sent': IAppActivitySentEvent;
  'activity.before.sent': IAppActivityBeforeSentEvent;
}

export { ErrorEventArgs };
