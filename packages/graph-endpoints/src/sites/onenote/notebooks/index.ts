export * as copyNotebook from './copyNotebook';
export * as getNotebookFromWebUrl from './getNotebookFromWebUrl';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/notebooks': Operation<'/sites/{site-id}/onenote/notebooks', 'get'>;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/notebooks': Operation<
    '/sites/{site-id}/onenote/notebooks',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/notebooks']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks',
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
 * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/notebooks']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/notebooks',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
