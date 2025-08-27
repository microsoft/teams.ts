export * as content from './content';
export * as copyToSection from './copyToSection';
export * as onenotePatchContent from './onenotePatchContent';
export * as parentNotebook from './parentNotebook';
export * as parentSection from './parentSection';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/pages': Operation<'/sites/{site-id}/onenote/pages', 'get'>;
  'GET /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}': Operation<
    '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/pages': Operation<'/sites/{site-id}/onenote/pages', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/pages',
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
 * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/pages']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/pages',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
