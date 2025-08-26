export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/group': Operation<'/groups/{group-id}/team/group', 'get'>;
}

/**
 * `GET /groups/{group-id}/team/group`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/group']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/group']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/group',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
