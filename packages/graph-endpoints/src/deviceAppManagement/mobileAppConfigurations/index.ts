import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations': Operation<
    '/deviceAppManagement/mobileAppConfigurations',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations': Operation<
    '/deviceAppManagement/mobileAppConfigurations',
    'post'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDeviceMobileAppConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations`
 *
 * The Managed Device Mobile Application Configurations.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppConfigurations']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 * The Managed Device Mobile Application Configurations.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: {
      path: ['managedDeviceMobileAppConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: {
      path: ['managedDeviceMobileAppConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppConfigurations']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileAppConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assign',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments`
   *
   * The list of group assignemenets for app configration.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
   *
   * The list of group assignemenets for app configration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
      paramDefs: {
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
};

export const deviceStatusSummary = {
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
   *
   * App configuration device status summary.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
};

export const deviceStatuses = {
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses`
   *
   * List of ManagedDeviceMobileAppConfigurationDeviceStatus.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   * List of ManagedDeviceMobileAppConfigurationDeviceStatus.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
    };
  },
};

export const userStatusSummary = {
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
   *
   * App configuration user status summary.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
};

export const userStatuses = {
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses`
   *
   * List of ManagedDeviceMobileAppConfigurationUserStatus.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
      paramDefs: {
        path: ['managedDeviceMobileAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   * List of ManagedDeviceMobileAppConfigurationUserStatus.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'managedDeviceMobileAppConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
    };
  },
};
