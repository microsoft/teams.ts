import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition': Operation<
    '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition`
 *
 * Role definition this assignment is part of.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleDefinitions/{roleDefinition-id}/roleAssignments/{roleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleDefinition-id', in: 'path' },
      { name: 'roleAssignment-id', in: 'path' },
    ],
    params,
  };
}
