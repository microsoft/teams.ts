export * as deviceConfiguration from './deviceConfiguration';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationGroupAssignment-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationGroupAssignment-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationGroupAssignment-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
