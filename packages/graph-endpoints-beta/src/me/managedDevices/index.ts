export * as logCollectionRequests from './logCollectionRequests';
export * as securityBaselineStates from './securityBaselineStates';
export * as windowsProtectionState from './windowsProtectionState';

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
  'POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/me/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails': Operation<
    '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
    'delete'
  >;
  'POST /me/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/changeAssignments': Operation<
    '/me/managedDevices/{managedDevice-id}/changeAssignments',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest': Operation<
    '/me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deprovision': Operation<
    '/me/managedDevices/{managedDevice-id}/deprovision',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/detectedApps': Operation<
    '/me/managedDevices/{managedDevice-id}/detectedApps',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/deviceCategory': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCategory',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/disable': Operation<
    '/me/managedDevices/{managedDevice-id}/disable',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/me/managedDevices/{managedDevice-id}/disableLostMode',
    'post'
  >;
  'POST /me/managedDevices/downloadAppDiagnostics': Operation<
    '/me/managedDevices/downloadAppDiagnostics',
    'post'
  >;
  'POST /me/managedDevices/downloadPowerliftAppDiagnostic': Operation<
    '/me/managedDevices/downloadPowerliftAppDiagnostic',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/enableLostMode': Operation<
    '/me/managedDevices/{managedDevice-id}/enableLostMode',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/enrollNowAction': Operation<
    '/me/managedDevices/{managedDevice-id}/enrollNowAction',
    'post'
  >;
  'POST /me/managedDevices/executeAction': Operation<'/me/managedDevices/executeAction', 'post'>;
  'POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/locateDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'patch'
  >;
  'DELETE /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'delete'
  >;
  'POST /me/managedDevices/moveDevicesToOU': Operation<
    '/me/managedDevices/moveDevicesToOU',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/overrideComplianceState': Operation<
    '/me/managedDevices/{managedDevice-id}/overrideComplianceState',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh': Operation<
    '/me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/me/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/me/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/me/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/reenable': Operation<
    '/me/managedDevices/{managedDevice-id}/reenable',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/me/managedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance': Operation<
    '/me/managedDevices/{managedDevice-id}/requestRemoteAssistance',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/resetPasscode': Operation<
    '/me/managedDevices/{managedDevice-id}/resetPasscode',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/retire': Operation<
    '/me/managedDevices/{managedDevice-id}/retire',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/me/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/me/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword': Operation<
    '/me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal': Operation<
    '/me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/setDeviceName': Operation<
    '/me/managedDevices/{managedDevice-id}/setDeviceName',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/me/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/syncDevice',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction': Operation<
    '/me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
  'GET /me/managedDevices/{managedDevice-id}/users': Operation<
    '/me/managedDevices/{managedDevice-id}/users',
    'get'
  >;
  'POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsDefenderScan',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures': Operation<
    '/me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/wipe': Operation<
    '/me/managedDevices/{managedDevice-id}/wipe',
    'post'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices']['body']
): EndpointRequest<IEndpoints['POST /me/managedDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices',
    body,
  };
}

export const activateDeviceEsim = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim`
   *
   * Activate eSIM on the device.
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/activateDeviceEsim',
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
   * `GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
      paramDefs: {
        path: ['managedDevice-id', 'assignmentFilterEvaluationStatusDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}',
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
   * `POST /me/managedDevices/{managedDevice-id}/bypassActivationLock`
   *
   * Bypass activation lock
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const changeAssignments = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/changeAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/changeAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/changeAssignments',
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
   * `POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice`
   *
   * Clean Windows device
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/cleanWindowsDevice',
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
   * `POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/createDeviceLogCollectionRequest',
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
   * `POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
   *
   * Delete user from shared Apple device
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
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
   * `POST /me/managedDevices/{managedDevice-id}/deprovision`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/deprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/deprovision',
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
   * `GET /me/managedDevices/{managedDevice-id}/detectedApps`
   *
   * All applications currently installed on the device
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/detectedApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}`
   *
   * All applications currently installed on the device
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}',
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
   * `GET /me/managedDevices/{managedDevice-id}/deviceCategory`
   *
   * Device category
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/deviceCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/deviceCategory',
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
   * `GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   * Device compliance policy states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   * Device compliance policy states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceCompliancePolicyState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
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
   * `GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   * Device configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   * Device configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'deviceConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
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
   * `GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
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
   * `POST /me/managedDevices/{managedDevice-id}/disable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disable']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/disable']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/disable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const disableLostMode = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/disableLostMode`
   *
   * Disable lost mode
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/disableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const downloadAppDiagnostics = {
  /**
   * `POST /me/managedDevices/downloadAppDiagnostics`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/downloadAppDiagnostics']['body']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/downloadAppDiagnostics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/downloadAppDiagnostics',
      body,
    };
  },
};

export const downloadPowerliftAppDiagnostic = {
  /**
   * `POST /me/managedDevices/downloadPowerliftAppDiagnostic`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/downloadPowerliftAppDiagnostic']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/downloadPowerliftAppDiagnostic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/downloadPowerliftAppDiagnostic',
      body,
    };
  },
};

export const enableLostMode = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/enableLostMode`
   *
   * Enable lost mode
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/enableLostMode',
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
   * `POST /me/managedDevices/{managedDevice-id}/enrollNowAction`
   *
   * Trigger comanagement enrollment action on ConfigurationManager client
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enrollNowAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/enrollNowAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/enrollNowAction',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const executeAction = {
  /**
   * `POST /me/managedDevices/executeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/executeAction']['body']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/executeAction']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/executeAction',
      body,
    };
  },
};

export const initiateDeviceAttestation = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
   *
   * Perform Device Attestation
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateMobileDeviceManagementKeyRecovery = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
   *
   * Perform MDM key recovery and TPM attestation
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const initiateOnDemandProactiveRemediation = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation`
   *
   * Perform On Demand Proactive Remediation
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/initiateOnDemandProactiveRemediation',
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
   * `POST /me/managedDevices/{managedDevice-id}/locateDevice`
   *
   * Locate a device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/locateDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/locateDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/locateDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const logoutSharedAppleDeviceActiveUser = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
   *
   * Logout shared Apple device active user
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const managedDeviceMobileAppConfigurationStates = {
  /**
   * `GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   * Managed device mobile app configuration states for this device.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   * Managed device mobile app configuration states for this device.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['body'],
    params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
      paramDefs: {
        path: ['managedDevice-id', 'managedDeviceMobileAppConfigurationState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
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
   * `POST /me/managedDevices/moveDevicesToOU`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/moveDevicesToOU']['body']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/moveDevicesToOU']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/moveDevicesToOU',
      body,
    };
  },
};

export const overrideComplianceState = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/overrideComplianceState`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/overrideComplianceState']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/overrideComplianceState',
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
   * `POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh`
   *
   * Initiates a command to pause config refresh for the device.
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/pauseConfigurationRefresh',
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
   * `POST /me/managedDevices/{managedDevice-id}/playLostModeSound`
   *
   * Play lost mode sound
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/playLostModeSound',
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
   * `POST /me/managedDevices/{managedDevice-id}/rebootNow`
   *
   * Reboot device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rebootNow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/rebootNow']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/rebootNow',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const recoverPasscode = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/recoverPasscode`
   *
   * Recover passcode
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/recoverPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/recoverPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/recoverPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const reenable = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/reenable`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/reenable']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/reenable']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/reenable',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const remoteLock = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/remoteLock`
   *
   * Remote lock
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/remoteLock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/remoteLock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/remoteLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const removeDeviceFirmwareConfigurationInterfaceManagement = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
   *
   * Remove device from Device Firmware Configuration Interface management
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const requestRemoteAssistance = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance`
   *
   * Request remote assistance
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/requestRemoteAssistance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/requestRemoteAssistance',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const resetPasscode = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/resetPasscode`
   *
   * Reset passcode
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/resetPasscode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/resetPasscode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/resetPasscode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const retire = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/retire`
   *
   * Retire a device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/retire']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/retire']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const revokeAppleVppLicenses = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
   *
   * Revoke all Apple Vpp licenses for a device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateBitLockerKeys = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
   *
   * Rotate BitLockerKeys
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateFileVaultKey = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/rotateFileVaultKey`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/rotateFileVaultKey',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const rotateLocalAdminPassword = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword`
   *
   * Initiates a manual rotation for the local admin password on the device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/rotateLocalAdminPassword',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const sendCustomNotificationToCompanyPortal = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/sendCustomNotificationToCompanyPortal',
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
   * `POST /me/managedDevices/{managedDevice-id}/setDeviceName`
   *
   * Set device name of the device.
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/setDeviceName',
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
   * `POST /me/managedDevices/{managedDevice-id}/shutDown`
   *
   * Shut down device
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/shutDown']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/shutDown']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/shutDown',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const syncDevice = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/syncDevice`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/syncDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/syncDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const triggerConfigurationManagerAction = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction`
   *
   * Trigger action on ConfigurationManager client
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/triggerConfigurationManagerAction',
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
   * `POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
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
   * `GET /me/managedDevices/{managedDevice-id}/users`
   *
   * The primary users associated with the managed device.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/users']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/managedDevices/{managedDevice-id}/users']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedDevices/{managedDevice-id}/users',
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
   * `POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderScan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/windowsDefenderScan',
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
   * `POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/windowsDefenderUpdateSignatures',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
    };
  },
};

export const wipe = {
  /**
   * `POST /me/managedDevices/{managedDevice-id}/wipe`
   *
   * Wipe a device
   */
  create: function create(
    body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['body'],
    params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/wipe',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
      body,
    };
  },
};
