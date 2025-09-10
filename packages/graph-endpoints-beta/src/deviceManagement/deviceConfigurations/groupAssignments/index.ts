import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceConfiguration-id', 'deviceConfigurationGroupAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments`
 *
 * The list of group assignments for the device configuration profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments',
    paramDefs: {
      path: ['deviceConfiguration-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}`
 *
 * The list of group assignments for the device configuration profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    paramDefs: {
      path: ['deviceConfiguration-id', 'deviceConfigurationGroupAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}',
    paramDefs: {
      path: ['deviceConfiguration-id', 'deviceConfigurationGroupAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments',
    paramDefs: {
      path: ['deviceConfiguration-id'],
    },
    params,
    body,
  };
}

export const deviceConfiguration = {
  /**
   * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration`
   *
   * The navigation link to the Device Configuration being targeted.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfiguration-id', 'deviceConfigurationGroupAssignment-id'],
      },
      params,
    };
  },
};
