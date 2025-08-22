export * as sourceColumn from './sourceColumn';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/columns': Operation<
    '/groups/{group-id}/sites/{site-id}/columns',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/columns': Operation<
    '/groups/{group-id}/sites/{site-id}/columns',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/columns`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/columns',
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
 * `GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/columns']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/columns']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/columns',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
