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
  'DELETE /me/managedDevices/{managedDevice-id}': Operation<
    '/me/managedDevices/{managedDevice-id}',
    'delete'
  >;
  'GET /me/managedDevices': Operation<'/me/managedDevices', 'get'>;
  'GET /me/managedDevices/{managedDevice-id}': Operation<
    '/me/managedDevices/{managedDevice-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}': Operation<
    '/me/managedDevices/{managedDevice-id}',
    'patch'
  >;
  'POST /me/managedDevices': Operation<'/me/managedDevices', 'post'>;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/managedDevices/{managedDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices`
 *
 * The managed devices associated with the user.
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /me/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices',
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
 * `GET /me/managedDevices/{managedDevice-id}`
 *
 * The managed devices associated with the user.
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/managedDevices/{managedDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/managedDevices/{managedDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices']['body'],
  params?: IEndpoints['POST /me/managedDevices']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices',
    paramDefs: [],
    params,
    body,
  };
}
