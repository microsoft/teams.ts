import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations',
    'get'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations',
    'post'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    'get'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    'get'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'delete'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
    'get'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
    'post'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['iosLobAppProvisioningConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations`
 *
 * The IOS Lob App Provisioning Configurations.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}`
 *
 * The IOS Lob App Provisioning Configurations.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    paramDefs: {
      path: ['iosLobAppProvisioningConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}',
    paramDefs: {
      path: ['iosLobAppProvisioningConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign',
      paramDefs: {
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments`
   *
   * The associated group assignments for IosLobAppProvisioningConfiguration, this determines which devices/users the IOS LOB app provisioning conifguration will be targeted to.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments',
      paramDefs: {
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}`
   *
   * The associated group assignments for IosLobAppProvisioningConfiguration, this determines which devices/users the IOS LOB app provisioning conifguration will be targeted to.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'iosLobAppProvisioningConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
      paramDefs: {
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'iosLobAppProvisioningConfigurationAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assignments/{iosLobAppProvisioningConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'iosLobAppProvisioningConfigurationAssignment-id',
        ],
      },
      params,
    };
  },
};

export const deviceStatuses = {
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses`
   *
   * The list of device installation states for this mobile app configuration.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
      paramDefs: {
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   * The list of device installation states for this mobile app configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationDeviceStatus-id',
        ],
      },
      params,
    };
  },
};

export const groupAssignments = {
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments`
   *
   * The associated group assignments.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
      paramDefs: {
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
   *
   * The associated group assignments.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'mobileAppProvisioningConfigGroupAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
      paramDefs: {
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'mobileAppProvisioningConfigGroupAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'mobileAppProvisioningConfigGroupAssignment-id',
        ],
      },
      params,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks',
      body,
    };
  },
};

export const userStatuses = {
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses`
   *
   * The list of user installation states for this mobile app configuration.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
      paramDefs: {
        path: ['iosLobAppProvisioningConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   * The list of user installation states for this mobile app configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'iosLobAppProvisioningConfiguration-id',
          'managedDeviceMobileAppConfigurationUserStatus-id',
        ],
      },
      params,
    };
  },
};
