export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/resources': Operation<
    '/groups/{group-id}/onenote/resources',
    'get'
  >;
  'GET /groups/{group-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/resources': Operation<
    '/groups/{group-id}/onenote/resources',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/resources',
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
 * `GET /groups/{group-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/resources',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
