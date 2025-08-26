import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceEncryptionStates': Operation<
    '/deviceManagement/managedDeviceEncryptionStates',
    'get'
  >;
  'GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDeviceEncryptionStates': Operation<
    '/deviceManagement/managedDeviceEncryptionStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceEncryptionState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDeviceEncryptionStates`
 *
 * Encryption report for devices in this account
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceEncryptionStates',
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
 * `GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
 *
 * Encryption report for devices in this account
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceEncryptionState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    paramDefs: [{ name: 'managedDeviceEncryptionState-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDeviceEncryptionStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDeviceEncryptionStates']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDeviceEncryptionStates']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDeviceEncryptionStates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDeviceEncryptionStates',
    paramDefs: [],
    params,
    body,
  };
}
