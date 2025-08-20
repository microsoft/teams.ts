export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';
export * as sectionGroupsSectionGroups from './sectionGroupsSectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/sectionGroups': Operation<
    '/users/{user-id}/onenote/sectionGroups',
    'get'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/sectionGroups': Operation<
    '/users/{user-id}/onenote/sectionGroups',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/sectionGroups`
 *
 * The section groups in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/sectionGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/sectionGroups',
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
 * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/sectionGroups',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
