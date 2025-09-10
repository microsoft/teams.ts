import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations': Operation<
    '/deviceManagement/hardwareConfigurations',
    'get'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwareConfigurations': Operation<
    '/deviceManagement/hardwareConfigurations',
    'post'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    'get'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    'post'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'patch'
  >;
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
    'get'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
    'post'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hardwareConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations`
 *
 * BIOS configuration and other settings provides customers the ability to configure hardware/bios settings on the enrolled Windows 10/11 Entra ID joined devices by uploading a configuration file generated with their OEM tool (e.g. Dell Command tool). A BIOS configuration policy can be assigned to multiple devices, allowing admins to remotely control a device&#x27;s hardware properties (e.g. enable Secure Boot) from the Intune Portal. Supported for Dell only at this time.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/hardwareConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}`
 *
 * BIOS configuration and other settings provides customers the ability to configure hardware/bios settings on the enrolled Windows 10/11 Entra ID joined devices by uploading a configuration file generated with their OEM tool (e.g. Dell Command tool). A BIOS configuration policy can be assigned to multiple devices, allowing admins to remotely control a device&#x27;s hardware properties (e.g. enable Secure Boot) from the Intune Portal. Supported for Dell only at this time.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    paramDefs: {
      path: ['hardwareConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}',
    paramDefs: {
      path: ['hardwareConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwareConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwareConfigurations']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/hardwareConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwareConfigurations',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assign',
      paramDefs: {
        path: ['hardwareConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments`
   *
   * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['hardwareConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments',
      paramDefs: {
        path: ['hardwareConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
   *
   * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
      paramDefs: {
        path: ['hardwareConfiguration-id', 'hardwareConfigurationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/assignments/{hardwareConfigurationAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationAssignment-id'],
      },
      params,
    };
  },
};

export const deviceRunStates = {
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates`
   *
   * List of run states for the hardware configuration across all devices. Read-Only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['hardwareConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['body'],
    params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
      paramDefs: {
        path: ['hardwareConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
   *
   * List of run states for the hardware configuration across all devices. Read-Only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationDeviceState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
      paramDefs: {
        path: ['hardwareConfiguration-id', 'hardwareConfigurationDeviceState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationDeviceState-id'],
      },
      params,
    };
  },
};

export const runSummary = {
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
   *
   * A summary of the results from an attempt to configure hardware settings. Read-Only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwareConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
      paramDefs: {
        path: ['hardwareConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/runSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwareConfiguration-id'],
      },
      params,
    };
  },
};

export const userRunStates = {
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates`
   *
   * List of run states for the hardware configuration across all users. Read-Only.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['hardwareConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['body'],
    params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
      paramDefs: {
        path: ['hardwareConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
   *
   * List of run states for the hardware configuration across all users. Read-Only.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationUserState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
      paramDefs: {
        path: ['hardwareConfiguration-id', 'hardwareConfigurationUserState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwareConfiguration-id', 'hardwareConfigurationUserState-id'],
      },
      params,
    };
  },
};
