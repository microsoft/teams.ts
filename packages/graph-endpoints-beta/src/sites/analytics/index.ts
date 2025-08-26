export * as allTime from './allTime';
export * as itemActivityStats from './itemActivityStats';
export * as lastSevenDays from './lastSevenDays';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'delete'>;
  'GET /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'get'>;
  'PATCH /sites/{site-id}/analytics': Operation<'/sites/{site-id}/analytics', 'patch'>;
}

/**
 * `DELETE /sites/{site-id}/analytics`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/analytics',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/analytics`
 *
 * Analytics about the view activities that took place on this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/analytics',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/analytics`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/analytics']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/analytics']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/analytics']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/analytics',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
