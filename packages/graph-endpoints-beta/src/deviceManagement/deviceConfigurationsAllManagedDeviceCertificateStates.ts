import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAllDeviceCertificateState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates`
 *
 * Summary of all certificates for all devices.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
 *
 * Summary of all certificates for all devices.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAllDeviceCertificateState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    paramDefs: [{ name: 'managedAllDeviceCertificateState-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    paramDefs: [],
    params,
    body,
  };
}
