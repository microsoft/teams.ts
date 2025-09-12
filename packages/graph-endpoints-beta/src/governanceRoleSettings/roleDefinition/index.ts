import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'patch'
  >;
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    'get'
  >;
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleSetting-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 * Read-only. The role definition that is enforced with this role setting.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleSetting-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleSetting-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleSetting-id'],
      },
      params,
    };
  },
};
