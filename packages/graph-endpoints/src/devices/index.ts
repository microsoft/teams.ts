export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as extensions from './extensions';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as memberOf from './memberOf';
export * as registeredOwners from './registeredOwners';
export * as registeredUsers from './registeredUsers';
export * as restore from './restore';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /devices/{device-id}': Operation<'/devices/{device-id}', 'delete'>;
  'GET /devices': Operation<'/devices', 'get'>;
  'GET /devices/{device-id}': Operation<'/devices/{device-id}', 'get'>;
  'PATCH /devices/{device-id}': Operation<'/devices/{device-id}', 'patch'>;
  'POST /devices': Operation<'/devices', 'post'>;
}

/**
 * `DELETE /devices/{device-id}`
 *
 * Delete a registered device.
 */
export function del(
  params?: IEndpoints['DELETE /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /devices/{device-id}']['response']> {
  return {
    method: 'delete',
    path: '/devices/{device-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /devices`
 *
 * Retrieve a list of device objects registered in the organization.
 */
export function list(
  params?: IEndpoints['GET /devices']['parameters']
): EndpointRequest<IEndpoints['GET /devices']['response']> {
  return {
    method: 'get',
    path: '/devices',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /devices/{device-id}`
 *
 * Get the properties and relationships of a device object.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /devices/{device-id}`
 *
 * Update the properties of a registered device. Only certain properties of a device can be updated through approved Mobile Device Managment (MDM) apps.
 */
export function update(
  body: IEndpoints['PATCH /devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /devices/{device-id}']['response']> {
  return {
    method: 'patch',
    path: '/devices/{device-id}',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /devices`
 *
 * Create and register a new device in the organization.
 */
export function create(
  body: IEndpoints['POST /devices']['body'],
  params?: IEndpoints['POST /devices']['parameters']
): EndpointRequest<IEndpoints['POST /devices']['response']> {
  return {
    method: 'post',
    path: '/devices',
    paramDefs: [],
    params,
    body,
  };
}
