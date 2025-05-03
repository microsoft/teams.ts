import express from 'express';

import { RouteContext } from '../../../context';

import { create } from './create';

export function router(ctx: RouteContext) {
  return express.Router({ mergeParams: true }).post(
    '/',
    create({
      ...ctx,
      log: ctx.log.child('create'),
    })
  );
}
