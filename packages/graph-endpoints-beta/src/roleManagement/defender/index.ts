export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender': Operation<'/roleManagement/defender', 'delete'>;
  'GET /roleManagement/defender': Operation<'/roleManagement/defender', 'get'>;
  'PATCH /roleManagement/defender': Operation<'/roleManagement/defender', 'patch'>;
  'GET /roleManagement/defender/customAppScopes': Operation<
    '/roleManagement/defender/customAppScopes',
    'get'
  >;
  'GET /roleManagement/defender/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/defender/customAppScopes/{customAppScope-id}',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/defender`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/defender`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/defender`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender']['body']
): EndpointRequest<IEndpoints['PATCH /roleManagement/defender']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender',
    body,
  };
}

export const customAppScopes = {
  /**
   * `GET /roleManagement/defender/customAppScopes`
   *
   * Get a list of customAppScope objects for an RBAC provider. Only the Microsoft Defender XDR Unified RBAC provider is supported.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/defender/customAppScopes']['parameters']
  ): EndpointRequest<IEndpoints['GET /roleManagement/defender/customAppScopes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/customAppScopes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /roleManagement/defender/customAppScopes/{customAppScope-id}`
   *
   * Represents the resources that the principal has been granted access.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/defender/customAppScopes/{customAppScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/defender/customAppScopes/{customAppScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/customAppScopes/{customAppScope-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customAppScope-id'],
      },
      params,
    };
  },
};
