export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as transitiveRoleAssignments from './transitiveRoleAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange': Operation<'/roleManagement/exchange', 'delete'>;
  'GET /roleManagement/exchange': Operation<'/roleManagement/exchange', 'get'>;
  'PATCH /roleManagement/exchange': Operation<'/roleManagement/exchange', 'patch'>;
  'GET /roleManagement/exchange/customAppScopes': Operation<
    '/roleManagement/exchange/customAppScopes',
    'get'
  >;
  'POST /roleManagement/exchange/customAppScopes': Operation<
    '/roleManagement/exchange/customAppScopes',
    'post'
  >;
  'GET /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'get'
  >;
  'PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'patch'
  >;
  'DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/exchange`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/exchange`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange']['body']
): EndpointRequest<IEndpoints['PATCH /roleManagement/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange',
    body,
  };
}

export const customAppScopes = {
  /**
   * `GET /roleManagement/exchange/customAppScopes`
   *
   * Get a list of customAppScope objects for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/exchange/customAppScopes']['parameters']
  ): EndpointRequest<IEndpoints['GET /roleManagement/exchange/customAppScopes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/exchange/customAppScopes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/exchange/customAppScopes`
   *
   * Create a new customAppScope object for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/exchange/customAppScopes']['body']
  ): EndpointRequest<IEndpoints['POST /roleManagement/exchange/customAppScopes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/exchange/customAppScopes',
      body,
    };
  },
  /**
   * `GET /roleManagement/exchange/customAppScopes/{customAppScope-id}`
   *
   * Get the properties of a customAppScope object for an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customAppScope-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}`
   *
   * Update an existing customAppScope object of an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
      paramDefs: {
        path: ['customAppScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}`
   *
   * Delete a customAppScope object of an RBAC provider. Currently only the Exchange Online RBAC provider is supported.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/exchange/customAppScopes/{customAppScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/exchange/customAppScopes/{customAppScope-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['customAppScope-id'],
      },
      params,
    };
  },
};
