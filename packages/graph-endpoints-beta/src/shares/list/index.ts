export * as activities from './activities';
export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as drive from './drive';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as operations from './operations';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list': Operation<
    '/shares/{sharedDriveItem-id}/list',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list': Operation<'/shares/{sharedDriveItem-id}/list', 'get'>;
  'PATCH /shares/{sharedDriveItem-id}/list': Operation<
    '/shares/{sharedDriveItem-id}/list',
    'patch'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list`
 *
 * Used to access the underlying list
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
