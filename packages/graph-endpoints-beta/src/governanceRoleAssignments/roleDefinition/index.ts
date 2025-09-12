import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'patch'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
    'get'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 * Read-only. The role definition associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
