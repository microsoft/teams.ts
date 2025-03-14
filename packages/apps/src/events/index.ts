import { ILogger } from '@microsoft/spark.common';

import { IActivitySignInContext } from '../contexts';

import { IActivityEvent } from './activity';
import { IActivityResponseEvent } from './activity-response';
import { IActivitySentEvent } from './activity-sent';
import { IErrorEvent } from './error';

export interface IEvents {
  start: ILogger;
  signin: IActivitySignInContext;
  error: IErrorEvent;
  activity: IActivityEvent;
  'activity.response': IActivityResponseEvent;
  'activity.sent': IActivitySentEvent;
}

export * from './activity';
export * from './activity-response';
export * from './activity-sent';
export * from './error';
