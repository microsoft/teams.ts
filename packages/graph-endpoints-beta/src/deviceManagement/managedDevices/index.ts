export * as logCollectionRequests from './logCollectionRequests';
export * as securityBaselineStates from './securityBaselineStates';
export * as windowsProtectionState from './windowsProtectionState';

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
  'POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/changeAssignments': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/changeAssignments',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deprovision': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deprovision',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/disable': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/disable',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/disableLostMode',
    'post'
  >;
  'POST /deviceManagement/managedDevices/downloadAppDiagnostics': Operation<
    '/deviceManagement/managedDevices/downloadAppDiagnostics',
    'post'
  >;
  'POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/deviceManagement/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/enableLostMode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/enableLostMode',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction',
    'post'
  >;
  'POST /deviceManagement/managedDevices/executeAction': Operation<
    '/deviceManagement/managedDevices/executeAction',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'delete'
  >;
  'POST /deviceManagement/managedDevices/moveDevicesToOU': Operation<
    '/deviceManagement/managedDevices/moveDevicesToOU',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/reenable': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/reenable',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/resetPasscode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/resetPasscode',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/retire': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/retire',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/setDeviceName': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/setDeviceName',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/syncDevice',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/users': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/users',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/wipe': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/wipe',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices',
    body,
  };
}

export const activateDeviceEsim = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim`
   *
   * Activate eSIM on the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const assignmentFilterEvaluationStatusDetails = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
};

export const bypassActivationLock = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock`
   *
   * Bypass activation lock
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const changeAssignments = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/changeAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/changeAssignments']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/changeAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/changeAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/changeAssignments',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const cleanWindowsDevice = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice`
   *
   * Clean Windows device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const createDeviceLogCollectionRequest = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const deleteUserFromSharedAppleDevice = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
   *
   * Delete user from shared Apple device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const deprovision = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/deprovision`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deprovision']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deprovision',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const detectedApps = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps`
   *
   * All applications currently installed on the device
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/detectedApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
   *
   * All applications currently installed on the device
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'detectedApp-id'],
      },
      params,
    };
  },
};

export const deviceCategory = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory`
   *
   * Device category
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const deviceCompliancePolicyStates = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   * Device compliance policy states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   * Device compliance policy states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
};

export const deviceConfigurationStates = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   * Device configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   * Device configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
};

export const deviceHealthScriptStates = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const disable = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/disable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/disable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/disable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/disable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const disableLostMode = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/disableLostMode`
   *
   * Disable lost mode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/disableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/disableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const downloadAppDiagnostics = {
  /**
   * `POST /deviceManagement/managedDevices/downloadAppDiagnostics`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/downloadAppDiagnostics']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/downloadAppDiagnostics']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/downloadAppDiagnostics',
      body,
    };
  },
};

export const downloadPowerliftAppDiagnostic = {
  /**
   * `POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/downloadPowerliftAppDiagnostic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/downloadPowerliftAppDiagnostic',
      body,
    };
  },
};

export const enableLostMode = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/enableLostMode`
   *
   * Enable lost mode
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/enableLostMode']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/enableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/enableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/enableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const enrollNowAction = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction`
   *
   * Trigger comanagement enrollment action on ConfigurationManager client
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/enrollNowAction',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const executeAction = {
  /**
   * `POST /deviceManagement/managedDevices/executeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/executeAction']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/executeAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/executeAction',
      body,
    };
  },
};

export const initiateDeviceAttestation = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
   *
   * Perform Device Attestation
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateMobileDeviceManagementKeyRecovery = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
   *
   * Perform MDM key recovery and TPM attestation
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateOnDemandProactiveRemediation = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
   *
   * Perform On Demand Proactive Remediation
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const locateDevice = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice`
   *
   * Locate a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/locateDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/locateDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const logoutSharedAppleDeviceActiveUser = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
   *
   * Logout shared Apple device active user
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const managedDeviceMobileAppConfigurationStates = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
};

export const moveDevicesToOU = {
  /**
   * `POST /deviceManagement/managedDevices/moveDevicesToOU`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/moveDevicesToOU']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/moveDevicesToOU']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/moveDevicesToOU',
      body,
    };
  },
};

export const overrideComplianceState = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/overrideComplianceState',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const pauseConfigurationRefresh = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
   *
   * Initiates a command to pause config refresh for the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const playLostModeSound = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound`
   *
   * Play lost mode sound
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const rebootNow = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow`
   *
   * Reboot device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/rebootNow',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const recoverPasscode = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode`
   *
   * Recover passcode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const reenable = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/reenable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/reenable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/reenable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/reenable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const remoteLock = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/remoteLock`
   *
   * Remote lock
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/remoteLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/remoteLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/remoteLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const removeDeviceFirmwareConfigurationInterfaceManagement = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
   *
   * Remove device from Device Firmware Configuration Interface management
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const requestRemoteAssistance = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance`
   *
   * Request remote assistance
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/requestRemoteAssistance',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const resetPasscode = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/resetPasscode`
   *
   * Reset passcode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/resetPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/resetPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/resetPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const retire = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/retire`
   *
   * Retire a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/retire']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/retire']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const revokeAppleVppLicenses = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
   *
   * Revoke all Apple Vpp licenses for a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateBitLockerKeys = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
   *
   * Rotate BitLockerKeys
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateFileVaultKey = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateFileVaultKey',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateLocalAdminPassword = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword`
   *
   * Initiates a manual rotation for the local admin password on the device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const sendCustomNotificationToCompanyPortal = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const setDeviceName = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/setDeviceName`
   *
   * Set device name of the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/setDeviceName']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/setDeviceName']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/setDeviceName']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/setDeviceName',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const shutDown = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown`
   *
   * Shut down device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/shutDown',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const syncDevice = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/syncDevice`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/syncDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/syncDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const triggerConfigurationManagerAction = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
   *
   * Trigger action on ConfigurationManager client
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const updateWindowsDeviceAccount = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const users = {
  /**
   * `GET /deviceManagement/managedDevices/{managedDevice-id}/users`
   *
   * The primary users associated with the managed device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/users']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/users']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/users',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const windowsDefenderScan = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderScan',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};

export const windowsDefenderUpdateSignatures = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const wipe = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/wipe`
   *
   * Wipe a device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/wipe']['body'],
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/wipe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/wipe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/wipe',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};
