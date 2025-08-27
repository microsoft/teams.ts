export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/group': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/group',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/group`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/group']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
