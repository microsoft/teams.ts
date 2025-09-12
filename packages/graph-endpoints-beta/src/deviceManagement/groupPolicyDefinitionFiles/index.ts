import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles',
    'post'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyDefinitionFile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitionFiles`
 *
 * The available group policy definition files for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitionFiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 * The available group policy definition files for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: {
      path: ['groupPolicyDefinitionFile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: {
      path: ['groupPolicyDefinitionFile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyDefinitionFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyDefinitionFiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyDefinitionFiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyDefinitionFiles',
    body,
  };
}

export const definitions = {
  /**
   * `GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions`
   *
   * The group policy definitions associated with the file.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyDefinitionFile-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}`
   *
   * The group policy definitions associated with the file.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyDefinitionFile-id', 'groupPolicyDefinition-id'],
      },
      params,
    };
  },
};
