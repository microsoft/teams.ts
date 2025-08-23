export * as sourceColumn from './sourceColumn';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/columns': Operation<'/drives/{drive-id}/list/columns', 'get'>;
  'GET /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/columns': Operation<'/drives/{drive-id}/list/columns', 'post'>;
}

/**
 * `DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/columns`
 *
 * The collection of field definitions for this list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/columns']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/columns',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 * The collection of field definitions for this list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/columns`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/columns']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/columns']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/columns',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
