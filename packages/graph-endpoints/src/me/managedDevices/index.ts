export * as logCollectionRequests from './logCollectionRequests';
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
  'POST /me/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
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
  'POST /me/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/me/managedDevices/{managedDevice-id}/disableLostMode',
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
  'POST /me/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/me/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/me/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/me/managedDevices/{managedDevice-id}/remoteLock',
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
  'POST /me/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/me/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /me/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/syncDevice',
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
    method: 'post',
    path: '/me/managedDevices',
    body,
  };
}

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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/recoverPasscode',
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/remoteLock',
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/me/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['managedDevice-id'],
      },
      params,
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
