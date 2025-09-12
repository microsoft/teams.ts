import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'delete'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools',
    'get'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    'patch'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools',
    'post'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign',
    'post'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    'get'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    'post'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['embeddedSIMActivationCodePool-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools`
 *
 * The embedded SIM activation code pools created by this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 * The embedded SIM activation code pools created by this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: {
      path: ['embeddedSIMActivationCodePool-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}',
    paramDefs: {
      path: ['embeddedSIMActivationCodePool-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/embeddedSIMActivationCodePools`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/embeddedSIMActivationCodePools',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assign',
      paramDefs: {
        path: ['embeddedSIMActivationCodePool-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments`
   *
   * Navigational property to a list of targets to which this pool is assigned.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['embeddedSIMActivationCodePool-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments',
      paramDefs: {
        path: ['embeddedSIMActivationCodePool-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
   *
   * Navigational property to a list of targets to which this pool is assigned.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMActivationCodePoolAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
      paramDefs: {
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMActivationCodePoolAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMActivationCodePoolAssignment-id'],
      },
      params,
    };
  },
};

export const deviceStates = {
  /**
   * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates`
   *
   * Navigational property to a list of device states for this pool.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['embeddedSIMActivationCodePool-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['body'],
    params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
      paramDefs: {
        path: ['embeddedSIMActivationCodePool-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
   *
   * Navigational property to a list of device states for this pool.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMDeviceState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
      paramDefs: {
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMDeviceState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['embeddedSIMActivationCodePool-id', 'embeddedSIMDeviceState-id'],
      },
      params,
    };
  },
};
