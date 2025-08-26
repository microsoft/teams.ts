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
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices': Operation<'/deviceManagement/comanagedDevices', 'get'>;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}',
    'patch'
  >;
  'POST /deviceManagement/comanagedDevices': Operation<
    '/deviceManagement/comanagedDevices',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices`
 *
 * The list of co-managed devices report
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/comanagedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices',
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
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}`
 *
 * The list of co-managed devices report
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/comanagedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices',
    paramDefs: [],
    params,
    body,
  };
}
