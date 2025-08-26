export * as bypassActivationLock from './bypassActivationLock';
export * as cleanWindowsDevice from './cleanWindowsDevice';
export * as deleteUserFromSharedAppleDevice from './deleteUserFromSharedAppleDevice';
export * as deviceCategory from './deviceCategory';
export * as deviceCompliancePolicyStates from './deviceCompliancePolicyStates';
export * as deviceConfigurationStates from './deviceConfigurationStates';
export * as disableLostMode from './disableLostMode';
export * as locateDevice from './locateDevice';
export * as logCollectionRequests from './logCollectionRequests';
export * as logoutSharedAppleDeviceActiveUser from './logoutSharedAppleDeviceActiveUser';
export * as rebootNow from './rebootNow';
export * as recoverPasscode from './recoverPasscode';
export * as remoteLock from './remoteLock';
export * as requestRemoteAssistance from './requestRemoteAssistance';
export * as resetPasscode from './resetPasscode';
export * as retire from './retire';
export * as shutDown from './shutDown';
export * as syncDevice from './syncDevice';
export * as updateWindowsDeviceAccount from './updateWindowsDeviceAccount';
export * as users from './users';
export * as windowsDefenderScan from './windowsDefenderScan';
export * as windowsDefenderUpdateSignatures from './windowsDefenderUpdateSignatures';
export * as windowsProtectionState from './windowsProtectionState';
export * as wipe from './wipe';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices': Operation<'/deviceManagement/managedDevices', 'get'>;
  'GET /deviceManagement/managedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices': Operation<'/deviceManagement/managedDevices', 'post'>;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}`
 *
 * Deletes a managedDevice.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices`
 *
 * The list of managed devices.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/managedDevices']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDevices',
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
 * `GET /deviceManagement/managedDevices/{managedDevice-id}`
 *
 * The list of managed devices.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices`
 *
 * Create a new managedDevice object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDevices']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices',
    paramDefs: [],
    params,
    body,
  };
}
