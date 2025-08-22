export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /me/onenote/resources': Operation<'/me/onenote/resources', 'get'>;
  'GET /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /me/onenote/resources': Operation<'/me/onenote/resources', 'post'>;
}

/**
 * `DELETE /me/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/resources']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/resources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: [{ name: 'onenoteResource-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/resources']['body'],
  params?: IEndpoints['POST /me/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/resources']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/resources',
    paramDefs: [],
    params,
    body,
  };
}
