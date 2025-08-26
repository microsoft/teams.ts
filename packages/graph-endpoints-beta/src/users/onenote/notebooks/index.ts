export * as copyNotebook from './copyNotebook';
export * as getNotebookFromWebUrl from './getNotebookFromWebUrl';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/notebooks': Operation<'/users/{user-id}/onenote/notebooks', 'get'>;
  'GET /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/notebooks': Operation<
    '/users/{user-id}/onenote/notebooks',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/notebooks',
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
 * `GET /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/notebooks',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
