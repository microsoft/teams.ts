export * as logCollectionRequests from './logCollectionRequests';
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
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
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
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode',
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
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
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
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/syncDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/syncDevice',
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
    method: 'post',
    path: '/users/{user-id}/managedDevices',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/disableLostMode',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/recoverPasscode',
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/retire',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
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
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/syncDevice',
      paramDefs: {
        path: ['user-id', 'managedDevice-id'],
      },
      params,
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
