export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /me/onenote/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
}

/**
 * `DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 * Retrieve a list of onenoteSection objects from the specified section group.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/sectionGroups/{sectionGroup-id}/sections`
 *
 * Create a new onenoteSection in the specified section group.
 */
export function create(
  body: IEndpoints['POST /me/onenote/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /me/onenote/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'post',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: [{ name: 'sectionGroup-id', in: 'path' }],
    params,
    body,
  };
}
