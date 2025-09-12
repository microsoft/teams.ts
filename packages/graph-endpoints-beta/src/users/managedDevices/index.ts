export * as logCollectionRequests from './logCollectionRequests';
export * as securityBaselineStates from './securityBaselineStates';
export * as windowsProtectionState from './windowsProtectionState';

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
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deprovision': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deprovision',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/disable': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/disable',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/downloadAppDiagnostics': Operation<
    '/users/{user-id}/managedDevices/downloadAppDiagnostics',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/executeAction': Operation<
    '/users/{user-id}/managedDevices/executeAction',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/locateDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'delete'
  >;
  'POST /users/{user-id}/managedDevices/moveDevicesToOU': Operation<
    '/users/{user-id}/managedDevices/moveDevicesToOU',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/reenable': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/reenable',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/retire': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/retire',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/syncDevice',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/users': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/users',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/wipe',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'managedDevice-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const activateDeviceEsim = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim`
   *
   * Activate eSIM on the device.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const assignmentFilterEvaluationStatusDetails = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
};

export const bypassActivationLock = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock`
   *
   * Bypass activation lock
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const changeAssignments = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/changeAssignments',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const cleanWindowsDevice = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice`
   *
   * Clean Windows device
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const createDeviceLogCollectionRequest = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const deleteUserFromSharedAppleDevice = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
   *
   * Delete user from shared Apple device
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const deprovision = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deprovision`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deprovision']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deprovision',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const detectedApps = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps`
   *
   * All applications currently installed on the device
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
   *
   * All applications currently installed on the device
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'detectedApp-id'],
      },
      params,
    };
  },
};

export const deviceCategory = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
   *
   * Device category
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const deviceCompliancePolicyStates = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   * Device compliance policy states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   * Device compliance policy states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
};

export const deviceConfigurationStates = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   * Device configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   * Device configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
};

export const deviceHealthScriptStates = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const disable = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/disable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/disable',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const disableLostMode = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode`
   *
   * Disable lost mode
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const downloadAppDiagnostics = {
  /**
   * `POST /users/{user-id}/managedDevices/downloadAppDiagnostics`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/downloadAppDiagnostics']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/downloadAppDiagnostics',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const downloadPowerliftAppDiagnostic = {
  /**
   * `POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/downloadPowerliftAppDiagnostic',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const enableLostMode = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode`
   *
   * Enable lost mode
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/enableLostMode',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const enrollNowAction = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction`
   *
   * Trigger comanagement enrollment action on ConfigurationManager client
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/enrollNowAction',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const executeAction = {
  /**
   * `POST /users/{user-id}/managedDevices/executeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/managedDevices/executeAction']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/executeAction',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const initiateDeviceAttestation = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
   *
   * Perform Device Attestation
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateMobileDeviceManagementKeyRecovery = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
   *
   * Perform MDM key recovery and TPM attestation
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateOnDemandProactiveRemediation = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
   *
   * Perform On Demand Proactive Remediation
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const locateDevice = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/locateDevice`
   *
   * Locate a device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/locateDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/locateDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/locateDevice',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const logoutSharedAppleDeviceActiveUser = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
   *
   * Logout shared Apple device active user
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const managedDeviceMobileAppConfigurationStates = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
};

export const moveDevicesToOU = {
  /**
   * `POST /users/{user-id}/managedDevices/moveDevicesToOU`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/moveDevicesToOU']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/moveDevicesToOU',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const overrideComplianceState = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/overrideComplianceState',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const pauseConfigurationRefresh = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
   *
   * Initiates a command to pause config refresh for the device.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const playLostModeSound = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound`
   *
   * Play lost mode sound
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const rebootNow = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow`
   *
   * Reboot device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/rebootNow',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const recoverPasscode = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode`
   *
   * Recover passcode
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const reenable = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/reenable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/reenable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/reenable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/reenable',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const remoteLock = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock`
   *
   * Remote lock
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const removeDeviceFirmwareConfigurationInterfaceManagement = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
   *
   * Remove device from Device Firmware Configuration Interface management
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const requestRemoteAssistance = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance`
   *
   * Request remote assistance
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/requestRemoteAssistance',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const resetPasscode = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode`
   *
   * Reset passcode
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/resetPasscode',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const retire = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/retire`
   *
   * Retire a device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/retire']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/retire']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const revokeAppleVppLicenses = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
   *
   * Revoke all Apple Vpp licenses for a device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateBitLockerKeys = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
   *
   * Rotate BitLockerKeys
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateFileVaultKey = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateLocalAdminPassword = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword`
   *
   * Initiates a manual rotation for the local admin password on the device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const sendCustomNotificationToCompanyPortal = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const setDeviceName = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName`
   *
   * Set device name of the device.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/setDeviceName',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const shutDown = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown`
   *
   * Shut down device
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/shutDown',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const syncDevice = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const triggerConfigurationManagerAction = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
   *
   * Trigger action on ConfigurationManager client
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const updateWindowsDeviceAccount = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const users = {
  /**
   * `GET /users/{user-id}/managedDevices/{managedDevice-id}/users`
   *
   * The primary users associated with the managed device.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/users']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/users']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/users',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const windowsDefenderScan = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderScan',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const windowsDefenderUpdateSignatures = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
    };
  },
};

export const wipe = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe`
   *
   * Wipe a device
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/wipe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/wipe',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
      body,
    };
  },
};
