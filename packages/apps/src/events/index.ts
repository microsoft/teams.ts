import { ILogger } from '@microsoft/teams.common';

import { IActivitySignInContext } from '../contexts';

import { IActivityEvent } from './activity';
import { IActivityResponseEvent } from './activity-response';
import { IActivitySentEvent } from './activity-sent';
import { IErrorEvent } from './error';

export interface IEvents {
  start: ILogger;
  /**
   * Emitted when a sign-in completes. Listeners are awaited within the
   * sign-in turn, so `ctx.state` stays live across `await`s and any writes are
   * persisted. A listener that throws is logged and does not fail the turn.
   */
  signin: IActivitySignInContext;
  error: IErrorEvent;
  activity: IActivityEvent;
  'activity.response': IActivityResponseEvent;
  'activity.sent': IActivitySentEvent;
}

const allIEventKeysRecord: Record<keyof IEvents, true> = {
  start: true,
  signin: true,
  error: true,
  activity: true,
  'activity.response': true,
  'activity.sent': true,
};

// This is a trick to make sure typescript-complains whenever we add a new event
// in IEvents, we MUST also add it to allIEventKeysRecord so we have a runtime
// check to make sure we didn't forget to add it to the record.
export const allIEventKeys = Object.keys(allIEventKeysRecord);

export * from './activity';
export * from './activity-response';
export * from './activity-sent';
export * from './error';

