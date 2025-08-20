export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';
export * as sectionGroupsSectionGroups from './sectionGroupsSectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/sectionGroups': Operation<
    '/sites/{site-id}/onenote/sectionGroups',
    'get'
  >;
  'GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/sectionGroups': Operation<
    '/sites/{site-id}/onenote/sectionGroups',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/sectionGroups`
 *
 * The section groups in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/sectionGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/sectionGroups',
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
 * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/sectionGroups']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/sectionGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/sectionGroups',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
