import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments',
    'get'
  >;
  'GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments',
    'post'
  >;
  'GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['roleDefinition-id', 'roleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments`
 *
 * List of Role assignments for this role definition.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments',
    paramDefs: {
      path: ['roleDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 * List of Role assignments for this role definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    paramDefs: {
      path: ['roleDefinition-id', 'roleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    paramDefs: {
      path: ['roleDefinition-id', 'roleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments',
    paramDefs: {
      path: ['roleDefinition-id'],
    },
    params,
    body,
  };
}

export const roleDefinition = {
  /**
   * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition`
   *
   * Indicates the role definition for this role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['roleDefinition-id', 'roleAssignment-id'],
      },
      params,
    };
  },
};
