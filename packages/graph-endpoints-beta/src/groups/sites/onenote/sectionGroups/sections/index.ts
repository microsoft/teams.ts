export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
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
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
