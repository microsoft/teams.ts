export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/resources': Operation<'/sites/{site-id}/onenote/resources', 'get'>;
  'GET /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/resources': Operation<
    '/sites/{site-id}/onenote/resources',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/resources']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/resources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/resources']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/resources',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
