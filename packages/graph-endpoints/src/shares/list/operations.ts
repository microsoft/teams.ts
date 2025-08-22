import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/operations': Operation<
    '/shares/{sharedDriveItem-id}/list/operations',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/operations': Operation<
    '/shares/{sharedDriveItem-id}/list/operations',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/operations`
 *
 * The collection of long-running operations on the list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/operations',
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
 * `GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
 *
 * The collection of long-running operations on the list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/operations`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/operations',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
