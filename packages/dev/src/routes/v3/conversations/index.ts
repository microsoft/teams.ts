import express from 'express';

import { RouteContext } from '../../context';

import * as activities from './activities';

export function router(ctx: RouteContext) {
  return express.Router({ mergeParams: true }).use(
    '/:conversationId/activities',
    activities.router({
      ...ctx,
      log: ctx.log.child('activities'),
    })
  );
}
