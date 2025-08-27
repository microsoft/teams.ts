export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets`
 *
 * Collection of all sets available in the term store.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}`
 *
 * Collection of all sets available in the term store.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
