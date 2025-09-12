import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/groups': Operation<
    '/external/connections/{externalConnection-id}/groups',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/groups': Operation<
    '/external/connections/{externalConnection-id}/groups',
    'post'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'get'
  >;
  'POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'post'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'patch'
  >;
  'DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'delete'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 * Delete an externalGroup object.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalGroup-id'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups`
 *
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/groups`
 *
 * Create a new externalGroup object.
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/groups']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/groups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/groups',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members`
   *
   * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
   */
  list: function list(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['externalConnection-id', 'externalGroup-id'],
      },
      params,
    };
  },
  /**
   * `POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members`
   *
   * Create a new externalGroupMember object.
   */
  create: function create(
    body: IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['body'],
    params?: IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
      paramDefs: {
        path: ['externalConnection-id', 'externalGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
   */
  get: function get(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['body'],
    params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   * Delete an externalGroupMember object.
   */
  del: function del(
    params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
    };
  },
};
