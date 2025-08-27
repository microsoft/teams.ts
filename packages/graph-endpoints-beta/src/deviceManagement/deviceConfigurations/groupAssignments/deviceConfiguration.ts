import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration`
 *
 * The navigation link to the Device Configuration being targeted.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/groupAssignments/{deviceConfigurationGroupAssignment-id}/deviceConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}
