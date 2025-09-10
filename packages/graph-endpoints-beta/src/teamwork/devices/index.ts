import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'delete'
  >;
  'GET /teamwork/devices': Operation<'/teamwork/devices', 'get'>;
  'GET /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'patch'
  >;
  'POST /teamwork/devices': Operation<'/teamwork/devices', 'post'>;
  'GET /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'patch'
  >;
  'DELETE /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'patch'
  >;
  'DELETE /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'patch'
  >;
  'DELETE /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/operations': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations',
    'get'
  >;
  'POST /teamwork/devices/{teamworkDevice-id}/operations': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations',
    'post'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'patch'
  >;
  'DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'delete'
  >;
  'POST /teamwork/devices/{teamworkDevice-id}/restart': Operation<
    '/teamwork/devices/{teamworkDevice-id}/restart',
    'post'
  >;
  'POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics': Operation<
    '/teamwork/devices/{teamworkDevice-id}/runDiagnostics',
    'post'
  >;
  'POST /teamwork/devices/{teamworkDevice-id}/updateSoftware': Operation<
    '/teamwork/devices/{teamworkDevice-id}/updateSoftware',
    'post'
  >;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamworkDevice-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/devices`
 *
 * Get a list of all Microsoft Teams-enabled devices provisioned for a tenant.
 */
export function list(
  params?: IEndpoints['GET /teamwork/devices']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}`
 *
 * Get the properties of a Microsoft Teams-enabled device. For example, you can use this method to get the device type, hardware detail, activity state, and health status information for a device that&#x27;s enabled for Teams.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: {
      path: ['teamworkDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: {
      path: ['teamworkDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/devices`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/devices']['body']
): EndpointRequest<IEndpoints['POST /teamwork/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices',
    body,
  };
}

export const activity = {
  /**
   * `GET /teamwork/devices/{teamworkDevice-id}/activity`
   *
   * Get the activity status of a Microsoft Teams-enabled device.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/activity']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/devices/{teamworkDevice-id}/activity',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/devices/{teamworkDevice-id}/activity`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['body'],
    params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/devices/{teamworkDevice-id}/activity',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/devices/{teamworkDevice-id}/activity`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/activity']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/devices/{teamworkDevice-id}/activity',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
};

export const configuration = {
  /**
   * `GET /teamwork/devices/{teamworkDevice-id}/configuration`
   *
   * Get the configuration details of a Microsoft Teams-enabled device, including software versions, peripheral device configuration (for example, camera, display, microphone, and speaker), hardware configuration, and Microsoft Teams client configuration.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/configuration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/devices/{teamworkDevice-id}/configuration',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/devices/{teamworkDevice-id}/configuration`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['body'],
    params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/devices/{teamworkDevice-id}/configuration',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/devices/{teamworkDevice-id}/configuration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/configuration']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/devices/{teamworkDevice-id}/configuration',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
};

export const health = {
  /**
   * `GET /teamwork/devices/{teamworkDevice-id}/health`
   *
   * Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/health']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/health']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/devices/{teamworkDevice-id}/health',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/devices/{teamworkDevice-id}/health`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['body'],
    params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/devices/{teamworkDevice-id}/health',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/devices/{teamworkDevice-id}/health`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/health']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/health']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/devices/{teamworkDevice-id}/health',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /teamwork/devices/{teamworkDevice-id}/operations`
   *
   * Get a list of the operations that are running on a Microsoft Teams-enabled device.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/devices/{teamworkDevice-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
  /**
   * `POST /teamwork/devices/{teamworkDevice-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['body'],
    params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/devices/{teamworkDevice-id}/operations',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
   *
   * Get the details of an async, long-running operation on a Microsoft Teams-enabled device.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamworkDevice-id', 'teamworkDeviceOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['body'],
    params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
      paramDefs: {
        path: ['teamworkDevice-id', 'teamworkDeviceOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamworkDevice-id', 'teamworkDeviceOperation-id'],
      },
      params,
    };
  },
};

export const restart = {
  /**
   * `POST /teamwork/devices/{teamworkDevice-id}/restart`
   *
   * Restart the specified Microsoft Teams-enabled device asynchronously.  A device is restarted after the async operation completes successfully, which might occur subsequent to a response from this API.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/restart']['parameters']
  ): EndpointRequest<IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/restart']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/devices/{teamworkDevice-id}/restart',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
};

export const runDiagnostics = {
  /**
   * `POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics`
   *
   * Run and generate diagnostic logs for the specified Microsoft Teams-enabled device. This API triggers a long-running operation used to generate logs for a device.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/devices/{teamworkDevice-id}/runDiagnostics',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
    };
  },
};

export const updateSoftware = {
  /**
   * `POST /teamwork/devices/{teamworkDevice-id}/updateSoftware`
   *
   * Update the software for a Microsoft Teams-enabled device. This API triggers a long-running operation.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['body'],
    params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/devices/{teamworkDevice-id}/updateSoftware',
      paramDefs: {
        path: ['teamworkDevice-id'],
      },
      params,
      body,
    };
  },
};
