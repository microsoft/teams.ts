export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user',
    'get'
  >;
}

/**
 * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user`
 *
 * Represents an Entra user account.
 */
export function get(
  params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}/user',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsUserConfiguration-id', in: 'path' },
    ],
    params,
  };
}
