export * as allTime from './allTime';
export * as itemActivityStats from './itemActivityStats';
export * as lastSevenDays from './lastSevenDays';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/analytics': Operation<
    '/groups/{group-id}/sites/{site-id}/analytics',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/analytics`
 *
 * Analytics about the view activities that took place on this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/analytics',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
