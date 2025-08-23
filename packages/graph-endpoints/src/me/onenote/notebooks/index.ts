export * as copyNotebook from './copyNotebook';
export * as getNotebookFromWebUrl from './getNotebookFromWebUrl';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks': Operation<'/me/onenote/notebooks', 'get'>;
  'GET /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks': Operation<'/me/onenote/notebooks', 'post'>;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/notebooks`
 *
 * Retrieve a list of notebook objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/notebooks']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/notebooks',
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
 * `GET /me/onenote/notebooks/{notebook-id}`
 *
 * Retrieve the properties and relationships of a notebook object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: [{ name: 'notebook-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks`
 *
 * Create a new OneNote notebook.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/notebooks']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/notebooks',
    paramDefs: [],
    params,
    body,
  };
}
