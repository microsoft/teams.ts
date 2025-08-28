export * as content from './content';
export * as copyToSection from './copyToSection';
export * as onenotePatchContent from './onenotePatchContent';
export * as parentNotebook from './parentNotebook';
export * as parentSection from './parentSection';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /me/onenote/pages': Operation<'/me/onenote/pages', 'get'>;
  'GET /me/onenote/pages/{onenotePage-id}': Operation<'/me/onenote/pages/{onenotePage-id}', 'get'>;
  'PATCH /me/onenote/pages/{onenotePage-id}': Operation<
    '/me/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /me/onenote/pages': Operation<'/me/onenote/pages', 'post'>;
}

/**
 * `DELETE /me/onenote/pages/{onenotePage-id}`
 *
 * Delete a OneNote page.
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/pages',
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
 * `GET /me/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/pages/{onenotePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/pages/{onenotePage-id}',
    paramDefs: [{ name: 'onenotePage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/pages']['body'],
  params?: IEndpoints['POST /me/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/pages',
    paramDefs: [],
    params,
    body,
  };
}
