export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';
export * as sectionGroupsSectionGroups from './sectionGroupsSectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups': Operation<
    '/groups/{group-id}/onenote/sectionGroups',
    'get'
  >;
  'GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/sectionGroups': Operation<
    '/groups/{group-id}/onenote/sectionGroups',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/sectionGroups`
 *
 * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/sectionGroups']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/onenote/sectionGroups',
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
 * `GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/sectionGroups']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/onenote/sectionGroups',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
