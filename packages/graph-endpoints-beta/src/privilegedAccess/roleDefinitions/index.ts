import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    'post'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceRoleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions`
 *
 * A collection of role definitions for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    paramDefs: {
      path: ['privilegedAccess-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 * A collection of role definitions for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    paramDefs: {
      path: ['privilegedAccess-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceRoleDefinition-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceRoleDefinition-id'],
      },
      params,
    };
  },
};
