export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sections': Operation<
    '/me/onenote/notebooks/{notebook-id}/sections',
    'post'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sections`
 *
 * Retrieve a list of section objects from the specified notebook.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sections',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}`
 *
 * The sections in the notebook. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sections`
 *
 * Create a new section in the specified notebook.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sections',
    paramDefs: [{ name: 'notebook-id', in: 'path' }],
    params,
    body,
  };
}
