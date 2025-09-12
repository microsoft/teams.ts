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
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 * Deletes a androidWorkProfileGeneralDeviceConfiguration.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
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
 * List properties and relationships of the appleDeviceFeaturesConfigurationBase objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceConfigurations']['response']> {
  return {
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
 * Read properties and relationships of the windowsPhone81CustomConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
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
 * Update the properties of a sharedPCConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
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
 * Create a new windows10TeamGeneralConfiguration object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceConfigurations']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign`
   *
   * Not yet documented
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assign']['response']
  > {
    return {
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

export const assignments = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments`
   *
   * List properties and relationships of the deviceConfigurationAssignment objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['response']
  > {
    return {
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
   * Create a new deviceConfigurationAssignment object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments']['response']
  > {
    return {
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
   * Read properties and relationships of the deviceConfigurationAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
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
   * Update the properties of a deviceConfigurationAssignment object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
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
   * Deletes a deviceConfigurationAssignment.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/assignments/{deviceConfigurationAssignment-id}']['response']
  > {
    return {
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
   * List properties and relationships of the settingStateDeviceSummary objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
  > {
    return {
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
   * Create a new settingStateDeviceSummary object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
  > {
    return {
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
   * Read properties and relationships of the settingStateDeviceSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
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
   * Update the properties of a settingStateDeviceSummary object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
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
   * Deletes a settingStateDeviceSummary.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
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
   * Read properties and relationships of the deviceConfigurationDeviceOverview object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
  > {
    return {
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
   * Update the properties of a deviceConfigurationDeviceOverview object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
  > {
    return {
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
   * List properties and relationships of the deviceConfigurationDeviceStatus objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['response']
  > {
    return {
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
   * Create a new deviceConfigurationDeviceStatus object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses']['response']
  > {
    return {
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
   * Read properties and relationships of the deviceConfigurationDeviceStatus object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
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
   * Update the properties of a deviceConfigurationDeviceStatus object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
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
   * Deletes a deviceConfigurationDeviceStatus.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatuses/{deviceConfigurationDeviceStatus-id}']['response']
  > {
    return {
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

export const userStatusOverview = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
   *
   * Read properties and relationships of the deviceConfigurationUserOverview object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
  > {
    return {
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
   * Update the properties of a deviceConfigurationUserOverview object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
  > {
    return {
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
   * List properties and relationships of the deviceConfigurationUserStatus objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
  > {
    return {
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
   * Create a new deviceConfigurationUserStatus object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
  > {
    return {
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
   * Read properties and relationships of the deviceConfigurationUserStatus object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
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
   * Update the properties of a deviceConfigurationUserStatus object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
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
   * Deletes a deviceConfigurationUserStatus.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
  > {
    return {
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
