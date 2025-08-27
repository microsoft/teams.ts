export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/group': Operation<'/teams/{team-id}/group', 'get'>;
}

/**
 * `GET /teams/{team-id}/group`
 *
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/group']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/group']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
