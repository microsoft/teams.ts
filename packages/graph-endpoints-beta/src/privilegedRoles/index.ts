import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'delete'
  >;
  'GET /privilegedRoles': Operation<'/privilegedRoles', 'get'>;
  'GET /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'patch'
  >;
  'POST /privilegedRoles': Operation<'/privilegedRoles', 'post'>;
  'GET /privilegedRoles/{privilegedRole-id}/assignments': Operation<
    '/privilegedRoles/{privilegedRole-id}/assignments',
    'get'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}',
    'get'
  >;
  'POST /privilegedRoles/{privilegedRole-id}/selfActivate': Operation<
    '/privilegedRoles/{privilegedRole-id}/selfActivate',
    'post'
  >;
  'POST /privilegedRoles/{privilegedRole-id}/selfDeactivate': Operation<
    '/privilegedRoles/{privilegedRole-id}/selfDeactivate',
    'post'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'patch'
  >;
  'DELETE /privilegedRoles/{privilegedRole-id}/settings': Operation<
    '/privilegedRoles/{privilegedRole-id}/settings',
    'delete'
  >;
  'GET /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'patch'
  >;
  'DELETE /privilegedRoles/{privilegedRole-id}/summary': Operation<
    '/privilegedRoles/{privilegedRole-id}/summary',
    'delete'
  >;
}

/**
 * `DELETE /privilegedRoles/{privilegedRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedRole-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoles`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoles']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoles/{privilegedRole-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: {
      path: ['privilegedRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedRoles/{privilegedRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: {
      path: ['privilegedRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedRoles`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoles']['body']
): EndpointRequest<IEndpoints['POST /privilegedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoles',
    body,
  };
}

export const assignments = {
  /**
   * `GET /privilegedRoles/{privilegedRole-id}/assignments`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoles/{privilegedRole-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
  /**
   * `GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoles/{privilegedRole-id}/assignments/{privilegedRoleAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRole-id', 'privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const selfActivate = {
  /**
   * `POST /privilegedRoles/{privilegedRole-id}/selfActivate`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['body'],
    params?: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoles/{privilegedRole-id}/selfActivate',
      paramDefs: {
        path: ['privilegedRole-id'],
      },
      params,
      body,
    };
  },
};

export const selfDeactivate = {
  /**
   * `POST /privilegedRoles/{privilegedRole-id}/selfDeactivate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfDeactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfDeactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoles/{privilegedRole-id}/selfDeactivate',
      paramDefs: {
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /privilegedRoles/{privilegedRole-id}/settings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/settings']['parameters']
  ): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}/settings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoles/{privilegedRole-id}/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoles/{privilegedRole-id}/settings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['body'],
    params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoles/{privilegedRole-id}/settings',
      paramDefs: {
        path: ['privilegedRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoles/{privilegedRole-id}/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoles/{privilegedRole-id}/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
};

export const summary = {
  /**
   * `GET /privilegedRoles/{privilegedRole-id}/summary`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}/summary']['parameters']
  ): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}/summary']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedRoles/{privilegedRole-id}/summary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedRoles/{privilegedRole-id}/summary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['body'],
    params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}/summary']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedRoles/{privilegedRole-id}/summary',
      paramDefs: {
        path: ['privilegedRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedRoles/{privilegedRole-id}/summary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/summary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}/summary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedRoles/{privilegedRole-id}/summary',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedRole-id'],
      },
      params,
    };
  },
};
