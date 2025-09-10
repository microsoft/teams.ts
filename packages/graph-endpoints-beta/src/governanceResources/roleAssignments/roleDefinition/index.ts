import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'patch'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 * Read-only. The role definition associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
