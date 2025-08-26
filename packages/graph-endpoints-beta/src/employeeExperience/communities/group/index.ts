export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/communities/{community-id}/group': Operation<
    '/employeeExperience/communities/{community-id}/group',
    'get'
  >;
}

/**
 * `GET /employeeExperience/communities/{community-id}/group`
 *
 * The Microsoft 365 group that manages the membership of this community.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/group']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'community-id', in: 'path' },
    ],
    params,
  };
}
