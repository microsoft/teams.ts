export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';
export * as sectionGroupsSectionGroups from './sectionGroupsSectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    'post'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notebook-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 * Retrieve a list of section groups from the specified notebook.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups',
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
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in the notebook. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notebook-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'notebook-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 * Create a new section group in the specified notebook.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    paramDefs: [{ name: 'notebook-id', in: 'path' }],
    params,
    body,
  };
}
