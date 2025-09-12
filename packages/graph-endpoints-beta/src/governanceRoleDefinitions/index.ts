import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /governanceRoleDefinitions': Operation<'/governanceRoleDefinitions', 'get'>;
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /governanceRoleDefinitions': Operation<'/governanceRoleDefinitions', 'post'>;
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}/resource',
    'get'
  >;
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleDefinitions`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['governanceRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: {
      path: ['governanceRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceRoleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleDefinitions']['body']
): EndpointRequest<IEndpoints['POST /governanceRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleDefinitions',
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleDefinition-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleDefinition-id'],
      },
      params,
    };
  },
};
