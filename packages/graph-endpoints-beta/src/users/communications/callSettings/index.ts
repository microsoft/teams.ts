import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'delete'
  >;
  'GET /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'get'
  >;
  'PATCH /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'patch'
  >;
  'GET /users/{user-id}/communications/callSettings/delegates': Operation<
    '/users/{user-id}/communications/callSettings/delegates',
    'get'
  >;
  'POST /users/{user-id}/communications/callSettings/delegates': Operation<
    '/users/{user-id}/communications/callSettings/delegates',
    'post'
  >;
  'GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'get'
  >;
  'PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
    'delete'
  >;
  'GET /users/{user-id}/communications/callSettings/delegators': Operation<
    '/users/{user-id}/communications/callSettings/delegators',
    'get'
  >;
  'POST /users/{user-id}/communications/callSettings/delegators': Operation<
    '/users/{user-id}/communications/callSettings/delegators',
    'post'
  >;
  'GET /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
    'get'
  >;
  'PATCH /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/communications/callSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/communications/callSettings`
 *
 * The call settings assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/communications/callSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/communications/callSettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const delegates = {
  /**
   * `GET /users/{user-id}/communications/callSettings/delegates`
   *
   * Represents the delegate settings.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/communications/callSettings/delegates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/communications/callSettings/delegates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/communications/callSettings/delegates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['body'],
    params?: IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/communications/callSettings/delegates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/communications/callSettings/delegates',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
   *
   * Represents the delegate settings.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
    };
  },
};

export const delegators = {
  /**
   * `GET /users/{user-id}/communications/callSettings/delegators`
   *
   * Represents the delegator settings.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegators']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/communications/callSettings/delegators']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/communications/callSettings/delegators',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/communications/callSettings/delegators`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/communications/callSettings/delegators']['body'],
    params?: IEndpoints['POST /users/{user-id}/communications/callSettings/delegators']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/communications/callSettings/delegators']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/communications/callSettings/delegators',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}`
   *
   * Represents the delegator settings.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'delegationSettings-id'],
      },
      params,
    };
  },
};
