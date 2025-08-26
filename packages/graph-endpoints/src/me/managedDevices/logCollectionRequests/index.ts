export * as createDownloadUrl from './createDownloadUrl';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/me/managedDevices/{managedDevice-id}/logCollectionRequests',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'patch'
  >;
  'POST /me/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/me/managedDevices/{managedDevice-id}/logCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 * List of log collection requests
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 * List of log collection requests
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/logCollectionRequests']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
