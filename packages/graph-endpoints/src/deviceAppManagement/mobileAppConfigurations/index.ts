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
 * Deletes a iosMobileAppConfiguration.
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
 * List properties and relationships of the managedDeviceMobileAppConfiguration objects.
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
 * Read properties and relationships of the managedDeviceMobileAppConfiguration object.
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
 * Update the properties of a iosMobileAppConfiguration object.
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
 * Create a new iosMobileAppConfiguration object.
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
   * Not yet documented
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
   * List properties and relationships of the managedDeviceMobileAppConfigurationAssignment objects.
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
   * Create a new managedDeviceMobileAppConfigurationAssignment object.
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
   * Read properties and relationships of the managedDeviceMobileAppConfigurationAssignment object.
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
   * Update the properties of a managedDeviceMobileAppConfigurationAssignment object.
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
   * Deletes a managedDeviceMobileAppConfigurationAssignment.
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
   * Read properties and relationships of the managedDeviceMobileAppConfigurationDeviceSummary object.
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
   * Update the properties of a managedDeviceMobileAppConfigurationDeviceSummary object.
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
   * List properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus objects.
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
   * Create a new managedDeviceMobileAppConfigurationDeviceStatus object.
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
   * Read properties and relationships of the managedDeviceMobileAppConfigurationDeviceStatus object.
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
   * Update the properties of a managedDeviceMobileAppConfigurationDeviceStatus object.
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
   * Deletes a managedDeviceMobileAppConfigurationDeviceStatus.
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
   * Read properties and relationships of the managedDeviceMobileAppConfigurationUserSummary object.
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
   * Update the properties of a managedDeviceMobileAppConfigurationUserSummary object.
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
   * List properties and relationships of the managedDeviceMobileAppConfigurationUserStatus objects.
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
   * Create a new managedDeviceMobileAppConfigurationUserStatus object.
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
   * Read properties and relationships of the managedDeviceMobileAppConfigurationUserStatus object.
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
   * Update the properties of a managedDeviceMobileAppConfigurationUserStatus object.
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
   * Deletes a managedDeviceMobileAppConfigurationUserStatus.
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
