import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleDefinitions': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions',
    'post'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions`
 *
 * The collection of role definitions for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions',
    paramDefs: {
      path: ['governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 * The collection of role definitions for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions',
    paramDefs: {
      path: ['governanceResource-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleDefinition-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleDefinition-id'],
      },
      params,
    };
  },
};
