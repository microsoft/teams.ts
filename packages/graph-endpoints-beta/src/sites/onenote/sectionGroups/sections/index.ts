export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
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
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
