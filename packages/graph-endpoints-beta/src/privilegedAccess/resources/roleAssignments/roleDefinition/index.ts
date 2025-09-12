import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    'patch'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 * Read-only. The role definition associated with the role assignment.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
