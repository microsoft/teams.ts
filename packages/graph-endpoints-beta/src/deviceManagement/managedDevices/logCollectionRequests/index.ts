export * as createDownloadUrl from './createDownloadUrl';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 * List of log collection requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
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
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 * List of log collection requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
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
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
