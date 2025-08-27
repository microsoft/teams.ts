export * as driveItem from './driveItem';
export * as listItem from './listItem';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
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
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
