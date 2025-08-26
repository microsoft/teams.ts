export * as roleAssignments from './roleAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/roleDefinitions': Operation<'/deviceManagement/roleDefinitions', 'get'>;
  'GET /deviceManagement/roleDefinitions/{roleDefinition-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/roleDefinitions': Operation<'/deviceManagement/roleDefinitions', 'post'>;
}

/**
 * `DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}`
 *
 * Deletes a deviceAndAppManagementRoleDefinition.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'roleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions`
 *
 * List properties and relationships of the deviceAndAppManagementRoleDefinition objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleDefinitions']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}`
 *
 * Read properties and relationships of the deviceAndAppManagementRoleDefinition object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}`
 *
 * Update the properties of a deviceAndAppManagementRoleDefinition object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    paramDefs: [{ name: 'roleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleDefinitions`
 *
 * Create a new roleDefinition object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleDefinitions']['body'],
  params?: IEndpoints['POST /deviceManagement/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleDefinitions']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
