import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/communications/callSettings': Operation<'/me/communications/callSettings', 'delete'>;
  'GET /me/communications/callSettings': Operation<'/me/communications/callSettings', 'get'>;
  'PATCH /me/communications/callSettings': Operation<'/me/communications/callSettings', 'patch'>;
  'GET /me/communications/callSettings/delegates': Operation<
    '/me/communications/callSettings/delegates',
    'get'
  >;
  'POST /me/communications/callSettings/delegates': Operation<
    '/me/communications/callSettings/delegates',
    'post'
  >;
  'GET /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'get'
  >;
  'PATCH /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'patch'
  >;
  'DELETE /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'delete'
  >;
  'GET /me/communications/callSettings/delegators': Operation<
    '/me/communications/callSettings/delegators',
    'get'
  >;
  'POST /me/communications/callSettings/delegators': Operation<
    '/me/communications/callSettings/delegators',
    'post'
  >;
  'GET /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'get'
  >;
  'PATCH /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'patch'
  >;
  'DELETE /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/communications/callSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/communications/callSettings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/communications/callSettings`
 *
 * The call settings assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /me/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['GET /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/communications/callSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/communications/callSettings']['body']
): EndpointRequest<IEndpoints['PATCH /me/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/communications/callSettings',
    body,
  };
}

export const delegates = {
  /**
   * `GET /me/communications/callSettings/delegates`
   *
   * Get a list of all delegates for a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/communications/callSettings/delegates']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/communications/callSettings/delegates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/communications/callSettings/delegates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/communications/callSettings/delegates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/communications/callSettings/delegates']['body']
  ): EndpointRequest<IEndpoints['POST /me/communications/callSettings/delegates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/communications/callSettings/delegates',
      body,
    };
  },
  /**
   * `GET /me/communications/callSettings/delegates/{delegationSettings-id}`
   *
   * Read the properties and relationships of a delegationSettings object.
   */
  get: function get(
    params?: IEndpoints['GET /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegationSettings-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/communications/callSettings/delegates/{delegationSettings-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['body'],
    params?: IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        path: ['delegationSettings-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/communications/callSettings/delegates/{delegationSettings-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegationSettings-id'],
      },
      params,
    };
  },
};

export const delegators = {
  /**
   * `GET /me/communications/callSettings/delegators`
   *
   * Get a list of all delegators for a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/communications/callSettings/delegators']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/communications/callSettings/delegators']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/communications/callSettings/delegators',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/communications/callSettings/delegators`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/communications/callSettings/delegators']['body']
  ): EndpointRequest<IEndpoints['POST /me/communications/callSettings/delegators']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/communications/callSettings/delegators',
      body,
    };
  },
  /**
   * `GET /me/communications/callSettings/delegators/{delegationSettings-id}`
   *
   * Represents the delegator settings.
   */
  get: function get(
    params?: IEndpoints['GET /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegationSettings-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/communications/callSettings/delegators/{delegationSettings-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['body'],
    params?: IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        path: ['delegationSettings-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/communications/callSettings/delegators/{delegationSettings-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegationSettings-id'],
      },
      params,
    };
  },
};
