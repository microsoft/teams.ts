export * as groupAssignments from './groupAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations': Operation<
    '/deviceManagement/deviceConfigurations',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurations': Operation<
    '/deviceManagement/deviceConfigurations',
    'post'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign',
    'post'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices': Operation<
    '/deviceManagement/deviceConfigurations/getTargetedUsersAndDevices',
    'post'
  >;
  'POST /deviceManagement/deviceConfigurations/hasPayloadLinks': Operation<
    '/deviceManagement/deviceConfigurations/hasPayloadLinks',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations`
 *
 * The device configurations.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 * The device configurations.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: {
      path: ['deviceConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: {
      path: ['deviceConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignedAccessMultiModeProfiles = {
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignedAccessMultiModeProfiles',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments`
   *
   * The list of assignments for the device configuration profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}`
   *
   * The list of assignments for the device configuration profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id', 'deviceConfigurationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
      paramDefs: {
        path: ['deviceConfiguration-id', 'deviceConfigurationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id', 'deviceConfigurationAssignment-id'],
      },
      params,
    };
  },
};

export const deviceSettingStateSummaries = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries`
   *
   * Device Configuration Setting State Device Summary
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   * Device Configuration Setting State Device Summary
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id', 'settingStateDeviceSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        path: ['deviceConfiguration-id', 'settingStateDeviceSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id', 'settingStateDeviceSummary-id'],
      },
      params,
    };
  },
};

export const deviceStatusOverview = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
   *
   * Device Configuration devices status overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
};

export const deviceStatuses = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses`
   *
   * Device configuration installation status by device.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}`
   *
   * Device configuration installation status by device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id', 'deviceConfigurationDeviceStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
      paramDefs: {
        path: ['deviceConfiguration-id', 'deviceConfigurationDeviceStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id', 'deviceConfigurationDeviceStatus-id'],
      },
      params,
    };
  },
};

export const getTargetedUsersAndDevices = {
  /**
   * `POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/getTargetedUsersAndDevices',
      body,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /deviceManagement/deviceConfigurations/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/hasPayloadLinks',
      body,
    };
  },
};

export const userStatusOverview = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
   *
   * Device Configuration users status overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
};

export const userStatuses = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses`
   *
   * Device configuration installation status by user.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
   *
   * Device configuration installation status by user.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id', 'deviceConfigurationUserStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
      paramDefs: {
        path: ['deviceConfiguration-id', 'deviceConfigurationUserStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfiguration-id', 'deviceConfigurationUserStatus-id'],
      },
      params,
    };
  },
};

export const windowsPrivacyAccessControls = {
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/windowsPrivacyAccessControls',
      paramDefs: {
        path: ['deviceConfiguration-id'],
      },
      params,
      body,
    };
  },
};
