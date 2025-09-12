import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    'patch'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments',
    'get'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
    'get'
  >;
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate',
    'post'
  >;
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate',
    'post'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'patch'
  >;
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'patch'
  >;
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
    'delete'
  >;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: {
      path: ['privilegedRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo',
    paramDefs: {
      path: ['privilegedRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

export const assignments = {
  /**
   * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignmentRequest-id', 'privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const selfActivate = {
  /**
   * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['body'],
    params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfActivate',
      paramDefs: {
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
};

export const selfDeactivate = {
  /**
   * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/selfDeactivate',
      paramDefs: {
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['body'],
    params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
      paramDefs: {
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const summary = {
  /**
   * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['body'],
    params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
      paramDefs: {
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/roleInfo/summary',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};
