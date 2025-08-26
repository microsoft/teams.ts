export * as content from './content';
export * as copyToSection from './copyToSection';
export * as onenotePatchContent from './onenotePatchContent';
export * as parentNotebook from './parentNotebook';
export * as parentSection from './parentSection';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /me/onenote/sections/{onenoteSection-id}/pages': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages',
    'get'
  >;
  'GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /me/onenote/sections/{onenoteSection-id}/pages': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages',
    'post'
  >;
}

/**
 * `DELETE /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sections/{onenoteSection-id}/pages`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}/pages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 * The collection of pages in the section.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/sections/{onenoteSection-id}/pages`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/pages']['body'],
  params?: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/pages']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/sections/{onenoteSection-id}/pages',
    paramDefs: [{ name: 'onenoteSection-id', in: 'path' }],
    params,
    body,
  };
}
