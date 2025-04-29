import express from 'express';

import { RouteContext } from '../context';

import * as conversations from './conversations';

export function router(ctx: RouteContext) {
  return express.Router({ mergeParams: true }).use(
    '/conversations',
    conversations.router({
      ...ctx,
      log: ctx.log.child('conversations'),
    })
  );
}
