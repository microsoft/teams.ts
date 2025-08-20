export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';
export * as sectionGroupsSectionGroups from './sectionGroupsSectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /me/onenote/sectionGroups': Operation<'/me/onenote/sectionGroups', 'get'>;
  'GET /me/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /me/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /me/onenote/sectionGroups': Operation<'/me/onenote/sectionGroups', 'post'>;
}

/**
 * `DELETE /me/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/sectionGroups/{sectionGroup-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sectionGroups`
 *
 * Retrieve a list of sectionGroup objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sectionGroups']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}`
 *
 * Retrieve the properties and relationships of a sectionGroup object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/sectionGroups/{sectionGroup-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: [{ name: 'sectionGroup-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/sectionGroups']['body'],
  params?: IEndpoints['POST /me/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/sectionGroups']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/sectionGroups',
    paramDefs: [],
    params,
    body,
  };
}
