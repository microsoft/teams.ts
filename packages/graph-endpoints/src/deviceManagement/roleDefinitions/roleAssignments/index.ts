export * as roleDefinition from './roleDefinition';

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
}

/**
 * `DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 * Deletes a roleAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'roleDefinition-id', in: 'path' },
      { name: 'roleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments`
 *
 * List properties and relationships of the roleAssignment objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 * Read properties and relationships of the roleAssignment object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleDefinition-id', in: 'path' },
      { name: 'roleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}`
 *
 * Update the properties of a roleAssignment object.
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
    paramDefs: [
      { name: 'roleDefinition-id', in: 'path' },
      { name: 'roleAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments`
 *
 * Create a new roleAssignment object.
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
    paramDefs: [{ name: 'roleDefinition-id', in: 'path' }],
    params,
    body,
  };
}
