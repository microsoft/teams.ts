export * as controls from './controls';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'delete'
  >;
  'GET /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'get'
  >;
  'PATCH /programControls/{programControl-id}/program': Operation<
    '/programControls/{programControl-id}/program',
    'patch'
  >;
}

/**
 * `DELETE /programControls/{programControl-id}/program`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['DELETE /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programControls/{programControl-id}/program',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programControls/{programControl-id}/program`
 *
 * The program this control is part of.
 */
export function get(
  params?: IEndpoints['GET /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['GET /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls/{programControl-id}/program',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programControls/{programControl-id}/program`
 *
 */
export function update(
  body: IEndpoints['PATCH /programControls/{programControl-id}/program']['body'],
  params?: IEndpoints['PATCH /programControls/{programControl-id}/program']['parameters']
): EndpointRequest<IEndpoints['PATCH /programControls/{programControl-id}/program']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programControls/{programControl-id}/program',
    paramDefs: [{ name: 'programControl-id', in: 'path' }],
    params,
    body,
  };
}
