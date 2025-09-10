import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    'patch'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments',
    'get'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}',
    'get'
  >;
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate',
    'post'
  >;
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate',
    'post'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'patch'
  >;
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
    'patch'
  >;
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
    'delete'
  >;
}

/**
 * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: {
      path: ['privilegedRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo',
    paramDefs: {
      path: ['privilegedRoleAssignment-id'],
    },
    params,
    body,
  };
}

export const assignments = {
  /**
   * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/assignments/{privilegedRoleAssignment-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignment-id', 'privilegedRoleAssignment-id1'],
      },
      params,
    };
  },
};

export const selfActivate = {
  /**
   * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['body'],
    params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfActivate',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
};

export const selfDeactivate = {
  /**
   * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/selfDeactivate',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['body'],
    params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const summary = {
  /**
   * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['body'],
    params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/roleInfo/summary',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};
