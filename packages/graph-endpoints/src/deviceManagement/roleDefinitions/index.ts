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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleDefinitions/{roleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['roleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions`
 *
 * The Role Definitions.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleDefinitions']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}`
 *
 * The Role Definitions.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}',
    paramDefs: {
      path: ['roleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleDefinitions/{roleDefinition-id}`
 *
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
    paramDefs: {
      path: ['roleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleDefinitions']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleDefinitions']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/roleDefinitions',
    body,
  };
}
