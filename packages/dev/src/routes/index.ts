import express from 'express';

import { RouteContext } from './context';
import * as v3 from './v3';

export function router(ctx: RouteContext) {
  return express
    .Router({ mergeParams: true })
    .use(express.json())
    .use(
      '/v3',
      v3.router({
        ...ctx,
        log: ctx.log.child('v3'),
      })
    );
}
