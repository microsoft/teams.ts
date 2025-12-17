export * as logCollectionRequests from './logCollectionRequests';
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
  'POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
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
  'POST /deviceManagement/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/disableLostMode',
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
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/remoteLock',
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
  'POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/syncDevice',
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
    method: 'post',
    path: '/deviceManagement/managedDevices',
    body,
  };
}

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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/remoteLock',
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
