import { ILogger } from '@microsoft/spark.common';

import { IActivitySignInContext } from '../contexts';

import { IActivityBeforeSentEvent } from './activity-before-sent';
import { IActivityReceivedEvent } from './activity-received';
import { IActivityResponseEvent } from './activity-response';
import { IActivitySentEvent } from './activity-sent';
import { IErrorEvent, IActivityErrorEvent } from './error';

export interface IEvents {
  start: ILogger;
  signin: IActivitySignInContext;
  error: IErrorEvent;
  'activity.error': IActivityErrorEvent;
  'activity.received': IActivityReceivedEvent;
  'activity.response': IActivityResponseEvent;
  'activity.sent': IActivitySentEvent;
  'activity.before.sent': IActivityBeforeSentEvent;
}

export * from './activity-before-sent';
export * from './activity-received';
export * from './activity-response';
export * from './activity-sent';
export * from './error';
