export * as createDownloadUrl from './createDownloadUrl';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests',
    'get'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'patch'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests`
 *
 * List of log collection requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests',
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
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 * List of log collection requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
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
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceLogCollectionResponse-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
