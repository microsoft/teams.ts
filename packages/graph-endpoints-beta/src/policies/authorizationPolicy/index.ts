import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'delete'
  >;
  'GET /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'get'>;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'get'
  >;
  'PATCH /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'patch'
  >;
  'POST /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'post'>;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    'get'
  >;
  'POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    'post'
  >;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'get'
  >;
  'PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'patch'
  >;
  'DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'delete'
  >;
}

/**
 * `DELETE /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authorizationPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy`
 *
 * Retrieve the properties of an authorizationPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authorizationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 * The policy that controls Microsoft Entra authorization settings.
 */
export function get$1(
  params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: {
      path: ['authorizationPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: {
      path: ['authorizationPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/authorizationPolicy`
 *
 */
export function create(
  body: IEndpoints['POST /policies/authorizationPolicy']['body']
): EndpointRequest<IEndpoints['POST /policies/authorizationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authorizationPolicy',
    body,
  };
}

export const defaultUserRoleOverrides = {
  /**
   * `GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides`
   *
   */
  list: function list(
    params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authorizationPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['body'],
    params?: IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
      paramDefs: {
        path: ['authorizationPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authorizationPolicy-id', 'defaultUserRoleOverride-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['body'],
    params?: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
      paramDefs: {
        path: ['authorizationPolicy-id', 'defaultUserRoleOverride-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authorizationPolicy-id', 'defaultUserRoleOverride-id'],
      },
      params,
    };
  },
};
