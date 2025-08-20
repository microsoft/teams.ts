export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/resources': Operation<'/users/{user-id}/onenote/resources', 'get'>;
  'GET /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/resources': Operation<
    '/users/{user-id}/onenote/resources',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/resources',
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
 * `GET /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/resources',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
