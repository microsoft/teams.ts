export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/group': Operation<'/me/joinedTeams/{team-id}/group', 'get'>;
}

/**
 * `GET /me/joinedTeams/{team-id}/group`
 *
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/group']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
