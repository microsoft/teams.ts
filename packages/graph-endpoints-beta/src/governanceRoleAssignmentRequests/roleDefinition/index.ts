import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    'patch'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource',
    'get'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 * Read-only. The role definition that the request aims to.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition',
    paramDefs: {
      path: ['governanceRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};
