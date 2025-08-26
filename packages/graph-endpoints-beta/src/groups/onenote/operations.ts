import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/operations': Operation<
    '/groups/{group-id}/onenote/operations',
    'get'
  >;
  'GET /groups/{group-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/operations': Operation<
    '/groups/{group-id}/onenote/operations',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/operations`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/operations',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/operations/{onenoteOperation-id}`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/operations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/operations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/operations',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
