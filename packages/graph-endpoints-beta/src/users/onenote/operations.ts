import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/operations': Operation<
    '/users/{user-id}/onenote/operations',
    'get'
  >;
  'GET /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/operations': Operation<
    '/users/{user-id}/onenote/operations',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/operations`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/operations/{onenoteOperation-id}`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/operations`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/operations']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/operations',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
