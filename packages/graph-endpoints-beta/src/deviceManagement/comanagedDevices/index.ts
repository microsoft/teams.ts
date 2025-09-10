export * as logCollectionRequests from './logCollectionRequests';
export * as securityBaselineStates from './securityBaselineStates';
export * as windowsProtectionState from './windowsProtectionState';

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
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deprovision': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deprovision',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/disable': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/disable',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/downloadAppDiagnostics': Operation<
    '/deviceManagement/comanagedDevices/downloadAppDiagnostics',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/executeAction': Operation<
    '/deviceManagement/comanagedDevices/executeAction',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'delete'
  >;
  'POST /deviceManagement/comanagedDevices/moveDevicesToOU': Operation<
    '/deviceManagement/comanagedDevices/moveDevicesToOU',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/reenable': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/reenable',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/retire': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/retire',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/shutDown': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/users': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/users',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/wipe': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/wipe',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/comanagedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices',
    body,
  };
}

export const activateDeviceEsim = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim`
   *
   * Activate eSIM on the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock`
   *
   * Bypass activation lock
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const changeAssignments = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/changeAssignments',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice`
   *
   * Clean Windows device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/cleanWindowsDevice',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
   *
   * Delete user from shared Apple device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deprovision`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deprovision']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deprovision',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps`
   *
   * All applications currently installed on the device
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
   *
   * All applications currently installed on the device
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
   *
   * Device category
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   * Device compliance policy states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   * Device compliance policy states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   * Device configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   * Device configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/disable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/disable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/disable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/disable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const disableLostMode = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode`
   *
   * Disable lost mode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const downloadAppDiagnostics = {
  /**
   * `POST /deviceManagement/comanagedDevices/downloadAppDiagnostics`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/downloadAppDiagnostics']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/downloadAppDiagnostics']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/downloadAppDiagnostics',
      body,
    };
  },
};

export const downloadPowerliftAppDiagnostic = {
  /**
   * `POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/downloadPowerliftAppDiagnostic',
      body,
    };
  },
};

export const enableLostMode = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode`
   *
   * Enable lost mode
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/enableLostMode',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction`
   *
   * Trigger comanagement enrollment action on ConfigurationManager client
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/enrollNowAction',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const executeAction = {
  /**
   * `POST /deviceManagement/comanagedDevices/executeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/executeAction']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/executeAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/executeAction',
      body,
    };
  },
};

export const initiateDeviceAttestation = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation`
   *
   * Perform Device Attestation
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateMobileDeviceManagementKeyRecovery = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
   *
   * Perform MDM key recovery and TPM attestation
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateOnDemandProactiveRemediation = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
   *
   * Perform On Demand Proactive Remediation
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice`
   *
   * Locate a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/locateDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const logoutSharedAppleDeviceActiveUser = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
   *
   * Logout shared Apple device active user
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const managedDeviceMobileAppConfigurationStates = {
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
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
   * `POST /deviceManagement/comanagedDevices/moveDevicesToOU`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/moveDevicesToOU']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/moveDevicesToOU']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/moveDevicesToOU',
      body,
    };
  },
};

export const overrideComplianceState = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/overrideComplianceState',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh`
   *
   * Initiates a command to pause config refresh for the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/pauseConfigurationRefresh',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound`
   *
   * Play lost mode sound
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/playLostModeSound',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow`
   *
   * Reboot device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const recoverPasscode = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode`
   *
   * Recover passcode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const reenable = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/reenable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/reenable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/reenable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/reenable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const remoteLock = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock`
   *
   * Remote lock
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/remoteLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const removeDeviceFirmwareConfigurationInterfaceManagement = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
   *
   * Remove device from Device Firmware Configuration Interface management
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const requestRemoteAssistance = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance`
   *
   * Request remote assistance
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/requestRemoteAssistance',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const resetPasscode = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode`
   *
   * Reset passcode
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/resetPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const retire = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/retire`
   *
   * Retire a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/retire']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/retire']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const revokeAppleVppLicenses = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses`
   *
   * Revoke all Apple Vpp licenses for a device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/revokeAppleVppLicenses',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateBitLockerKeys = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys`
   *
   * Rotate BitLockerKeys
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateBitLockerKeys',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateFileVaultKey = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateFileVaultKey',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateLocalAdminPassword = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword`
   *
   * Initiates a manual rotation for the local admin password on the device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/rotateLocalAdminPassword',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const sendCustomNotificationToCompanyPortal = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName`
   *
   * Set device name of the device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/setDeviceName',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/shutDown`
   *
   * Shut down device
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/shutDown']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/shutDown']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/shutDown',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const syncDevice = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const triggerConfigurationManagerAction = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
   *
   * Trigger action on ConfigurationManager client
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
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
   * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/users`
   *
   * The primary users associated with the managed device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/users']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/users']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/users',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderScan',
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
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const wipe = {
  /**
   * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/wipe`
   *
   * Wipe a device
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/wipe']['body'],
    params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/wipe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/wipe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagedDevices/{managedDevice-id}/wipe',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};
