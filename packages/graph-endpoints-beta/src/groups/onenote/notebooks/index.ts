export * as copyNotebook from './copyNotebook';
export * as getNotebookFromWebUrl from './getNotebookFromWebUrl';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/notebooks': Operation<
    '/groups/{group-id}/onenote/notebooks',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/notebooks': Operation<
    '/groups/{group-id}/onenote/notebooks',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks',
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
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/notebooks',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
