export * as sourceColumn from './sourceColumn';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/columns': Operation<
    '/shares/{sharedDriveItem-id}/list/columns',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/columns': Operation<
    '/shares/{sharedDriveItem-id}/list/columns',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/columns`
 *
 * The collection of field definitions for this list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/columns',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}`
 *
 * The collection of field definitions for this list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/columns`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/columns']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/columns']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/columns']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/columns',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
