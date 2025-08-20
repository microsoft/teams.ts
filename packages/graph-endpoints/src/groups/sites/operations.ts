import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/operations',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/operations': Operation<
    '/groups/{group-id}/sites/{site-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/operations`
 *
 * The collection of long-running operations on the site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 * The collection of long-running operations on the site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/operations']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/operations',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
