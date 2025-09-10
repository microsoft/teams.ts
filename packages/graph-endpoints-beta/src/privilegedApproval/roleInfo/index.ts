import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'delete'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    'patch'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments',
    'get'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
    'get'
  >;
  'POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate',
    'post'
  >;
  'POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate',
    'post'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'patch'
  >;
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
    'delete'
  >;
  'GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'patch'
  >;
  'DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
    'delete'
  >;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedApproval-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: {
      path: ['privilegedApproval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo',
    paramDefs: {
      path: ['privilegedApproval-id'],
    },
    params,
    body,
  };
}

export const assignments = {
  /**
   * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
  /**
   * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/assignments/{privilegedRoleAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedApproval-id', 'privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const selfActivate = {
  /**
   * `POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['body'],
    params?: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate',
      paramDefs: {
        path: ['privilegedApproval-id'],
      },
      params,
      body,
    };
  },
};

export const selfDeactivate = {
  /**
   * `POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate',
      paramDefs: {
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['body'],
    params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
      paramDefs: {
        path: ['privilegedApproval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
};

export const summary = {
  /**
   * `GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['body'],
    params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
      paramDefs: {
        path: ['privilegedApproval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}/roleInfo/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/summary',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedApproval-id'],
      },
      params,
    };
  },
};
