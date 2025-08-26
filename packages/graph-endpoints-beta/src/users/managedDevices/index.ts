export * as activateDeviceEsim from './activateDeviceEsim';
export * as assignmentFilterEvaluationStatusDetails from './assignmentFilterEvaluationStatusDetails';
export * as bypassActivationLock from './bypassActivationLock';
export * as changeAssignments from './changeAssignments';
export * as cleanWindowsDevice from './cleanWindowsDevice';
export * as createDeviceLogCollectionRequest from './createDeviceLogCollectionRequest';
export * as deleteUserFromSharedAppleDevice from './deleteUserFromSharedAppleDevice';
export * as deprovision from './deprovision';
export * as detectedApps from './detectedApps';
export * as deviceCategory from './deviceCategory';
export * as deviceCompliancePolicyStates from './deviceCompliancePolicyStates';
export * as deviceConfigurationStates from './deviceConfigurationStates';
export * as deviceHealthScriptStates from './deviceHealthScriptStates';
export * as disable from './disable';
export * as disableLostMode from './disableLostMode';
export * as downloadAppDiagnostics from './downloadAppDiagnostics';
export * as downloadPowerliftAppDiagnostic from './downloadPowerliftAppDiagnostic';
export * as enableLostMode from './enableLostMode';
export * as enrollNowAction from './enrollNowAction';
export * as executeAction from './executeAction';
export * as initiateDeviceAttestation from './initiateDeviceAttestation';
export * as initiateMobileDeviceManagementKeyRecovery from './initiateMobileDeviceManagementKeyRecovery';
export * as initiateOnDemandProactiveRemediation from './initiateOnDemandProactiveRemediation';
export * as locateDevice from './locateDevice';
export * as logCollectionRequests from './logCollectionRequests';
export * as logoutSharedAppleDeviceActiveUser from './logoutSharedAppleDeviceActiveUser';
export * as managedDeviceMobileAppConfigurationStates from './managedDeviceMobileAppConfigurationStates';
export * as moveDevicesToOU from './moveDevicesToOU';
export * as overrideComplianceState from './overrideComplianceState';
export * as pauseConfigurationRefresh from './pauseConfigurationRefresh';
export * as playLostModeSound from './playLostModeSound';
export * as rebootNow from './rebootNow';
export * as recoverPasscode from './recoverPasscode';
export * as reenable from './reenable';
export * as remoteLock from './remoteLock';
export * as removeDeviceFirmwareConfigurationInterfaceManagement from './removeDeviceFirmwareConfigurationInterfaceManagement';
export * as requestRemoteAssistance from './requestRemoteAssistance';
export * as resetPasscode from './resetPasscode';
export * as retire from './retire';
export * as revokeAppleVppLicenses from './revokeAppleVppLicenses';
export * as rotateBitLockerKeys from './rotateBitLockerKeys';
export * as rotateFileVaultKey from './rotateFileVaultKey';
export * as rotateLocalAdminPassword from './rotateLocalAdminPassword';
export * as securityBaselineStates from './securityBaselineStates';
export * as sendCustomNotificationToCompanyPortal from './sendCustomNotificationToCompanyPortal';
export * as setDeviceName from './setDeviceName';
export * as shutDown from './shutDown';
export * as syncDevice from './syncDevice';
export * as triggerConfigurationManagerAction from './triggerConfigurationManagerAction';
export * as updateWindowsDeviceAccount from './updateWindowsDeviceAccount';
export * as users from './users';
export * as windowsDefenderScan from './windowsDefenderScan';
export * as windowsDefenderUpdateSignatures from './windowsDefenderUpdateSignatures';
export * as windowsProtectionState from './windowsProtectionState';
export * as wipe from './wipe';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices': Operation<'/users/{user-id}/managedDevices', 'get'>;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices': Operation<'/users/{user-id}/managedDevices', 'post'>;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices`
 *
 * The managed devices associated with the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}`
 *
 * The managed devices associated with the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
