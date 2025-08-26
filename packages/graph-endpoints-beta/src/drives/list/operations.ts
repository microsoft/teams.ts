import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/operations': Operation<'/drives/{drive-id}/list/operations', 'get'>;
  'GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/operations': Operation<
    '/drives/{drive-id}/list/operations',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/operations`
 *
 * The collection of long-running operations on the list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/operations']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
 *
 * The collection of long-running operations on the list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/operations`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/operations']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/operations']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/operations',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
