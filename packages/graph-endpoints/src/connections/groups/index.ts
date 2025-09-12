import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/groups': Operation<
    '/connections/{externalConnection-id}/groups',
    'get'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/groups': Operation<
    '/connections/{externalConnection-id}/groups',
    'post'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'get'
  >;
  'POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'post'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'patch'
  >;
  'DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'delete'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalGroup-id'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/groups`
 *
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/groups']['response']> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/groups',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /connections/{externalConnection-id}/groups`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/groups']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<IEndpoints['POST /connections/{externalConnection-id}/groups']['response']> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/groups',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members`
   *
   * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or an externalGroup as members.
   */
  list: function list(
    params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
  > {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['externalConnection-id', 'externalGroup-id'],
      },
      params,
    };
  },
  /**
   * `POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['body'],
    params?: IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
  > {
    return {
      method: 'post',
      path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
      paramDefs: {
        path: ['externalConnection-id', 'externalGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or an externalGroup as members.
   */
  get: function get(
    params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['body'],
    params?: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalConnection-id', 'externalGroup-id', 'identity-id'],
      },
      params,
    };
  },
};
